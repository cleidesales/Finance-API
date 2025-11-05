const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Categoria = sequelize.define('Categoria', {
  id:         { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  descricao:  { type: DataTypes.STRING(45), allowNull: false },
  status:     { type: DataTypes.INTEGER, allowNull: false }
}, { tableName: 'categorias' });

module.exports = Categoria;
