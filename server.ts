require('dotenv').config();
import express, { Request, Response } from 'express'
import { sequelize } from './models';
import { dropDb } from './seed/dropDB';
const env = process.env.NODE_ENV || "development";

const app = express();
//Body parser
app.use(express.json());

//ROUTE FILES
let { estateAdmins } = require('./routes');

app.use('/api/v1/estate-admin', estateAdmins);

app.get('/', (req: Request, res: Response) => {
  res.send('ci with travis');
});

const eraseDatabaseOnSync = true; 


const server = app.listen(5000, () => {
  console.log('App running on port 5000');
  env === 'development' ? dropDb() : console.log('not dev server')
});

module.exports = server;