import db from "./db";

export const initDatabase = () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      tx => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS categories (
            id INTEGER PRIMARY KEY NOT NULL,
            name TEXT NOT NULL UNIQUE
          );`
        );

        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS itens (
            id INTEGER PRIMARY KEY NOT NULL,
            name TEXT NOT NULL,
            quantity INTEGER NOT NULL,
            description TEXT NOT NULL,
            category INTEGER NOT NULL,
            FOREIGN KEY (category) REFERENCES categories(id)
          );`
        );

        // Inserir categorias padrão e itens padrão
        tx.executeSql(
          `INSERT OR IGNORE INTO categories (id, name) VALUES 
            (0, 'Urgente'),
            (1, 'Pouco urgente'),
            (2, 'Não urgente');`
        );
      },
      error => {
        console.error("Erro ao criar tabelas:", error);
        reject(error);
      },
      () => {
        console.log("Tabelas criadas com sucesso!");
        resolve();
      }
    );
  });
};