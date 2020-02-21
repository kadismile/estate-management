import express, {Request, Response, NextFunction} from 'express'

const router = express.Router();
const {createUnits, updateUnits, getUnit, getAllUnit} = require('../controllers/unitsController');

router.route('/:id')
  .get(getUnit)
  .put(updateUnits);

router.route('/create')
  .post(createUnits);

router.route('/')
  .get(getAllUnit);
  


module.exports = router;