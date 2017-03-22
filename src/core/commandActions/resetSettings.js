import states from '../constants/states';
import resetSettingsKeyboard from '../keyboards/resetSettings';

export default function resetSettings(store, msg, bot) {
    store.set(msg.chat.id, 'state', states.SETTINGS_RESET);
    bot.sendMessage(msg.chat.id, 'Точно? Потом прийдется все заново вводить.', { reply_markup: resetSettingsKeyboard })
}
