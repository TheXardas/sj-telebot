import showCurrentSpecializationsToSelect from '../helpers/showCurrentSpecializationsToSelect';
import states from '../constants/states';

export default async function specializationPrevious(store, msg, bot) {
    let page = await store.get(msg.chat.id, 'specializationPage') || 0;
    page = Number(page) - 1;
    await store.set(msg.chat.id, 'specializationPage', Math.max(page, 0));
    await store.set(msg.chat.id, 'state', states.SETTINGS_SPECIALIZATION);
    return showCurrentSpecializationsToSelect(store, msg, bot);
}
