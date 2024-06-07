import db from "./db";

export const initDatabase = () => {
  db.transaction(tx => {
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

  }, error => {
      // Se ocorrer um erro durante a transação, registre no console
      console.error("Erro ao criar tabelas:", error);
  }, () => {
      // Caso contrário, registre no console que as tabelas foram criadas com sucesso
      console.log("Tabelas criadas com sucesso!");
  });
}


export const addDefaults = () => {
    db.transaction(tx => {
        // Inserir categorias padrão
        tx.executeSql(
            `INSERT OR IGNORE INTO categories (id, name) VALUES 
          (1, 'Urgente'),
          (2, 'Pouco urgente'),
          (3, 'Não urgente');`
        );
    });

    db.transaction(tx => {
        // Inserir categorias padrão
        tx.executeSql(
            `INSERT OR IGNORE INTO itens (id,name,quantity,description,category) VALUES 
          (1, 'Arroz', 2, 'Dois sacos', 1);`
        );
    });
}