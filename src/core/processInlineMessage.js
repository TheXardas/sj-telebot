import inlineActions from './inlineActions';

export default function processInlineMessage(store, msg, bot) {
    // вырезаем цифру - это айдишник.
    let id = msg.data.match(/\d+/);
    if (!id) {
        console.error('что-то пошло не так!', msg.data);
    }
    id = id[0];

    const actionName = msg.data.replace(id, '');
    const action = inlineActions[actionName];

    if (!action) {
        console.error('whoops!', msg.data, actionName);
    }

    return action(store, msg, bot, id);
}