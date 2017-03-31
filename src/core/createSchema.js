import db from './db';

export default function createSchema() {
    db.serialize(() => {
        db.run('CREATE TABLE IF NOT EXISTS user_settings (id INTEGER PRIMARY KEY AUTOINCREMENT, chat_id NUMERIC, name TEXT, value TEXT)');
        db.run('CREATE TABLE IF NOT EXISTS user_filters (chat_id NUMERIC PRIMARY_KEY, name TEXT, value TEXT, UNIQUE(chat_id, name))');
    });
}