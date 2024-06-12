import db from './db';

export const addItem = (name , quantity, description, category) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO itens (name, quantity, description, category) VALUES (?, ?, ?, ?)',
      [name, quantity, description, category]
    );
  });
};

export const getItems = () => {
  return new Promise((resolve, reject) => {
      db.transaction(tx => {
          tx.executeSql(
              'SELECT * FROM itens',
              [],
              (_, { rows }) => resolve(rows._array), // Resolvendo a Promise com os resultados
              (_, error) => reject(error) // Rejeitando a Promise em caso de erro
          );
      });
  });
};

