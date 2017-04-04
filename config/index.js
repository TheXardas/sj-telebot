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
    vacancyLimit: 5,
    specializationButtonLimit: 7,
    db: {
        host: 'localhost',
        dialect: 'sqlite',
        storage: 'db.db',
        username: '',
        password: '',
    },
};

export default config;
