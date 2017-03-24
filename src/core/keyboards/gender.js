import commands from '../constants/commands';
import generateKeyboard from '../helpers/generateKeyboard';

export default generateKeyboard([
    commands.set_gender_male,
    commands.set_gender_female,
    commands.set_gender_unknown,
    commands.back,
]);
