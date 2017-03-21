import states from './constants/states';

class Store {
    static defaultStore = {
        state: states.MAIN_MENU,
    };

    _store = {};

    _create(userId) {
        if (!this._store[userId]) {
            this._store[userId] = Object.assign({}, Store.defaultStore);
        }
    }

    set(userId, key, value) {
        this._create(userId);
        this._store[userId][key] = value;
    }

    get(userId, key) {
        this._create(userId);
        return this._store[userId][key];
    }

}

export default new Store();
