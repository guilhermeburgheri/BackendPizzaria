const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./pedidos.db');

// Cria a tabela se não existir
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS pedidos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      cliente TEXT,
      itens TEXT,
      total REAL,
      mesa TEXT,
      observacoes TEXT,
      criado_em DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

module.exports = db;
