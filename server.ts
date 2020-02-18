require('dotenv').config();
import express, { Request, Response } from 'express'
import { sequelize } from './models';

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

const server = sequelize.sync( {force: eraseDatabaseOnSync }).then(() => {
  // if (eraseDatabaseOnSync) {
  //   // createUsersWithMessages();
  // }
  app.listen(5000, () => {
    console.log('App running on port 5000');
  });
});

module.exports = server;