'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('tarefas',
      [{
        description: 'Estudar os conteúdos de Docker.',
        check: true
      },
      {
        description: 'Resolver o projeto Docker Todo List',
        check: false
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('tarefas', null, {});
  },
};
