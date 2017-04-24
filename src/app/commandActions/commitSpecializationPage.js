import showCurrentSpecializationsToSelect from '../helpers/showCurrentSpecializationsToSelect';

export default async function commitSpecializationPage(page, store, msg, bot) {
    await store.set(msg.chat.id, 'specializationPage', page || null);
    return showCurrentSpecializationsToSelect(store, msg, bot);
}
