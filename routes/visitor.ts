import express, { Request, Response, NextFunction } from 'express'
const router = express.Router();
const { createVisitor, updateVisitorById,getVisitorById,getAllVisitors } = require('../controllers/visitorsController');

router.route('/create')
  .post(createVisitor);

  router.route('/:id')
  .put(updateVisitorById)
  .get(getVisitorById);
  
  router.route('/')
  .get(getAllVisitors);

module.exports = router;