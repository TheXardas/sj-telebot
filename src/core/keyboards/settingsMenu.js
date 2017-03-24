import commands from '../constants/commands';
import generateKeyboard from '../helpers/generateKeyboard';

export default generateKeyboard([
    commands.set_profession,
    commands.set_salary,
    commands.set_city,
    commands.set_specialization,
    commands.set_gender,
    commands.set_order,
    commands.reset_settings,
    commands.back,
]);
