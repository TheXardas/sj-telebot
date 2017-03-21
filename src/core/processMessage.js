import actions from './actions';
import commandActions from './commandActions';
import commands from './constants/commands';

function getCommandActionByMessage(msg) {
    let actionName = commands.DEFAULT;

    // Либо команда со слэшом, тогда просто ключ в объекте
    if (msg.text[0] === '/') {
        actionName = msg.text.substr(1);
    } else {
        // Либо команда текстовая, тогда по одному из значений объекта
        actionName = Object.keys(commands)[Object.values(commands).indexOf(msg.text)];
    }

    return commandActions[commands[actionName]];
}

export function executeStateAction(store, msg, bot) {
    const state = store.get(msg.chat.id, 'state');
    const action = actions[state] || actions.MAIN_MENU;
    return action(store, msg, bot);
}

export function executeCommandAction(store, msg, bot) {
    const action = getCommandActionByMessage(msg);
    return action(store, msg, bot);
}

export default function processMessage(store, msg, bot) {
    if (getCommandActionByMessage(msg)) {
        return executeCommandAction(store, msg, bot);
    }

    return executeStateAction(store, msg, bot);
}
