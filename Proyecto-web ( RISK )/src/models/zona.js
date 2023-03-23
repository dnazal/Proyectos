'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Zona = sequelize.define('Zona', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    xp_ataque: {
      type: DataTypes.INTEGER
    },
    xp_defensa: {
      type: DataTypes.INTEGER
    },
    ubicacion: {
      type: DataTypes.STRING
    },
  });

  Zona.associate = models => {
    Zona.belongsTo(models.Jugador, { foreignKey: 'JugadorId'});
  };

  return Zona;
};