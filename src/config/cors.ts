import dotenv from 'dotenv';

dotenv.config();

export const corsConfig = {
  origin: process.env.FRONTEND_URL || "*", 
  credentials: true,
  optionsSuccessStatus: 200,
};