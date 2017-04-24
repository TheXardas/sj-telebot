import states from '../constants/states';
import professionKeyboard from '../keyboards/profession';

export default async function setProfession(store, msg, bot) {
    await store.set(msg.chat.id, 'state', states.SETTINGS_PROFESSION);
    bot.sendMessage(msg.chat.id, 'Напишите название профессии', { reply_markup: professionKeyboard });
}
