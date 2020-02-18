import models from "../models";
const errorHandler = require('../utils/errors');
import { Request, Response } from 'express'

exports.createEstateAdmins = async (req:Request, res:Response) => {
  try {
    const estateAdmin = await models.EstateAdmins.create(req.body);
      res.status(201).json({
          success: true,
          data: estateAdmin
      });
  } catch (e) {
    errorHandler(e,res)
  }
};