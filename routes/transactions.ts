import express from 'express'
const router = express.Router();
const { createTransaction, getTransactionById,
  updateTransactionId, getAllTransactions } = require('../controllers/transactionController');

router.route('/create')
  .post(createTransaction);

router.route('/:id')
  .put(updateTransactionId)
  .get(getTransactionById);

router.route('/')
  .get(getAllTransactions);


module.exports = router;