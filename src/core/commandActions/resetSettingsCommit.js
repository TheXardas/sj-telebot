import settingsMenuKeyboard from '../keyboards/settingsMenu';
import states from '../constants/states';

export default function resetSettingsCommit(store, msg, bot) {
    store.clearFilters(msg.chat.id);
    store.set(msg.chat.id, 'state', states.SETTINGS_ROOT);
    bot.sendMessage(msg.chat.id, 'Ооок. Все забыл.', { reply_markup: settingsMenuKeyboard });
}
