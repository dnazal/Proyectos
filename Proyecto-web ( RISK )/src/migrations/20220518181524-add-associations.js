module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Usuarios', // name of Source model
      'PartidaId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Partidas', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Usuarios', // name of Source model
      'PartidaId' // key we want to remove
    );
  }
};