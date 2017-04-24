import getVacancy from '../api/get/vacancy';
import formatVacancyCard from './views/formatVacancyCard';
import getVacancyCardKeyboard from './keyboards/getVacancyCard';
import getVacancyListKeyboard from './keyboards/getVacancyList';
import searchWithFilters from './helpers/searchWithFilters';
import formatVacancyList from './views/formatVacancyList';

const changeVacancyPage = async (store, msg, bot, page) => {
    await store.setFilter(msg.message.chat.id, 'page', page);
    const filters = await store.getFilters(msg.message.chat.id);
    const vacancies = await searchWithFilters(store, msg, bot, filters);
    return bot.editMessageText(formatVacancyList(vacancies, page), {
        parse_mode: 'Html',
        chat_id: msg.message.chat.id,
        message_id: msg.message.message_id,
        reply_markup: getVacancyListKeyboard(vacancies, page),
    });
};

export default {
    aboutVacancy: async (store, msg, bot, vacancyId) => {
        const vacancy = await getVacancy(vacancyId);
        bot.editMessageText(formatVacancyCard(vacancy, 'aboutVacancy'), {
            parse_mode: 'Html',
            chat_id: msg.message.chat.id,
            message_id: msg.message.message_id,
            disable_web_page_preview: true,
            reply_markup: getVacancyCardKeyboard(vacancy),
        });
    },
    aboutCompanyVacancy: async (store, msg, bot, vacancyId) => {
        const vacancy = await getVacancy(vacancyId);
        return bot.editMessageText(formatVacancyCard(vacancy, 'aboutCompanyVacancy'), {
            parse_mode: 'Html',
            chat_id: msg.message.chat.id,
            message_id: msg.message.message_id,
            disable_web_page_preview: true,
            reply_markup: getVacancyCardKeyboard(vacancy),
        });
    },
    vacancyRequirements: async (store, msg, bot, vacancyId) => {
        const vacancy = await getVacancy(vacancyId);
        return bot.editMessageText(formatVacancyCard(vacancy, 'vacancyRequirements'), {
            parse_mode: 'Html',
            chat_id: msg.message.chat.id,
            message_id: msg.message.message_id,
            disable_web_page_preview: true,
            reply_markup: getVacancyCardKeyboard(vacancy),
        });
    },
    vacancyReward: async (store, msg, bot, vacancyId) => {
        const vacancy = await getVacancy(vacancyId);
        return bot.editMessageText(formatVacancyCard(vacancy, 'vacancyReward'), {
            parse_mode: 'Html',
            chat_id: msg.message.chat.id,
            message_id: msg.message.message_id,
            disable_web_page_preview: true,
            reply_markup: getVacancyCardKeyboard(vacancy),
        });
    },
    nextVacancyPage: changeVacancyPage,
    prevVacancyPage: changeVacancyPage,
}