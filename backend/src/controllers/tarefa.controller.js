const tarefaService = require('../services/tarefa.service');

const getAll = async (req, res) => {
    const tarefas = await tarefaService.getAll();
    return res.status(200).json(tarefas);
}

module.exports = {
    getAll,
}