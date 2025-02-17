import express, { Request, Response, NextFunction } from 'express';
import tourRouter from './routes/tourRoutes';
import userRoute from './routes/userRoutes';
import morgan from 'morgan';

export const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log('Hello from the middleware');
  (req as any).requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRoute);
