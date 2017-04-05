import formatVacancyList from '../views/formatVacancyList';
import getVacancies from '../../api/get/vacancies';

function getGender(gender) {
    switch (gender) {
        case 'male':
            return 2;
        case 'female':
            return 3;
        default:
            return '';
    }
}

function prepareSearchParams(filters) {
    const searchParams = {};
    if (filters.profession) {
        searchParams.keywords = [{ keys: filters.profession }];
    }
    if (filters.gender) {
        searchParams.pol = getGender(filters.gender);
    }
    if (filters.city) {
        searchParams.geo = {
            t: [filters.city.id],
        };
    }
    if (filters.order && filters.order === 'salary') {
        searchParams.order_by = {'payment_sort': 'desc'};
    }
    if (parseInt(filters.salary, 10)) {
        searchParams.pay1 = parseInt(filters.salary, 10);
    }
    if (filters.page) {
        searchParams.page = filters.page + 1;
    }
    // TODO зарплата по договоренности и прочие фильтры
    return searchParams;
}

export default function searchWithFilters(store, msg, bot, filters) {
    const searchParams = prepareSearchParams(filters);

    return getVacancies(searchParams).then(data => {
        return data.list;
    }).catch(err => {
        bot.sendMessage(msg.chat.id, 'Блин, чет у меня не получилось: ' + err);
        console.error(err);
    });
}
