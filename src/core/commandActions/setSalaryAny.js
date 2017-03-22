import states from '../constants/states';
import settingsKeyboard from '../keyboards/settingsMenu';

export default function setSalaryAny(store, msg, bot) {
    store.setFilter(msg.chat.id, 'salary', null);
    store.set(msg.chat.id, 'state', states.SETTINGS_ROOT);
    bot.sendMessage(msg.chat.id, 'Ладненько, по договоренности.', { reply_markup: settingsKeyboard });
}
