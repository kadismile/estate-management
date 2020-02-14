import express, { Request, Response } from 'express'
import models, { sequelize } from './models';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('ci with travis');
});

const server = sequelize.sync().then(() => {
app.listen(3000, () => {
  console.log('App running on port 3000');
});
});

module.exports = server;