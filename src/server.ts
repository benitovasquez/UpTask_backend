import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import { connectDB } from './config/db';
import authRoute from './routes/authRoutes';
import projectRoutes from './routes/projectRoutes';
import { corsConfig } from './config/cors';
import morgan from 'morgan';

dotenv.config();
connectDB();

const app = express();
app.use(cors(corsConfig))

//Logging
app.use(morgan('dev'))

//Leer datos de formularios
app.use(express.json());

// Routes
app.use('/api/auth', authRoute);
app.use('/api/projects', projectRoutes);

export default app;