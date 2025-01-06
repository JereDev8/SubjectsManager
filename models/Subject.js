import { DataTypes} from 'sequelize';
import Course from './Course.js';
import sequelize from '../db/config.js';

const Subject = sequelize.define('Subject', {
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
    curso_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Course,
        key: 'id'
      }
    },
    año: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sigla: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gestores: {
      type: DataTypes.JSON,
      allowNull: true
    },
    periodos: {
      type: DataTypes.STRING,
      allowNull: true
    },
    metodoPromedio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tipoRedondeo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    escala: {
      type: DataTypes.STRING,
      allowNull: true
    },
    orden: {
      type: DataTypes.STRING,
      allowNull: true
    },
    esConcepto: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    poseeMotivosPersonalizados: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    requiereInscripcion: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    requiereAsistencia: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    extraCurricular: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    permiteAgrupacion: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    competencias: {
      type: DataTypes.JSON,
      allowNull: true
    }
  }, {
    tableName: 'materias',
    timestamps: false
  });
  
  Course.hasMany(Subject, { foreignKey: 'curso_id' });
  Subject.belongsTo(Course, { foreignKey: 'curso_id' });
  
  export default Subject;