import settingsMenuKeyboard from '../keyboards/settingsMenu';
import formatGender from '../views/formatGender';
import formatSalary from '../views/formatSalary';
import formatCommandLink from '../views/formatCommandLink';
import formatProfession from '../views/formatProfession';
import formatCity from '../views/formatCity';
import formatSpecialization from '../views/formatSpecialization';
import formatOrder from '../views/formatOrder';
import states from '../constants/states';

function getText(store, msg) {
    return `Ок! Гляди, вот, чо можно дотюнить:
${formatCommandLink('set_profession')} <b>${formatProfession(store.getFilter(msg.chat.id, 'profession'))}</b>
${formatCommandLink('set_salary')} <b>${formatSalary(store.getFilter(msg.chat.id, 'salary'))}</b>
${formatCommandLink('set_city')} <b>${formatCity(store.getFilter(msg.chat.id, 'city'))}</b>
${formatCommandLink('set_specialization')} <b>${formatSpecialization(store.getFilter(msg.chat.id, 'specialization'))}</b>
${formatCommandLink('set_gender')} <b>${formatGender(store.getFilter(msg.chat.id, 'gender'))}</b>
${formatCommandLink('set_order')} <b>${formatOrder(store.getFilter(msg.chat.id, 'order'))}</b>

${formatCommandLink('reset_settings')}
${formatCommandLink('back')}
`;
}

export default function settings(store, msg, bot) {
    store.set(msg.chat.id, 'state', states.SETTINGS_ROOT);
    return bot.sendMessage(msg.chat.id, getText(store, msg), {
        reply_markup: settingsMenuKeyboard,
        parse_mode: 'Html',
    });
}
