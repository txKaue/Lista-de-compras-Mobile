import db from './db';

export const addItem = (name , quantity, desc, category) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO itens (name, quantity, desc, category) VALUES (?, ?, ?, ?)',
      [name, quantity, desc, category]
    );
  });
};

export const getItems = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM itens',
      [],
      (_, { rows: { _array } }) => { callback(_array); }
    );
  });
};
