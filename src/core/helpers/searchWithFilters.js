import formatVacancyList from '../views/formatVacancyList';
import getVacancies from '../../api/get/vacancies';

function getGender(gender) {
    switch (gender) {
        case 'male':
            return 1;
        case 'female':
            return 2;
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
            t: [filters.city],
        };
    }
    if (filters.order) {
        searchParams.orderBy = filters.order;
    }
    if (parseInt(filters.salary, 10)) {
        searchParams.pay1 = parseInt(filters.salary, 10);
    }
    // TODO зарплата по договоренности и прочие фильтры
    return searchParams;
}

export default function searchWithFilters(store, msg, bot, filters) {
    const searchParams = prepareSearchParams(filters);

    return getVacancies(searchParams).then(data => {
        const vacancies = data.list;

        bot.sendMessage(msg.chat.id, formatVacancyList(vacancies), {
            parse_mode: 'Html',
        });
    }).catch(err => {
        bot.sendMessage(msg.chat.id, 'Блин, чет у меня не получилось: ' + err);
        console.error(err);
    });
}
