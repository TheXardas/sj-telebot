import states from './constants/states';
import commands, { keysByCommands } from './constants/commands';
import mainMenuMarkup from './markups/mainMenu';
import settingsMenuMarkup from './markups/settingsMenu';
import genderMarkup from './markups/gender';
import { executeStateAction } from './processMessage';
import getVacancies from '../api/get/vacancies';

const commandActions = {
    [commands.search]: (store, msg, bot) => {
        bot.sendMessage(msg.chat.id, 'Погодь.. Ща гляну че есть.');
        getVacancies({}).then(data => {
            const answer = data.list.map(vacancy => `
${vacancy.profession} с ЗП ${vacancy.paymentFrom} - ${vacancy.paymentTo}`);

            bot.sendMessage(msg.chat.id, 'Во, чет есть:' + answer);
        }).catch(err => {
            bot.sendMessage(msg.chat.id, 'Блин, чет у меня не получилось:' + err);
            console.error(err);
        });
    },
    [commands.about]: (store, msg, bot) => {
        return bot.sendMessage(msg.chat.id, `Ну, я кароч очешуенный мегабот, чо.`, {
            reply_markup: mainMenuMarkup,
        });
    },
    [commands.app]: (store, msg, bot) => {
        return bot.sendMessage(msg.chat.id,
`Вот ссылки. Качай отсюда, бротюнь:
[Apple](https://itunes.apple.com/ru/app/poisk-raboty-i-vakansij-superjob/id663226401)
[Android](https://play.google.com/store/apps/details?id=ru.superjob.client.android&hl=ru)
[Windows](http://www.windowsphone.com/ru-ru/store/app/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0-superjob/80478749-a31e-4ced-92da-c73a322b3b71)`, {
            reply_markup: mainMenuMarkup,
            parse_mode: 'Markdown',
            disable_web_page_preview: true,
        });
    },
    [commands.settings]: (store, msg, bot) => {
        return bot.sendMessage(msg.chat.id,
`Ок! Гляди, вот, чо можно дотюнить:
/${keysByCommands[commands.set_salary]} - ${commands.set_salary} ${store.get(msg.chat.id, 'salary')}
/${keysByCommands[commands.set_city]} - ${commands.set_city}
/${keysByCommands[commands.set_specialization]} - ${commands.set_specialization}
/${keysByCommands[commands.set_gender]} - ${commands.set_gender} ${store.get(msg.chat.id, 'gender')}
/${keysByCommands[commands.set_order]} - ${commands.set_order}
/${keysByCommands[commands.back]} - ${commands.back}
`, {
                reply_markup: settingsMenuMarkup,
            });
    },
    [commands.set_salary]: (store, msg, bot) => {
        store.set(msg.chat.id, 'state', states.SETTINGS_SALARY);
        return bot.sendMessage(msg.chat.id, 'Сколько денег хочешь? Введи число в рублях.');
    },
    [commands.set_gender]: (store, msg, bot) => {
        return bot.sendMessage(msg.chat.id, 'Ок, кто ты?', { reply_markup: genderMarkup });
    },
    [commands.set_gender_male]: (store, msg, bot) => {
        store.set(msg.chat.id, 'gender', 'male');
        return bot.sendMessage(msg.chat.id, 'Ок, мужик.', { reply_markup: settingsMenuMarkup });
    },
    [commands.set_gender_female]: (store, msg, bot) => {
        store.set(msg.chat.id, 'gender', 'female');
        return bot.sendMessage(msg.chat.id, 'Хорошо, леди.', { reply_markup: settingsMenuMarkup });
    },
    [commands.set_gender_unknown]: (store, msg, bot) => {
        store.set(msg.chat.id, 'gender', null);
        return bot.sendMessage(msg.chat.id, 'Хех, как скажешь.', { reply_markup: settingsMenuMarkup });
    },
    [commands.back]: (store, msg, bot) => {
        return executeStateAction(store, msg, bot);
    }
};

export default commandActions;
