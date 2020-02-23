import express from 'express'
const router = express.Router();
const { createSubTenant, getSubTenantByEstateTenantId,
  updateSubTenantById, getAllSubTenants } = require('../controllers/subTenantController');

router.route('/create')
  .post(createSubTenant);

router.route('/:id')
  .put(updateSubTenantById)
  .get(getSubTenantByEstateTenantId);

router.route('/')
  .get(getAllSubTenants);


module.exports = router;