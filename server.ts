require('dotenv').config();
import express, { Request, Response } from 'express'
const errorHandler = require('./middleware/errors');
import models, { sequelize } from './models';

const app = express();
//Body parser
app.use(express.json());

//ROUTE FILES
let { estateAdmins } = require('./routes');

app.use('/api/v1/estate-admin', estateAdmins);
app.use(errorHandler);

app.get('/', (req: Request, res: Response) => {
  res.send('ci with travis');
});

const server = sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log('App running on port 5000');
  });
});

module.exports = server;