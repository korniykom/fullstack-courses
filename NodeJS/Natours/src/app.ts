import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  console.log(req);
  res.status(200).json({ message: 'Hello from the server side.' });
});

app.post('/', (req: Request, res: Response) => {
  res.status(200).send('You can post to this endpoint');
});

const port: number = 8000;
app.listen(port, () => {
  console.log(`Running on port ${port}...`);
});
