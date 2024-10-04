import dotenv from 'dotenv';

dotenv.config();

const allowedOrigins = [
    process.env.FRONTEND_URL,            // Producción
    'http://localhost:5173'              // Desarrollo
];

export const corsConfig = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('No permitido por CORS'));
        }
    },
    credentials: true,
    optionsSuccessStatus: 200,
};
