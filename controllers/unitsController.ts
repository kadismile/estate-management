import models from "../models";

const errorHandler = require('../utils/errors');
import {Request, Response} from 'express'
const { findById, findAll } =  require('../utils/helpers/query');

exports.createUnits = async (req: Request, res: Response) => {
  try {
    const unit = await models.Units.create(req.body);
    res.status(201).json({
      success: true,
      data: unit
    });
  } catch (e) {
    errorHandler(e, res)
  }
};

exports.updateUnits = async (req: Request, res: Response) => {
  try {
    const unit = await models.Units.findAll({where: {id: req.params.id}});
    if (unit.length === 0) {
      res.status(404).json({
        success: false,
        data: 'Units not found'
      });
    } else {
      const updatedUnit = await models.Units.update(req.body, {returning: true, where: {id: req.params.id}});
      res.status(200).json({
        success: true,
        data: updatedUnit[1][0]
      });
    }

  } catch (e) {
    errorHandler(e, res)
  }
};

exports.getUnit = async (req: Request, res: Response) => {
  try {
    const unit = await models.Units.findAll({where: {id: req.params.id}});
      res.status(200).json({
        success: false,
        data: unit[0]
      });
  } catch (e) {
    errorHandler(e, res)
  }
};

exports.getAllUnit = async (req: Request, res: Response) => {
  try {
    const units = await findAll(models.Units);
    if (units === null) {
      res.status(404).json({
        success: false,
        data: "No units was found"
      });
    } else {
      res.status(200).json({
        success: true,
        data: units
      });
    }
  } catch (e) {
    console.log(e);
    errorHandler(e, res);
  }
};