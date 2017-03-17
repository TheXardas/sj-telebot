import apiFetch from '../apiFetch';

export default function getVacancies(filters) {
    return apiFetch('/cv/search/vacancy/', filters);
}
