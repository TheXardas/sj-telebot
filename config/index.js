import apiKey from './API_KEY';

const config = {
    apiKey,
    api: {
        server: 'http://superjob.ru',
    },
    geo: {
        server: 'http://maps.googleapis.com',
        endpoint: '/maps/api/geocode/json'
    },
    vacancyLimit: 10,
    specializationButtonLimit: 7,
};

export default config;
