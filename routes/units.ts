import express, {Request, Response, NextFunction} from 'express'

const router = express.Router();
const {createUnits, updateUnits, getUnit} = require('../controllers/unitsController');

router.route('/:id')
  .get(getUnit);
router.route('/create')
  .post(createUnits);
router.route('/:id')
  .put(updateUnits);


module.exports = router;