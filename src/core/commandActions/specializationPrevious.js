import showCurrentSpecializationsToSelect from '../helpers/showCurrentSpecializationsToSelect';
import states from '../constants/states';

export default function specializationPrevious(store, msg, bot) {
    let page = store.get(msg.chat.id, 'specializationPage') || 0;
    page -= 1;
    store.set(msg.chat.id, 'specializationPage', Math.max(page, 0));
    store.set(msg.chat.id, 'state', states.SETTINGS_SPECIALIZATION);
    return showCurrentSpecializationsToSelect(store, msg, bot);
}
