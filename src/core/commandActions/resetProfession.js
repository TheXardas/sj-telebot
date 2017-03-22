import states from '../constants/states';
import settingsMenuKeyboard from '../keyboards/settingsMenu';

export default function resetProfession(store, msg, bot) {
    store.set(msg.chat.id, 'state', states.SETTINGS_ROOT);
    bot.sendMessage(msg.chat.id, 'Ок.', { reply_markup: settingsMenuKeyboard });
}
