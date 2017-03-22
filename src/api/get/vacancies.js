import apiFetch from '../apiFetch';

export default function getVacancies(filters) {
    return apiFetch('/cv/search/vacancy/', Object.assign(
        {
            extended: '1',
            detail_search: '1',
            sbmit: '1',
            geo: {
                t: ['4'],
            },
            limit: 10,
        },
        filters
    ));
}
