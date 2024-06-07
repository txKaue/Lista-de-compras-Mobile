import { SQLite } from 'expo-sqlite';

const db = await SQLite.openDatabaseAsync('Compras.db');

export default db;