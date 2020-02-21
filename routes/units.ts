import express, { Request, Response, NextFunction } from 'express'
const router = express.Router();
const { createUnits } = require('../controllers/unitsController');

router.route('/create')
    .post(createUnits);

module.exports = router;