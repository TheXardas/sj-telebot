import searchWithFilters from '../helpers/searchWithFilters';

export default function search(store, msg, bot) {
    return searchWithFilters(store, msg, bot, store.getFilters(msg.chat.id));
}
