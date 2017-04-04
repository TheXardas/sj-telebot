import db from './db';

export default function createSchema() {
    db.serialize(() => {
        db.run('CREATE TABLE IF NOT EXISTS user_settings (id INTEGER PRIMARY KEY AUTOINCREMENT, chat_id NUMERIC, name TEXT, value TEXT, UNIQUE(chat_id, name))',);
        db.run('CREATE TABLE IF NOT EXISTS user_filters (id INTEGER PRIMARY KEY AUTOINCREMENT, chat_id NUMERIC, name TEXT, value TEXT, UNIQUE(chat_id, name))');
        db.run('CREATE TABLE IF NOT EXISTS cities (id INTEGER PRIMARY KEY, name TEXT)');
        db.run('CREATE TABLE IF NOT EXISTS specializations(id INTEGER PRIMARY KEY, name TEXT)');
    });
}
