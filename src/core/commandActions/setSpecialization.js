import states from '../constants/states';
import showCurrentSpecializationToSelect from '../helpers/showCurrentSpecializationsToSelect';

export default async function setSpecialization(store, msg, bot) {
    await store.set(msg.chat.id, 'state', states.SETTINGS_SPECIALIZATION);
    await store.set(msg.chat.id, 'specializationPage', 0);
    return showCurrentSpecializationToSelect(store, msg, bot);
}