const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {
  username: { type: DataTypes.STRING(100), allowNull: false, unique: true },
  password: { type: DataTypes.STRING(200), allowNull: false },
  nome:     { type: DataTypes.STRING(100), allowNull: false },
  email:    { type: DataTypes.STRING(100), allowNull: false, validate: { isEmail: true } }
});
module.exports = Usuario;
