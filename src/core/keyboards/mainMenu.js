import commands from '../constants/commands';
import generateKeyboard from '../helpers/generateKeyboard';

export default generateKeyboard([
    commands.search,
    commands.settings,
    commands.app,
    commands.start,
]);
