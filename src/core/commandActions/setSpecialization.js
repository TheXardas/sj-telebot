import states from '../constants/states';
import showCurrentSpecializationToSelect from '../helpers/showCurrentSpecializationsToSelect';

export default function setSpecialization(store, msg, bot) {
    store.set(msg.chat.id, 'state', states.SETTINGS_SPECIALIZATION);
    store.set(msg.chat.id, 'specializationPage', 0);
    return showCurrentSpecializationToSelect(store, msg, bot);
}