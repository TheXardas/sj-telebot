import searchWithFilters from '../helpers/searchWithFilters';
import formatVacancyList from '../views/formatVacancyList';
import getVacancyListKeyboard from '../keyboards/getVacancyList';

export default async function search(store, msg, bot) {
    const filters = await store.getFilters(msg.chat.id);
    const vacancies = await searchWithFilters(store, msg, bot, filters);
    bot.sendMessage(msg.chat.id, formatVacancyList(vacancies, filters.page), {
        parse_mode: 'Html',
        reply_markup: getVacancyListKeyboard(vacancies, filters.page),
    });
}
