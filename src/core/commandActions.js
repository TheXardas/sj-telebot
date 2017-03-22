import commands, { keysByCommands } from './constants/commands';
import start from './commandActions/start';
import search from './commandActions/search';
import vacancy from './commandActions/vacancy';
import app from './commandActions/app';
import settings from './commandActions/settings';
import setSalary from './commandActions/setSalary';
import setGender from './commandActions/setGender';
import commitGender from './commandActions/commitGender';
import back from './commandActions/back';
import setSalaryAny from './commandActions/setSalaryAny';
import resetSettings from './commandActions/resetSettings';
import resetSettingsCommit from './commandActions/resetSettingsCommit';
import setProfession from './commandActions/setProfession';
import resetProfession from './commandActions/resetProfession';

const commandActions = {
    [commands.back]: back,
    [commands.start]: start,
    [commands.search]: search,
    [commands.vacancy]: vacancy,
    [commands.app]: app,
    [commands.settings]: settings,
    [commands.set_salary]: setSalary,
    [commands.set_gender]: setGender,
    [commands.set_gender_male]: (store, msg, bot) => commitGender('male', store, msg, bot),
    [commands.set_gender_female]: (store, msg, bot) => commitGender('female', store, msg, bot),
    [commands.set_gender_unknown]: (store, msg, bot) => commitGender(null, store, msg, bot),
    [commands.set_salary_any]: setSalaryAny,
    [commands.set_profession]: setProfession,
    [commands.reset_profession]: resetProfession,
    [commands.reset_settings]: resetSettings,
    [commands.reset_settings_commit]: resetSettingsCommit,
};

export default commandActions;
