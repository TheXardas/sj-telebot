import states from './constants/states';
import settingsMenuKeyboard from './keyboards/settingsMenu';
import searchWithFilters from './helpers/searchWithFilters';

const actions = {
    [states.MAIN_MENU]: (store, msg, bot) => {
        // Выполняем поиск, указывая, что текущее сообщение - это keywords
        return searchWithFilters(store, msg, bot, Object.assign({}, store.getFilters(msg.chat.id), {
            profession: msg.text,
        }));
    },
    [states.SETTINGS_PROFESSION]: (store, msg, bot) => {
        const profession = msg.text && msg.text.trim();

        if (!profession) {
            return bot.sendMessage(msg.chat.id, 'Не понял. Нужно просто текстом написать название должности.');
        }

        store.setFilter(msg.chat.id, 'profession', msg.text);
        store.set(msg.chat.id, 'state', states.SETTINGS_ROOT);

        bot.sendMessage(msg.chat.id, 'Лады.', { reply_markup: settingsMenuKeyboard });
    },
    [states.SETTINGS_SALARY]: (store, msg, bot) => {
        // Убираем возможное форматирование между цифрами
        const text = msg.text.replace(/,\.\s/, '');

        // Ищем первое число
        let salary = text.match(/\d+/);

        if (!salary) {
            return bot.sendMessage(msg.chat.id, 'Чет не понял. Напиши числом, сколько хочешь денег получать?');
        }

        store.setFilter(msg.chat.id, 'salary', salary);
        store.set(msg.chat.id, 'state', states.SETTINGS_ROOT);

        bot.sendMessage(msg.chat.id, `${salary} рублей, лады, понял. Что-то еще?`, {
            reply_markup: settingsMenuKeyboard,
        })
    },
};

export default actions;
