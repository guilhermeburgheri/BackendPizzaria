# 🎬 Suprema Pizza Cine – Backend 🍕

O backend do **Suprema Pizza Cine** é o motor por trás dos bastidores: enquanto o cliente se encanta com os sabores e referências cinematográficas, é aqui que os pedidos ganham vida, são registrados e ficam prontos para entrar em cena.

## 🎯 Objetivo

Gerenciar os pedidos feitos pela aplicação React e oferecer os dados do cardápio de forma dinâmica e confiável. Tudo isso com um banco local leve, simples e eficiente — perfeito para pizzarias independentes ou eventos.

## 📦 Funcionalidades principais

- 📥 Registro de pedidos com horário, itens e total.
- 📤 Listagem de todos os pedidos em ordem cronológica.
- ✏ Atualização de pedidos (ex: remover itens).
- ❌ Exclusão de pedidos por ID.
- 🎫 Entrega do cardápio completo por API.

## ⚙ Tecnologias utilizadas

- **Node.js**
- **Express**
- **SQLite3**

## 📡 Rotas disponíveis
- GET	/api/cardapio	Retorna o cardápio completo
- GET	/api/pedidos	Lista todos os pedidos salvos
- POST /api/pedidos	Cria um novo pedido
- PUT	/api/pedidos/:id	Atualiza os itens e o total de um pedido
- DELETE /api/pedidos/:id	Exclui um pedido pelo ID

## 🎬 Ligação com o frontend
Este backend foi desenvolvido sob medida para funcionar com o repositório:

[FrontendPizzaria](https://github.com/guilhermeburgheri/FrontendPizzaria)

A comunicação entre as partes acontece via requisições HTTP, com o frontend consumindo a API e exibindo os dados de forma temática e intuitiva.

## 🚀 Futuras melhorias
- Alterar o painel administrativo, está na mesma tela apenas para testes.
- Registro de status de produção dos pedidos (em preparo, pronto, entregue).
