import settingsMenuKeyboard from '../keyboards/settingsMenu';
import states from '../constants/states';

export default async function setSpecializationAny(store, msg, bot) {
    await store.setFilter(msg.chat.id, 'specialization', null);
    await store.set(msg.chat.id, 'state', states.SETTINGS_ROOT);
    bot.sendMessage(msg.chat.id, 'Понятненько.', { reply_markup: settingsMenuKeyboard });
}
