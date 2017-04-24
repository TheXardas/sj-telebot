import states from './constants/states';

class Store {
    static defaultStore = {
        state: states.MAIN_MENU,
    };

    _store = {};
    _dictionaryStore = {};

    _create(userId) {
        if (!this._store[userId]) {
            this._store[userId] = Object.assign({}, Store.defaultStore);
        }
    }

    setDictionary(key, value) {
        this._dictionaryStore[key] = value;
    }

    getDictionary(key) {
        return this._dictionaryStore[key];
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

        let finalFilters = Object.assign({}, filters, {
            [key]: value,
        });

        // Если мы изменяем какой-то фильтр, кроме номера страницы, то нужно страницу сбросить,
        // потому что результы изменились.
        if (finalFilters.page && key !== 'page') {
            delete filters.page
        }

        this.set(userId, 'filters', finalFilters);
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
