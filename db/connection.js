import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    const connection = await mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
    });
    console.log('Conexión a MySQL exitosa');
    return connection;
  } catch (error) {
    console.error('Error al conectar a MySQL:', error);
    process.exit(1); // Finaliza el proceso en caso de error
  }
};

export default connectDB;