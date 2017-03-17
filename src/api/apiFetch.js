import makeRequest from './makeRequest';
import config from '../config';

export default function apiFetch(url, query) {
    return makeRequest({
        path: url,
        query,
    });
}