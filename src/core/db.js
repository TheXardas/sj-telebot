import sqlite3 from 'sqlite3';
import config from '../../config';

const db = new sqlite3.Database(config.db.storage);

export default db;
