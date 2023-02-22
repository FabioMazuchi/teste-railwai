const express = require('express');
const cors = require('cors');
const tarefaController = require('../controllers/tarefa.controller');

const app = express();
app.use(cors({ origin: '*' }))

app.get('/tarefa', tarefaController.getAll);

module.exports = app;