import dotenv from 'dotenv';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({
  path: `${__dirname}/config.env`,
});

import { app } from './app.js';

const port: string = process.env.PORT || '8000';
app.listen(port, () => {
  console.log(`Running on port ${port}...`);
});
