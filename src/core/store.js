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

    setFilter(userId, key, value) {
        const filters = this.getFilters(userId);
        this.set(userId, 'filters', Object.assign({}, filters, {
            [key]: value,
        }));
    }

    getFilter(userId, key) {
        const filters = this.getFilters(userId);
        return filters[key];
    }

    getFilters(userId) {
        return this.get(userId, 'filters') || {};
    }

    clearFilters(userId) {
        this.set(userId, 'filters', null);
    }
}

export default new Store();
