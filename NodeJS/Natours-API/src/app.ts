import express, { Request, Response } from 'express';
import { read, readFileSync } from 'fs';
import path from 'path';

const app = express();

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

const port: number = 8000;
app.listen(port, () => {
  console.log(`Running on port ${port}...`);
});
