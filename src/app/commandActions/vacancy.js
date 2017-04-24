import getVacancy from '../../api/get/vacancy';
import commands, { keysByCommands } from '../constants/commands';
import formatVacancyCard from '../views/formatVacancyCard';
import getVacancyCardKeyboard from '../keyboards/getVacancyCard';

export default function vacancy(store, msg, bot) {
    const vacancyId = msg.text.replace(keysByCommands[commands.vacancy] + '_', '');

    return getVacancy(vacancyId).then(data => {
        bot.sendMessage(msg.chat.id, formatVacancyCard(data), {
            parse_mode: 'Html',
            disable_web_page_preview: true,
            reply_markup: getVacancyCardKeyboard(data),
        });
    })
}
