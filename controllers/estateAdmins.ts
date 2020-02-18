const asyncHandler = require('../middleware/async');
import { Request, Response, NextFunction } from 'express'
import models from '../models/index'

/*exports.createEstateAdmins = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    name: "ibrahim",
    age: 40,
  })
});*/

exports.createEstateAdmins = asyncHandler(async (req:Request, res:Response, next:NextFunction) => {
  console.log(req.body);
  const estateAdmin = await models.EstateAdmins.create(req.body);
  console.log(estateAdmin);
  res.status(201).json({
    success: true,
    data: req.body
  });
});