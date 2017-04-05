import formatVacancyItem from './formatVacancyItem';
import formatCommandLink from '../views/formatCommandLink';
import config from '../../../config';

export default function formatVacancyList(vacancies, page) {
    const truePage = (parseInt(page, 10) || 0) + 1;

    if (!vacancies.length) {
        return 'Пардоньте, ничего не нашлось. Можно попробовать дотюнить настройки поиск, или переформулировать вопрос.';
    }

    const renderedVacancies = vacancies.map(vacancy => formatVacancyItem(vacancy)).join('\n');

    return renderedVacancies + `\n\n(Страница ${page})`;
}
