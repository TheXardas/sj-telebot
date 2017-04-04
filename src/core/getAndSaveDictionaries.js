import getSpecializations from '../api/get/specializations';
import getCities from '../api/get/cities';

export default async function getAndSaveDictionaries(store) {
    const specializations = await getSpecializations();
    store.setSpecializations(specializations);

    const cities = await getCities();
    store.setCities(cities);
    return true;
}
