import express, { Request, Response, NextFunction } from 'express';
import { readFileSync, writeFile } from 'fs';
import path from 'path';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log('Hello from the middleware');
  (req as any).requestTime = new Date().toISOString();
  next();
});

const tours = JSON.parse(
  readFileSync(
    path.join(process.cwd(), 'dev-data', 'data', 'tours.json'),
    'utf-8'
  )
);

const getAllTours = (req: Request, res: Response) => {
  res.status(200).json({ status: 'success', data: { tours: tours } });
};

const getTourById = (req: Request, res: Response) => {
  console.log((req as any).requestTime);
  const tour = tours.find((element: any) => element.id === +req.params.id);
  res.status(200).json({
    status: 'success',
    data: { tour },
  });
};

const postTour = (req: Request, res: Response) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);
  writeFile(
    path.join(process.cwd(), 'dev-data', 'data', 'tours.json'),
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};

const patchTourById = (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here>',
    },
  });
};

const deleteTourById = (req: Request, res: Response) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};

app.route('/api/v1/tours').get(getAllTours).post(postTour);
app
  .route('/api/v1/tours/:id')
  .get(getTourById)
  .patch(patchTourById)
  .delete(deleteTourById);
const port: number = 8000;
app.listen(port, () => {
  console.log(`Running on port ${port}...`);
});
