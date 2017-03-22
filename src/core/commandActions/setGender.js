import genderKeyboard from '../keyboards/gender';
import states from '../constants/states';

export default function setGender(store, msg, bot) {
    store.set(msg.chat.id, 'state', states.SETTINGS_GENDER);
    return bot.sendMessage(msg.chat.id, 'Ок, кто ты?', { reply_markup: genderKeyboard });
}
