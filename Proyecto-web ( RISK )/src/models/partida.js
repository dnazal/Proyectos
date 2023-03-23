'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Partida = sequelize.define('Partida', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nombre: {
      type: DataTypes.STRING
    },
  });

  Partida.associate = models => {
    Partida.hasMany(models.Usuario, { foreignKey: 'PartidaId'});
  };

  return Partida;
};