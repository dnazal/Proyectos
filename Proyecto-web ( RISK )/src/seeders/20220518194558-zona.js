'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const zonasArray = []
    zonasArray.push({
      xp_ataque: 30,
      xp_defensa: 60,
      ubicacion: 'Ingenieria',
      JugadorId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      xp_ataque: 40,
      xp_defensa: 20,
      ubicacion: 'Ingenieria',
      JugadorId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      xp_ataque: 10,
      xp_defensa: 30,
      ubicacion: 'Ingenieria',
      JugadorId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      xp_ataque: 20,
      xp_defensa: 30,
      ubicacion: 'Ingenieria',
      JugadorId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      xp_ataque: 50,
      xp_defensa: 50,
      ubicacion: 'Comercial',
      JugadorId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      xp_ataque: 30,
      xp_defensa: 40,
      ubicacion: 'Comercial',
      JugadorId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      xp_ataque: 60,
      xp_defensa: 10,
      ubicacion: 'Comercial',
      JugadorId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      xp_ataque: 40,
      xp_defensa: 20,
      ubicacion: 'Comercial',
      JugadorId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      xp_ataque: 50,
      xp_defensa: 40,
      ubicacion: 'Ciencias Sociales',
      JugadorId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      xp_ataque: 30,
      xp_defensa: 30,
      ubicacion: 'Ciencias Sociales',
      JugadorId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      xp_ataque: 10,
      xp_defensa: 20,
      ubicacion: 'Ciencias Sociales',
      JugadorId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      xp_ataque: 50,
      xp_defensa: 40,
      ubicacion: 'Ciencias Sociales',
      JugadorId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      xp_ataque: 40,
      xp_defensa: 40,
      ubicacion: 'College',
      JugadorId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      xp_ataque: 60,
      xp_defensa: 50,
      ubicacion: 'College',
      JugadorId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      xp_ataque: 20,
      xp_defensa: 10,
      ubicacion: 'College',
      JugadorId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      xp_ataque: 10,
      xp_defensa: 40,
      ubicacion: 'College',
      JugadorId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      xp_ataque: 20,
      xp_defensa: 20,
      ubicacion: 'Letras',
      JugadorId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      xp_ataque: 50,
      xp_defensa: 30,
      ubicacion: 'Letras',
      JugadorId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      xp_ataque: 10,
      xp_defensa: 30,
      ubicacion: 'Letras',
      JugadorId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      xp_ataque: 60,
      xp_defensa: 20,
      ubicacion: 'Letras',
      JugadorId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return queryInterface.bulkInsert('Zonas', zonasArray);
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

