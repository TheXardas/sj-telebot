import states from '../constants/states';
import formatCommandLink from '../views/formatCommandLink';
import mainMenuKeyboard from '../keyboards/mainMenu';
import settings from './settings';


const settingsStates = [
    states.SETTINGS_PROFESSION,
    states.SETTINGS_SALARY,
    states.SETTINGS_CITY,
    states.SETTINGS_GENDER,
    states.SETTINGS_SORTING,
    states.SETTINGS_SPECIALIZATION,
    states.SETTINGS_RESET,
];

const mainMenuText = `Главное меню:
${formatCommandLink('search')}
${formatCommandLink('settings')}
${formatCommandLink('app')}
${formatCommandLink('start')}`;

function showMainMenu(store, msg, bot) {
    bot.sendMessage(msg.chat.id, mainMenuText, {
        reply_markup: mainMenuKeyboard
    });
}

export default async function back(store, msg, bot) {
    const state = await store.get(msg.chat.id, 'state');

    if (settingsStates.includes(state)) {
        return settings(store, msg, bot);
    }

    // Показываем главное меню.
    return showMainMenu(store, msg, bot);
}
