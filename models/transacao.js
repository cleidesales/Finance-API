const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuario');
const Categoria = require('./categoria');

const Transacao = sequelize.define('Transacao', {
  id:           { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  descricao:    { type: DataTypes.STRING(100), allowNull: false },
  data:         { type: DataTypes.DATE, allowNull: false },
  valor:        { type: DataTypes.DECIMAL(10,2), allowNull: false },
  tipo:         { type: DataTypes.INTEGER, allowNull: false },
  usuariosid:   { type: DataTypes.INTEGER, allowNull: false, references: { model: 'usuarios', key: 'id' } },
  categoriasid: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'categorias', key: 'id' } }
}, { tableName: 'transacoes' });

Transacao.belongsTo(Usuario, { foreignKey: 'usuariosid' });
Transacao.belongsTo(Categoria, { foreignKey: 'categoriasid' });

module.exports = Transacao;
