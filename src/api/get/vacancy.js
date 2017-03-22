import apiFetch from '../apiFetch';

export default function getVacancy(id) {
    return apiFetch(`/cv/search/vacancy/${id}/`);
}
