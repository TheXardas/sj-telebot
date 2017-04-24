import inlineActions, { keysByCommands } from '../constants/inlineActions';

export default function getVacancyCardKeyboard(vacancy) {
    return {
        inline_keyboard: [
            [
                {
                    text: inlineActions.aboutVacancy,
                    callback_data: keysByCommands[inlineActions.aboutVacancy] + vacancy.id,
                },
                {
                    text: inlineActions.vacancyRequirements,
                    callback_data: keysByCommands[inlineActions.vacancyRequirements] + vacancy.id,
                },
                {
                    text: inlineActions.vacancyReward,
                    callback_data: keysByCommands[inlineActions.vacancyReward] + vacancy.id,
                },
            ],
            [
                {
                    text: inlineActions.aboutCompanyVacancy,
                    callback_data: keysByCommands[inlineActions.aboutCompanyVacancy] + vacancy.id,
                },
                {
                    text: 'Отклинуться на сайте',
                    url: vacancy.url,
                },
            ],
        ],
    };
}
