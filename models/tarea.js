// models/tarea.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Tarea = sequelize.define('Tarea', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
  },
  completado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Tarea;
