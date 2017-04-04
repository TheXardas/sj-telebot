import searchWithFilters from '../helpers/searchWithFilters';

export default async function search(store, msg, bot) {
    const filters = await store.getFilters(msg.chat.id);
    return searchWithFilters(store, msg, bot, filters);
}
