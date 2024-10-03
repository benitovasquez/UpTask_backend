import cors from 'cors';

export const corsConfig = {
  origin: process.env.FRONTEND_URL, // URL de tu frontend en producción
  optionsSuccessStatus: 200
};