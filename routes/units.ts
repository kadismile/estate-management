import express, {Request, Response, NextFunction} from 'express'
const { authorize } = require('../middleware/auth');
import * as type from '../constants/'
const router = express.Router();
const {createUnits, updateUnits, getUnit, getAllUnit} = require('../controllers/unitsController');

router.route('/:id')
  .get(authorize(type.IS_ADMIN),getUnit)
  .put(authorize(type.IS_ADMIN), updateUnits);

router.route('/create')
  .post(authorize(type.IS_ADMIN), createUnits);

router.route('/')
  .get(authorize(type.IS_ADMIN), getAllUnit);
  


module.exports = router;