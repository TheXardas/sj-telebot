import apiFetch from '../apiFetch';

export default function getSpecializations() {
    return apiFetch(`/cv/search/dictionary/catalogues/`);
}
