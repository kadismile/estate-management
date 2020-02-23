import express from 'express'
const router = express.Router();
const { createSubTransactions, getSubTransactionById,
  updateSubTransactionById, getAllSubTransactions } = require('../controllers/subTransactionController');

router.route('/create')
  .post(createSubTransactions);

router.route('/:id')
  .put(updateSubTransactionById)
  .get(getSubTransactionById);

router.route('/')
  .get(getAllSubTransactions);


module.exports = router;