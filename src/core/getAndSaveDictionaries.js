import getSpecializations from '../api/get/specializations';

export default async function getAndSaveDictionaries(store) {
    const specializations = await getSpecializations();
    store.setDictionary('specializations', specializations);
    return true;
}
