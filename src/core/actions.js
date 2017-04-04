import states from './constants/states';
import settingsMenuKeyboard from './keyboards/settingsMenu';
import cityKeyboard from './keyboards/city';
import search from './commandActions/search';
import getCityByMsg from './helpers/getCityByMsg';
import showCurrentSpecializationsToSelect from './helpers/showCurrentSpecializationsToSelect';

const actions = {
    [states.MAIN_MENU]: async (store, msg, bot) => {
        // Выполняем поиск, указывая, что текущее сообщение - это keywords
        await store.setFilter(msg.chat.id, 'profession', msg.text);
        await store.setFilter(msg.chat.id, 'page', 1);
        return search(store, msg, bot);
    },
    [states.SETTINGS_SPECIALIZATION]: async (store, msg, bot) => {
        // Если есть текст, значит там - конкретная специализация, которую мы пытаемся выбрать.
        if (msg.text) {
            const specializations = await store.getSpecializations();

            let specialization;
            specializations.some((dictSpec) => {
                if (msg.text === dictSpec.name) {
                    specialization = dictSpec;
                    return true;
                }
            });

            if (!specialization) {
                bot.sendMessage(msg.chat.id, 'Не знаю такой. Попробуй еще раз.');
                // TODO текст ошибки писать сразу же.
                return showCurrentSpecializationsToSelect(store, msg, bot);
            }

            await store.setFilter(msg.chat.id, 'specialization', specialization.id);
            await store.set(msg.chat.id, 'specializationPage', null);
            await store.set(msg.chat.id, 'state', states.SETTINGS_ROOT);
            return bot.sendMessage(msg.chat.id, 'Ок!', { reply_markup: settingsMenuKeyboard });
        }
        return showCurrentSpecializationsToSelect(store, msg, bot);
    },
    [states.SETTINGS_CITY]: async (store, msg, bot) => {
        try {
            const city = await getCityByMsg(store, msg);
            if (!city) {
                return bot.sendMessage(msg.chat.id, 'Не удалось найти город.', { reply_markup: cityKeyboard });
            }

            await store.setFilter(msg.chat.id, 'city', city.id);
            await store.set(msg.chat.id, 'state', states.SETTINGS_ROOT);
            bot.sendMessage(msg.chat.id, 'Нашел: ' + city.name, { reply_markup: settingsMenuKeyboard });
        } catch(err) {
            console.log(err);
            bot.sendMessage(msg.chat.id, 'Что-то пошло не так:' + err, { reply_markup: cityKeyboard });
        }
    },
    [states.SETTINGS_PROFESSION]: async (store, msg, bot) => {
        const profession = msg.text && msg.text.trim();

        if (!profession) {
            return bot.sendMessage(msg.chat.id, 'Не понял. Нужно просто текстом написать название должности.');
        }

        await store.setFilter(msg.chat.id, 'profession', msg.text);
        await store.set(msg.chat.id, 'state', states.SETTINGS_ROOT);

        bot.sendMessage(msg.chat.id, 'Лады.', { reply_markup: settingsMenuKeyboard });
    },
    [states.SETTINGS_SALARY]: async (store, msg, bot) => {
        // Убираем возможное форматирование между цифрами
        const text = msg.text.replace(/,\.\s/, '');

        // Ищем первое число
        let salary = text.match(/\d+/);

        if (!salary || !salary[0]) {
            return bot.sendMessage(msg.chat.id, 'Чет не понял. Напиши числом, сколько хочешь денег получать?');
        }

        await store.setFilter(msg.chat.id, 'salary', salary[0]);
        await store.set(msg.chat.id, 'state', states.SETTINGS_ROOT);

        bot.sendMessage(msg.chat.id, `${salary} рублей, лады, понял. Что-то еще?`, {
            reply_markup: settingsMenuKeyboard,
        });
    },
};

export default actions;
