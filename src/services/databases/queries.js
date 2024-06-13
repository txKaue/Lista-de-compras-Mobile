import db from './db';

export const addItem = (name , quantity, description, category) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO itens (name, quantity, description, category) VALUES (?, ?, ?, ?)',
      [name, quantity, description, category]
    );
  });
  console.log(name, category);
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

export const deleteItem = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM itens WHERE id = ?',
        [id],
        (_, result) => {
          resolve(result.rowsAffected);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};


export const updateItem = (id, name, quantity, description, category) => {
  db.transaction(tx => {
    tx.executeSql(
      'UPDATE itens SET name = ?, quantity = ?, description = ?, category = ? WHERE id = ?',
      [name, quantity, description, category, id],
      (txObj, resultSet) => {
        if (resultSet.rowsAffected > 0) {
          console.log(`Item com ID ${id} atualizado com sucesso!`);
        } else {
          console.log(`Nenhum item encontrado com o ID ${id}.`);
        }
      },
      (txObj, error) => {
        console.log(`Erro ao atualizar item com ID ${id}:`, error);
      }
    );
  });
};

