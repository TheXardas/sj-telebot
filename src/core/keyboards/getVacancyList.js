import inlineActions, { keysByCommands } from '../constants/inlineActions';
import config from '../../../config';

export default function getVacancyListKeyboard(vacancies, page) {
    const result = {
        inline_keyboard: [[]],
    };

    const truePage = parseInt(page, 10);

    if (truePage) {
        result.inline_keyboard[0].push({
            text: inlineActions.prevVacancyPage,
            callback_data: 'prevVacancyPage' + (truePage - 1).toString(),
        });
    }

    if (vacancies.length === config.vacancyLimit) {
        result.inline_keyboard[0].push({
            text: inlineActions.nextVacancyPage,
            callback_data: 'nextVacancyPage' + (truePage + 1).toString(),
        });
    }

    return result;
}
