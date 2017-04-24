import states from '../constants/states';
import settingsMenuKeyboard from '../keyboards/settingsMenu';

export default async function resetProfession(store, msg, bot) {
    await store.set(msg.chat.id, 'state', states.SETTINGS_ROOT);
    bot.sendMessage(msg.chat.id, 'Ок.', { reply_markup: settingsMenuKeyboard });
}
