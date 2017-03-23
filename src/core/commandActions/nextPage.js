import search from './search';

export default function nextPage(store, msg, bot) {
    const currentPage = store.getFilter(msg.chat.id, 'page') || 1;
    store.setFilter(msg.chat.id, 'page', currentPage + 1);
    return search(store, msg, bot);
}
