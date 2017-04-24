import states from '../constants/states';
import cityKeyboard from '../keyboards/city';

export default async function setCity(store, msg, bot) {
    await store.set(msg.chat.id, 'state', states.SETTINGS_CITY);
    bot.sendMessage(msg.chat.id, 'Пришли geo-метку или напиши название населенного пункта. Попробую найти.', {
        reply_markup: cityKeyboard,
    });
}
