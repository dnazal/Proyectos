module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Zonas', // name of Source model
      'JugadorId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Jugadors', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Zonas', // name of Source model
      'JugadorId' // key we want to remove
    );
  }
};