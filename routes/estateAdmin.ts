import express, { Request, Response, NextFunction } from 'express'
const router = express.Router();
const { createEstateAdmins } = require('../controllers/estateAdminController');

router.route('/:create')
  .post(createEstateAdmins);


module.exports = router;