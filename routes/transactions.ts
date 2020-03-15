import express from 'express'
import * as type from '../constants/'
const { authorize } = require('../middleware/auth');
const router = express.Router();
const { createTransaction, getTransactionById,
  updateTransactionId, getAllTransactions } = require('../controllers/transactionController');

router.route('/create')
  .post( authorize(type.IS_ADMIN), createTransaction);

router.route('/:id')
  .put(updateTransactionId)
  .get(getTransactionById);

router.route('/')
  .get(getAllTransactions);


module.exports = router;