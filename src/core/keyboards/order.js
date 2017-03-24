import commands from '../constants/commands';
import generateKeyboard from '../helpers/generateKeyboard';

export default generateKeyboard([
    commands.set_order_date,
    commands.set_order_salary,
]);
