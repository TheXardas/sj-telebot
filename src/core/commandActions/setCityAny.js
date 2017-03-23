import settingsMenuKeyboard from '../keyboards/settingsMenu';
import states from '../constants/states';

export default function setCityAny(store, msg, bot) {
    store.setFilter(msg.chat.id, 'city', null);
    store.set(msg.chat.id, 'state', states.SETTINGS_ROOT);
    bot.sendMessage(msg.chat.id, 'Ладно.', { reply_markup: settingsMenuKeyboard });
}
