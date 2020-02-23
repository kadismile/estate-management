import express, { Request, Response, NextFunction } from 'express'
const router = express.Router();
const { createEstateTenant, updateEstateTenantById, getEstateTenantById,getAllEstateTenants  } = require('../controllers/estateTenantController')

router.route('/create')
  .post(createEstateTenant);

  router.route('/:id')
  .put(updateEstateTenantById)
  .get(getEstateTenantById);
  
  router.route('/')
  .get(getAllEstateTenants);

module.exports = router;