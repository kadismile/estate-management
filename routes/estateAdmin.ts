import express, { Request, Response, NextFunction } from 'express'
const router = express.Router();
const { createEstateAdmins, updateEstateAdminsById,getEstateAdminsById,getAllEstateAdmins } = require('../controllers/estateAdminController');

router.route('/create')
  .post(createEstateAdmins);
  router.route('/:id')
  .put(updateEstateAdminsById);
  router.route('/:id')
  .get(getEstateAdminsById);
  router.route('/')
  .get(getAllEstateAdmins);

module.exports = router;