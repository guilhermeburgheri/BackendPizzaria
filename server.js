const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Simulação de pedidos recebidos
const pedidos = [];

// 🧾 Importa os dados do cardápio
const categorias = require('./categorias.json');

// 🌐 Rotas
app.get('/', (req, res) => {
  res.send('API Suprema Pizza Cine funcionando!');
});

// Rota do cardápio
app.get('/api/cardapio', (req, res) => {
  res.json(categorias.categorias);
});

// Rotas de pedidos
app.get('/api/pedidos', (req, res) => {
  res.json(pedidos);
});

app.post('/api/pedidos', (req, res) => {
  const novoPedido = req.body;
  pedidos.push(novoPedido);
  res.status(201).json({ message: 'Pedido recebido com sucesso!', pedido: novoPedido });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
