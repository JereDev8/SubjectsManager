import express from 'express'
import dotenv from 'dotenv'
import routerSubject from './routes/subjects.route.js';
import routerCourse from './routes/courses.route.js';
import routerSubjectsOnly from './routes/subjectsOnly.route.js';
import connectDB from './db/connection.js';
import cors from 'cors'

dotenv.config();

const corsOptions = {
    origin:'http://localhost:5173', // Especifica el origen permitido
    methods: 'GET,POST,PUT,DELETE', // Métodos permitidos
    allowedHeaders: 'Content-Type,Authorization', // Encabezados permitidos
  };
  

connectDB()
const app = express(); 

// Middlewares
app.use(express.json());
app.use(cors(corsOptions));
 
// Rutas
app.use('/api', routerCourse)
app.use('/api/courses', routerSubject)
app.use('/api/subjects', routerSubjectsOnly)


// Puerto y arranque del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});