import settingsMenuKeyboard from '../keyboards/settingsMenu';
import states from '../constants/states';

export default async function setCityAny(store, msg, bot) {
    await store.setFilter(msg.chat.id, 'city', null);
    await store.set(msg.chat.id, 'state', states.SETTINGS_ROOT);
    bot.sendMessage(msg.chat.id, 'Ладно.', { reply_markup: settingsMenuKeyboard });
}
