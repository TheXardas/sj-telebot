import apiFetch from '../apiFetch';
import config from '../../../config';

export default function getVacancies(filters) {
    return apiFetch('/cv/search/vacancy/', Object.assign(
        {
            extended: '1',
            detail_search: '1',
            sbmit: '1',
            geo: {
                t: ['4'],
            },
            limit: config.vacancyLimit,
        },
        filters
    ));
}
