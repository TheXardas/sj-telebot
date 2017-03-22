import settingsMenuKeyboard from '../keyboards/settingsMenu';
import formatGender from '../views/formatGender';
import formatSalary from '../views/formatSalary';
import formatCommandLink from '../views/formatCommandLink';
import formatProfession from '../views/formatProfession';
import states from '../constants/states';

function getText(store, msg) {
    return `Ок! Гляди, вот, чо можно дотюнить:
${formatCommandLink('set_profession')} ${formatProfession(store.getFilter(msg.chat.id, 'profession'))}
${formatCommandLink('set_salary')} ${formatSalary(store.getFilter(msg.chat.id, 'salary'))}
${formatCommandLink('set_city')}
${formatCommandLink('set_specialization')}
${formatCommandLink('set_gender')} ${formatGender(store.getFilter(msg.chat.id, 'gender'))}
${formatCommandLink('set_order')} 
${formatCommandLink('reset_settings')}
${formatCommandLink('back')}
`;
}

export default function settings(store, msg, bot) {
    store.set(msg.chat.id, 'state', states.SETTINGS_ROOT);
    return bot.sendMessage(msg.chat.id, getText(store, msg), {
        reply_markup: settingsMenuKeyboard,
    });
}
