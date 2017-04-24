import states from '../constants/states';
import salaryKeyboard from '../keyboards/salary';

export default async function setSalary(store, msg, bot) {
    await store.set(msg.chat.id, 'state', states.SETTINGS_SALARY);
    return bot.sendMessage(msg.chat.id, 'Сколько денег хочешь? Введи число в рублях.', { reply_markup: salaryKeyboard });
}
