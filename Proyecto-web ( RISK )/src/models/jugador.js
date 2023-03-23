'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Jugador = sequelize.define('Jugador', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nickname: {
      type: DataTypes.STRING
    },
    puntos_totales: {
      type: DataTypes.INTEGER
    },
    conquistas: {
      type: DataTypes.INTEGER
    },

  });

  Jugador.associate = models => {
    Jugador.belongsTo(models.Usuario, { foreignKey: 'UsuarioId'});
    Jugador.hasMany(models.Zona, { foreignKey: 'JugadorId'});
    Jugador.hasMany(models.Objetivo, { foreignKey: 'JugadorId'});
  };

  return Jugador;
};