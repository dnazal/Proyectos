'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Objetivo = sequelize.define('Objetivo', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nombre: {
      type: DataTypes.STRING
    },
    puntaje: {
      type: DataTypes.INTEGER
    },
  });

  Objetivo.associate = models => {
    Objetivo.belongsTo(models.Jugador, { foreignKey: 'JugadorId'});
  };

  return Objetivo;
};