import config from '../../../config';
import showCurrentSpecializationsToSelect from '../helpers/showCurrentSpecializationsToSelect';
import states from '../constants/states';

export default function specializationNext(store, msg, bot) {
    let page = store.get(msg.chat.id, 'specializationPage') || 0;
    page += 1;
    const maximumPage = Math.floor(store.getDictionary('specializations').length / config.specializationButtonLimit);
    store.set(msg.chat.id, 'specializationPage', Math.min(page, maximumPage));
    // На всякий случай восстанавливаем стэйт
    store.set(msg.chat.id, 'state', states.SETTINGS_SPECIALIZATION);
    return showCurrentSpecializationsToSelect(store, msg, bot);
}
