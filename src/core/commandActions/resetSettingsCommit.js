import settingsMenuKeyboard from '../keyboards/settingsMenu';
import states from '../constants/states';

export default async function resetSettingsCommit(store, msg, bot) {
    await store.clearFilters(msg.chat.id);
    await store.set(msg.chat.id, 'state', states.SETTINGS_ROOT);
    bot.sendMessage(msg.chat.id, 'Ооок. Все забыл.', { reply_markup: settingsMenuKeyboard });
}
