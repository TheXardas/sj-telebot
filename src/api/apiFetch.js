import makeRequest from './makeRequest';
import config from '../../config';

export default function apiFetch(url, query) {
    return makeRequest({
        path: config.api.server + url,
        query,
        headers: {
            'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_3 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B329 Safari/8536.25',
        }
    }).then(data => {
        if (!data.response.text) {
            throw new Error('Failed to get text in response!');
        }

        const parsedText = JSON.parse(data.response.text);
        if (!parsedText) {
            throw new Error('Failed to parse text!');
        }

        if (parsedText.error) {
            throw new Error(parsedText.error.code + ': ' + JSON.stringify(parsedText.error.data));
        }
        return parsedText.content;
    })
}