import states from './constants/states';
import db from '../core/db';

class DbStore {

    setSpecializations(specs) {
        return new Promise((resolve, reject) => {
            db.serialize(() => {
                specs.forEach((spec) => {
                    db.run('INSERT OR REPLACE INTO specializations (id, name) VALUES (?, ?)', spec.id, spec.label);
                });
                resolve();
            });
        });
    }

    getSpecializations() {
        return new Promise((resolve, reject) => {
            db.serialize(() => {
                db.all('SELECT id, name FROM specializations ORDER BY name', (err, result) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(result);
                })
            });
        });
    }

    setCities(cities) {
        return new Promise((resolve, reject) => {
            db.serialize(() => {
                cities.forEach((city) => {
                    db.run('INSERT OR REPLACE INTO cities (id, name) VALUES (?, ?)', city.id, city.name);
                });
                resolve();
            });
        });
    }

    getCities() {
        return new Promise((resolve, reject) => {
            db.serialize(() => {
                db.all('SELECT id, name FROM cities', (err, result) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(result);
                })
            });
        });
    }

    getCity(id) {
        return new Promise((resolve, reject) => {
            db.serialize(() => {
                db.get('SELECT id, name FROM cities WHERE id = ?', id, (err, result) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(result);
                });
            });
        });
    }

    set(userId, key, value) {
        return new Promise((resolve, reject) => {
            db.serialize(() => {
                db.run('INSERT OR REPLACE INTO user_settings (chat_id, name, value) values (?, ?, ?)', userId, key, value, (err) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve();
                });
            });
        })
    }

    get(userId, key) {
        return new Promise((resolve, reject) => {
            db.serialize(() => {
                db.get('SELECT value FROM user_settings WHERE chat_id = ? AND name = ?', userId, key, (err, result) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(result && result.value);
                });
            });
        });
    }

    setFilter(userId, key, value) {
        return new Promise((resolve, reject) => {
            db.serialize(() => {
                // Если мы изменяем какой-то фильтр, кроме номера страницы, то нужно страницу сбросить,
                // потому что результы изменились.
                if (key !== 'page') {
                    db.run('DELETE FROM user_filters WHERE chat_id = ? AND name = ?', userId, 'page');
                }

                if (value) {
                    db.run('INSERT OR REPLACE INTO user_filters (chat_id, name, value) VALUES (?, ?, ?)', userId, key, value, (err) => {
                        if (err) {
                            return reject(err);
                        }
                        return resolve();
                    });
                } else {
                    db.run('DELETE FROM user_filters WHERE chat_id = ? AND name = ?', userId, key, (err) => {
                        if (err) {
                            return reject(err);
                        }
                        return resolve();
                    });
                }
            });
        });
    }

    getFilter(userId, key) {
        return new Promise((resolve, reject) => {
            db.serialize(() => {
                db.get('SELECT value FROM user_filters WHERE chat_id = ? AND name = ?', userId, key, (err, result) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(result && result.value);
                });
            });
        });
    }

    getFilters(userId) {
        return new Promise((resolve, reject) => {
            db.serialize(() => {
                db.all('SELECT name, value FROM user_filters WHERE chat_id = ?', userId, (err, result) => {
                    if (err) {
                        return reject(err);
                    }

                    const filters = {};
                    result.forEach(row => {
                        if (row) {
                            filters[row.name] = row.value;
                        }
                    });
                    return resolve(filters);
                });
            })
        });
    }

    clearFilters(userId) {
        return new Promise((resolve, reject) => {
            db.serialize(() => {
                db.run('DELETE FROM user_filters WHERE chat_id = ?', userId, (err) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve();
                });
            });
        });
    }
}

export default new DbStore();
