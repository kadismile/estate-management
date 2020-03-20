import express, { Request, Response, NextFunction } from 'express'
const router = express.Router();
const { createEstateTenant, updateEstateTenantById, getEstateTenantById,getAllEstateTenants, getTenantsByAdmin  } = require('../controllers/estateTenantController')
import * as type from '../constants/'
const { authorize } = require('../middleware/auth');

router.route('/create')
  .post(authorize(type.IS_ADMIN), createEstateTenant);

  router.route('/:id')
  .put(updateEstateTenantById)
  .get(getEstateTenantById);
  
  router.route('/')
  .get(getAllEstateTenants);

router.route('/tenants/admin')
  .get(getTenantsByAdmin);

module.exports = router;