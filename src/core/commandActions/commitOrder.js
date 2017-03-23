import settingsMenuKeyboard from '../keyboards/settingsMenu';
import states from '../constants/states';

export default function commitOrder(order, store, msg, bot) {
    let orderToSet = order;
    if (orderToSet !== 'salary' && orderToSet !== 'date') {
        orderToSet = 'date';
    }
    store.setFilter(msg.chat.id, 'order', orderToSet);
    store.set(msg.chat.id, 'state', states.SETTINGS_ROOT);
    bot.sendMessage(msg.chat.id, 'Готово.', { reply_markup: settingsMenuKeyboard })
}
