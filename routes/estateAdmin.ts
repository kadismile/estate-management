import express, { Request, Response, NextFunction } from 'express'
const router = express.Router();
const { createEstateAdmins } = require('../controllers/estateAdmins');

router.route('/create-estate-admin')
  .post(createEstateAdmins);


module.exports = router;