import settingsMenuKeyboard from '../keyboards/settingsMenu';
import states from '../constants/states';

export default async function commitGender(gender, store, msg, bot) {
    let text = '';
    switch (gender) {
        case 'male':
            text = 'Ок, мужик';
            break;
        case 'female':
            text = 'Хорошо, леди';
            break;
        default:
            text = 'Так и запишем: "неважно"';
            gender = null;
            break;
    }

    await store.setFilter(msg.chat.id, 'gender', gender);
    await store.set(msg.chat.id, 'state', states.SETTINGS_ROOT);
    return bot.sendMessage(msg.chat.id, text, {
        reply_markup: settingsMenuKeyboard,
    });
}