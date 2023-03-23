'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const jugadoresArray = []
    jugadoresArray.push({
      nickname: "TFreyre23",
      puntos_totales: 260,
      conquistas: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nickname: "GLopez45",
      puntos_totales: 210,
      conquistas: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nickname: "DNazal99",
      puntos_totales: 310,
      conquistas: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nickname: "BigMac37",
      puntos_totales: 165,
      conquistas: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return queryInterface.bulkInsert('Jugadors', jugadoresArray);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};


