import settingsMenuKeyboard from '../keyboards/settingsMenu';
import states from '../constants/states';

export default function setSpecializationAny(store, msg, bot) {
    store.setFilter(msg.chat.id, 'specialization', null);
    store.set(msg.chat.id, 'state', states.SETTINGS_ROOT);
    bot.sendMessage(msg.chat.id, 'Понятненько.', { reply_markup: settingsMenuKeyboard });
}
