import formatVacancyItem from './formatVacancyItem';
import formatCommandLink from '../views/formatCommandLink';
import config from '../../../config';

export default function formatVacancyList(vacancies) {
    if (!vacancies.length) {
        return 'Пардоньте, ничего не нашлось. Можно попробовать дотюнить настройки поиск, или переформулировать вопрос.';
    }

    const renderedVacancies = vacancies.map(vacancy => formatVacancyItem(vacancy)).join('\n');
    let nextPageLink = '';
    if (vacancies.length === config.vacancyLimit) {
        nextPageLink = '\n\n' + formatCommandLink('next_page');
    }

    return renderedVacancies + nextPageLink;
}
