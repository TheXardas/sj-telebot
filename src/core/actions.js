import states from './constants/states';
import settingsMenuKeyboard from './keyboards/settingsMenu';
import cityKeyboard from './keyboards/city';
import search from './commandActions/search';
import getCityByMsg from './helpers/getCityByMsg';
import showCurrentSpecializationsToSelect from './helpers/showCurrentSpecializationsToSelect';

const actions = {
    [states.MAIN_MENU]: (store, msg, bot) => {
        // Выполняем поиск, указывая, что текущее сообщение - это keywords
        store.setFilter(msg.chat.id, 'profession', msg.text);
        store.setFilter(msg.chat.id, 'page', 1);
        return search(store, msg, bot);
    },
    [states.SETTINGS_SPECIALIZATION]: (store, msg, bot) => {
        // Если есть текст, значит там - конкретная специализация, которую мы пытаемся выбрать.
        if (msg.text) {
            const specializations = store.getDictionary('specializations');

            let specialization;
            specializations.some((dictSpec) => {
                if (msg.text === dictSpec.label) {
                    specialization = dictSpec;
                    return true;
                }
            });

            if (!specialization) {
                bot.sendMessage(msg.chat.id, 'Не знаю такой. Попробуй еще раз.');
                // TODO текст ошибки писать сразу же.
                return showCurrentSpecializationsToSelect(store, msg, bot);
            }

            store.setFilter(msg.chat.id, 'specialization', specialization);
            store.set(msg.chat.id, 'specializationPage', null);
            store.set(msg.chat.id, 'state', states.SETTINGS_ROOT);
            return bot.sendMessage(msg.chat.id, 'Ок!', { reply_markup: settingsMenuKeyboard });
        }
        return showCurrentSpecializationsToSelect(store, msg, bot);
    },
    [states.SETTINGS_CITY]: (store, msg, bot) => {
        getCityByMsg(msg).then(city => {
            if (!city) {
                return bot.sendMessage(msg.chat.id, 'Не удалось найти город.', { reply_markup: cityKeyboard });
            }

            store.setFilter(msg.chat.id, 'city', city);
            store.set(msg.chat.id, 'state', states.SETTINGS_ROOT);
            bot.sendMessage(msg.chat.id, 'Нашел: ' + city.name, { reply_markup: settingsMenuKeyboard });
        }).catch(err => {
            console.log(err);
            bot.sendMessage(msg.chat.id, 'Что-то пошло не так:' + err, { reply_markup: cityKeyboard });
        });
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
