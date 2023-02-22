const { Tarefa } = require('../database/models');

const getAll = async () => Tarefa.findAll();

module.exports = {
	getAll,
}