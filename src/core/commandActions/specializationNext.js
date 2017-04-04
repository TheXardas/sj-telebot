import config from '../../../config';
import showCurrentSpecializationsToSelect from '../helpers/showCurrentSpecializationsToSelect';
import states from '../constants/states';

export default async function specializationNext(store, msg, bot) {
    let page = await store.get(msg.chat.id, 'specializationPage') || 0;
    page = Number(page) + 1;
    const allSpecializations = await store.getSpecializations();
    const maximumPage = Math.floor(allSpecializations.length / config.specializationButtonLimit);
    await store.set(msg.chat.id, 'specializationPage', Math.min(page, maximumPage));
    // На всякий случай восстанавливаем стэйт
    await store.set(msg.chat.id, 'state', states.SETTINGS_SPECIALIZATION);
    return showCurrentSpecializationsToSelect(store, msg, bot);
}
