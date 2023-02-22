const express = require('express');
const tarefaController = require('../controllers/tarefa.controller');

const app = express();

app.get('/tarefa', tarefaController.getAll);

module.exports = app;