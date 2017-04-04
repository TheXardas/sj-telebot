import sqlite3 from 'sqlite3';
import config from '../../config';

const db = new sqlite3.Database(config.db.storage, null, (err) => {
    throw new Error('Failed to open a database connection! ' + err);
});

export default db;
