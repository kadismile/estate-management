import models from "../models";
const asyncHandler = require('../middleware/async');
import { Request, Response, NextFunction } from 'express'
const EstateAdmin = require('../models/EstateAdmins').EstateAdmin;

exports.createEstateAdmins = asyncHandler(async (req:Request, res:Response, next:NextFunction) => {
  const estateAdmin = await models.EstateAdmins.create(req.body);
  res.status(201).json({
    success: true,
    data: estateAdmin
  });
});