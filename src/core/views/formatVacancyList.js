import formatVacancyItem from './formatVacancyItem';

export default function formatVacancyList(vacancies) {
    if (!vacancies.length) {
        return 'Пардоньте, ничего не нашлось. Можно попробовать дотюнить настройки поиск, или переформулировать вопрос.';
    }

    return vacancies.map(vacancy => formatVacancyItem(vacancy)).join('\n');
}
