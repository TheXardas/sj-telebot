import search from './search';

export default async function nextPage(store, msg, bot) {
    const currentPage = await store.getFilter(msg.chat.id, 'page') || 1;
    await store.setFilter(msg.chat.id, 'page', Number(currentPage) + 1);
    return search(store, msg, bot);
}
