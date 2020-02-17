const asyncHandler = require('../middleware/async');
import { Request, Response, NextFunction } from 'express'
//import EstateAdmins from '../models/EstateAdmins'
const EstateAdmin = require('../models/EstateAdmins').EstateAdmin;

/*exports.createEstateAdmins = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    name: "ibrahim",
    age: 40,
  })
});*/

exports.createEstateAdmins = asyncHandler(async (req:Request, res:Response, next:NextFunction) => {
  console.log(req.body);
  console.log("ESTATE_THINGS___", EstateAdmin);
  const estateAdmin = await EstateAdmin.create(req.body);
  res.status(201).json({
    success: true,
    data: req.body
  });
});