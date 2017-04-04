import inlineActions from './constants/inlineActions';
import getVacancy from '../api/get/vacancy';
import formatVacancyCard from './views/formatVacancyCard';
import getVacancyCardKeyboard from './keyboards/getVacancyCard';

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
        bot.answerCallbackQuery(msg.id);
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
}