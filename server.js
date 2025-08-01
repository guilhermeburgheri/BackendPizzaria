const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./database');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const categorias = require('./categorias.json');

// Rotas
app.get('/', (req, res) => {
  res.send('API Suprema Pizza Cine funcionando!');
});

app.get('/api/cardapio', (req, res) => {
  res.json(categorias);
});

// Listar pedidos
app.get('/api/pedidos', (req, res) => {
  db.all('SELECT * FROM pedidos ORDER BY criado_em DESC', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Criar pedido
app.post('/api/pedidos', (req, res) => {
  const { cliente, itens, total } = req.body;
  const stmt = db.prepare(`INSERT INTO pedidos (cliente, itens, total) VALUES (?, ?, ?)`);
  stmt.run(cliente, JSON.stringify(itens), total, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Pedido salvo!', id: this.lastID });
  });
});

// Excluir pedido
app.delete('/api/pedidos/:id', (req, res) => {
  const id = req.params.id;
  db.run('DELETE FROM pedidos WHERE id = ?', [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ message: 'Pedido não encontrado' });
    res.json({ message: 'Pedido excluído com sucesso' });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
