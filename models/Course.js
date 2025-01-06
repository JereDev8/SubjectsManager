import { DataTypes } from 'sequelize';
import sequelize from '../db/config.js';

const Course = sequelize.define('Course', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  nivel: {
    type: DataTypes.STRING,
    allowNull: false
  },
  año: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'cursos',
  timestamps: false
});

export default Course;