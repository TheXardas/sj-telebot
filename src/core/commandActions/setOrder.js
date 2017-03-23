import orderKeyboard from '../keyboards/order';

export default function setOrder(store, msg, bot) {
    bot.sendMessage(msg.chat.id, 'Как сортируем?', { reply_markup: orderKeyboard });
}
