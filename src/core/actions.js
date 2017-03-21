import states from './constants/states';
import mainMenuMarkup from './markups/mainMenu';
import settingsMenuMarkup from './markups/settingsMenu';

const actions = {
    [states.MAIN_MENU]: (store, msg, bot) => {
        // Либо любой другой
        bot.sendMessage(msg.chat.id, 'Давай-ка, бротюня, настроим поиск вакансий? Или сразу поищем что-нибудь?', {
            reply_markup: mainMenuMarkup,
        });
    },
    [states.SETTINGS_SALARY]: (store, msg, bot) => {
        // Убираем возможное форматирование между цифрами
        const text = msg.text.replace(/,\.\s/, '');

        // Ищем первое число
        let salary = text.match(/\d+/);

        if (!salary) {
            return bot.sendMessage(msg.chat.id, 'Чет не понял. Напиши числом, сколько хочешь денег получать?');
        }

        store.set(msg.chat.id, 'salary', salary);
        // Сбрасываем стэйт
        store.set(msg.chat.id, 'state', states.MAIN_MENU);
        bot.sendMessage(msg.chat.id, `${salary} рублей, лады, понял. Что-то еще?`, {
            reply_markup: settingsMenuMarkup,
            parse_mode: 'Html',
        })
    },
};

export default actions;
