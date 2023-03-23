'use strict';

const bcrypt = require('bcrypt');
const PASSWORD_SALT_ROUNDS = 10;

const {
  Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nombre: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    carrera: {
      type: DataTypes.STRING
    },

  });

  async function checkPassword(password) {
    return bcrypt.compare(password, this.password);
  }

  Usuario.associate = models => {
    Usuario.belongsTo(models.Partida, { foreignKey: 'PartidaId'});
    Usuario.hasOne(models.Jugador, { foreignKey: 'UsuarioId'});
  };

  Usuario.beforeSave(async (instance) => {
    if (instance.changed('password')) {
      const hash = await bcrypt.hash(instance.password, PASSWORD_SALT_ROUNDS);
      instance.set('password', hash);
    }
  });

  return Usuario;
};