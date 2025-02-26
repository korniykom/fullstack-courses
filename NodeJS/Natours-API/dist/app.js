import express from 'express';
import tourRouter from './routes/tourRoutes.js';
import userRoute from './routes/userRoutes.js';
import morgan from 'morgan';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const app = express();
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use((req, res, next) => {
    console.log('Hello from the middleware');
    req.requestTime = new Date().toISOString();
    next();
});
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRoute);
