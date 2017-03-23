import apiFetch from '../apiFetch';

export default function getCities() {
    return apiFetch('/hrom/town/list/');
}