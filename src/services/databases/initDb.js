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

      // Inserir categorias padrão e itens padrão
      tx.executeSql(
        `INSERT OR IGNORE INTO categories (id, name) VALUES 
          (0, 'Urgente'),
          (1, 'Pouco urgente'),
          (2, 'Não urgente');`
      );

      tx.executeSql(
        `INSERT OR IGNORE INTO itens (id,name,quantity,description,category) VALUES 
          (0, 'Arroz', 2, 'Dois sacos', 0);`
      );
  }, error => {
      // Se ocorrer um erro durante a transação, registre no console
      console.error("Erro ao criar tabelas:", error);
  }, () => {
      // Caso contrário, registre no console que as tabelas foram criadas com sucesso
      console.log("Tabelas criadas com sucesso!");
  });
}
