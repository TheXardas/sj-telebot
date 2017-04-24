import states from '../constants/states';
import settingsKeyboard from '../keyboards/settingsMenu';

export default async function setSalaryAny(store, msg, bot) {
    await store.setFilter(msg.chat.id, 'salary', null);
    await store.set(msg.chat.id, 'state', states.SETTINGS_ROOT);
    bot.sendMessage(msg.chat.id, 'Ладненько, по договоренности.', { reply_markup: settingsKeyboard });
}
