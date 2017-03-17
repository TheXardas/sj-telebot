import superagent from 'superagent';

export default function makeRequest(requestOptions) {
    return new Promise((resolve, reject) => {
        const { path, headers, method, queryParams, body } = requestOptions;

        try {
            const request = superagent(method, path);

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

            request.accept('application/json').timeout(3000).redirects(1);

            if (queryParams) {
                request.query(queryParams);
            }

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
