import actions from './actions';
import commandActions from './commandActions';
import commands from './constants/commands';

function getCommandActionByMessage(msg) {
    if (!msg.text) {
        return false;
    }

    let actionName;

    // Либо команда со слэшом, тогда просто ключ в объекте
    if (msg.text && msg.text[0] === '/') {
        actionName = msg.text.substr(1);

        // Если такая команда не найдена, то возможно это команда с идентификатором на конце,
        // например: /vacancy_123123
        // Обрубаем его и пробуем еще разок.
        if (!commands[actionName]) {
            const subActions = actionName.split('_');
            subActions.pop();
            actionName = subActions.join('_');
        }
    } else {
        // Либо команда текстовая, тогда по одному из значений объекта
        actionName = Object.keys(commands)[Object.values(commands).indexOf(msg.text)];
    }

    return commandActions[commands[actionName]];
}

export async function executeStateAction(store, msg, bot) {
    const state = await store.get(msg.chat.id, 'state');
    const action = actions[state] || actions.MAIN_MENU;
    try {
        return await action(store, msg, bot);
    } catch (e) {
        console.error(e);
    }
}

export async function executeCommandAction(store, msg, bot) {
    const action = getCommandActionByMessage(msg);

    try {
        return await action(store, msg, bot);
    } catch (e) {
        console.error(e);
    }
}

export default function processMessage(store, msg, bot) {
    if (getCommandActionByMessage(msg)) {
        return executeCommandAction(store, msg, bot);
    }

    return executeStateAction(store, msg, bot);
}
