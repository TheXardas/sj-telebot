import superagent from 'superagent';
import qs from 'qs';

function prepareQueryStringParameter(param) {
    if (typeof param === 'boolean') {
        return param ? 1 : 0;
    }
    if (typeof param === 'object' && param !== null) {
        // Массивчик
        if (Array.isArray(param)) {
            return param.map(prepareQueryStringParameter);
        }

        // Просто объект
        const resultObject = {};
        Object.keys(param).forEach(key => {
            resultObject[key] = prepareQueryStringParameter(param[key]);
        });
        return resultObject;
    }
    // Что угодно другое
    return param;
}

export default function makeRequest(requestOptions) {
    return new Promise((resolve, reject) => {
        const { path, headers, method, query, body } = requestOptions;

        try {

            let url = path;
            if (query) {
                url += '?' + qs.stringify(query, { arrayFormat: 'brackets' });
            }
            const request = superagent(method, url);

            request.set('X-Requested-With', 'XMLHttpRequest');

            if (headers) {
                if (headers.cookie) {
                    request.set('Cookie', headers.cookie);
                }
                if (headers['user-agent']) {
                    request.set('User-Agent', headers['user-agent']);
                }
                if (headers['x-real-ip']) {
                    request.set('X-Real-IP', headers['x-real-ip']);
                }
                if (headers['x-client-proto']) {
                    request.set('X-Client-Proto', headers['x-client-proto']);
                }
            }

            request.accept('application/json').timeout(3000).redirects(3);

            if (body) {
                request.set('Content-Type', 'application/json');
                request.send(body);
            }

            request.end((error, response) => {
                resolve({ error, response });
            });
        } catch (error) {
            reject({ error });
        }
    });
}
