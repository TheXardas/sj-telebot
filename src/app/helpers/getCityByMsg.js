import getLocationByGeo from '../../api/get/locationByGeo';
import getCities from '../../api/get/cities';

/**
 * Получить наш объект города, по его названию.
 */
function getCityObjectByCityName(store, cityName) {
    return store.getCities().then(cities => {
        let selectedCity;
        cities.some(city => {
            if (city.name.toLowerCase() === cityName.toLowerCase()) {
                selectedCity = city;
                return true;
            }
        });
        return selectedCity;
    });
}

/**
 * Получить название города по его координатам (обращается к google api).
 */
function getCityNameByGeo(latitude, longtitude) {
    return getLocationByGeo(latitude, longtitude).then((data) => {
        let cityName;
        data.some((item) => {
            item.address_components.forEach(addressComponent => {
                if (addressComponent.types.includes('locality') && addressComponent.types.includes('political')) {
                    cityName = addressComponent.short_name;
                    return true;
                }
            });
        });
        return cityName;
    });
}

/**
 * Получить наш объект города по его координатам
 */
function getCityByLocation(store, latitude, longitude) {
    return getCityNameByGeo(latitude, longitude).then(cityName => {
        return getCityObjectByCityName(store, cityName);
    });
}

/**
 * Получить наш объект города по сообщению пользователя (локация или название города текстом)
 */
export default function getCityByMsg(store, msg) {
    if (msg.location) {
        return getCityByLocation(store, msg.location.latitude, msg.location.longitude);
    }

    if (msg.text) {
        return getCityObjectByCityName(store, msg.text.trim());
    }
}
