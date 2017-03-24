import showCurrentSpecializationsToSelect from '../helpers/showCurrentSpecializationsToSelect';

export default function commitSpecializationPage(page, store, msg, bot) {
    store.set(msg.chat.id, 'specializationPage', page || null);
    return showCurrentSpecializationsToSelect(store, msg, bot);
}
