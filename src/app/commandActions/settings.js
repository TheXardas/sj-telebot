import settingsMenuKeyboard from '../keyboards/settingsMenu';
import formatGender from '../views/formatGender';
import formatSalary from '../views/formatSalary';
import formatCommandLink from '../views/formatCommandLink';
import formatProfession from '../views/formatProfession';
import formatCity from '../views/formatCity';
import formatSpecialization from '../views/formatSpecialization';
import formatOrder from '../views/formatOrder';
import states from '../constants/states';

async function getText(store, msg) {
    const profession = await store.getFilter(msg.chat.id, 'profession');
    const salary = await store.getFilter(msg.chat.id, 'salary');
    const city = await store.getCity(await store.getFilter(msg.chat.id, 'city'));

    let specialization;
    const specId = await store.getFilter(msg.chat.id, 'specialization');
    if (specId) {
        const specializations = await store.getSpecializations();
        specialization = specializations.find((spec) => spec.id.toString() === specId.toString());
    }

    const gender = await store.getFilter(msg.chat.id, 'gender');
    const order = await store.getFilter(msg.chat.id, 'order');

    return `Ок! Гляди, вот, чо можно дотюнить:
${formatCommandLink('set_profession')} <b>${formatProfession(profession)}</b>
${formatCommandLink('set_salary')} <b>${formatSalary(salary)}</b>
${formatCommandLink('set_city')} <b>${formatCity(city)}</b>
${formatCommandLink('set_specialization')} <b>${formatSpecialization(specialization)}</b>
${formatCommandLink('set_gender')} <b>${formatGender(gender)}</b>
${formatCommandLink('set_order')} <b>${formatOrder(order)}</b>

${formatCommandLink('reset_settings')}
${formatCommandLink('back')}
`;
}

export default async function settings(store, msg, bot) {
    await store.set(msg.chat.id, 'state', states.SETTINGS_ROOT);
    return bot.sendMessage(msg.chat.id, await getText(store, msg), {
        reply_markup: settingsMenuKeyboard,
        parse_mode: 'Html',
    });
}
