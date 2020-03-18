require('dotenv').config();
import express, { Request, Response } from 'express'
var cors = require('cors');
import { dropDb } from './seed/dropDB';
const env = process.env.NODE_ENV || "development";

const app = express();
app.use(cors());
//Body parser
app.use(express.json());

//ROUTE FILES
let { estateAdmins, units, estateTenants, visitors, subTenants, transactions, subTransactions, auth } = require('./routes');

app.use('/api/v1/estate-admin', estateAdmins);
app.use('/api/v1/units', units);
app.use('/api/v1/estate-tenants', estateTenants);
app.use('/api/v1/visitors', visitors);
app.use('/api/v1/sub-tenants', subTenants);
app.use('/api/v1/transactions', transactions);
app.use('/api/v1/sub-transactions', subTransactions);
app.use('/api/v1/auth', auth);
app.use('/api/v1/authenticate/', auth);

app.get('/', (req: Request, res: Response) => {
  res.send('ci with travis');
});



const server = app.listen(process.env.PORT || 5000, () => {
  console.log(`App running on port ${process.env.PORT || 5000}`);
  env !== 'production' ? dropDb() : console.log('prod env')
});

module.exports = server;