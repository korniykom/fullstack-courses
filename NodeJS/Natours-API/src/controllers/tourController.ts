import path from 'path';
import { readFileSync, writeFile } from 'fs';
import { Request, Response } from 'express';
const tours = JSON.parse(
  readFileSync(
    path.join(process.cwd(), 'dev-data', 'data', 'tours.json'),
    'utf-8'
  )
);

export function getAllTours(req: Request, res: Response) {
  res.status(200).json({ status: 'success', data: { tours: tours } });
}

export function getTourById(req: Request, res: Response) {
  console.log((req as any).requestTime);
  const tour = tours.find((element: any) => element.id === +req.params.id);
  res.status(200).json({
    status: 'success',
    data: { tour },
  });
}

export function postTour(req: Request, res: Response) {
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
}

export function patchTourById(req: Request, res: Response) {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here>',
    },
  });
}

export function deleteTourById(req: Request, res: Response) {
  res.status(204).json({
    status: 'success',
    data: null,
  });
}
