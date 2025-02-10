import express, { Request, Response } from 'express';
import { read, readFileSync, writeFile } from 'fs';
import path from 'path';

const app = express();
app.use(express.json());

const tours = JSON.parse(
  readFileSync(
    path.join(process.cwd(), 'dev-data', 'data', 'tours.json'),
    'utf-8'
  )
);

console.log(tours);

app.get('/api/v1/tours', (req: Request, res: Response) => {
  res.status(200).json({ status: 'success', data: { tours: tours } });
});

app.get('/api/v1/tours/:id', (req: Request, res: Response) => {
  const tour = tours.find((element: any) => element.id === +req.params.id);
  res.status(200).json({
    status: 'success',
    data: { tour },
  });
});

app.post('/api/v1/tours', (req: Request, res: Response) => {
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
});
const port: number = 8000;
app.listen(port, () => {
  console.log(`Running on port ${port}...`);
});
