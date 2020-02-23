import models from "../models";
const errorHandler = require("../utils/errors");
import { Request, Response } from "express";
const { findById, findAll, updateById } =  require('../utils/helpers/query');

exports.createEstateTenant = async (req: Request, res: Response) => {
  try {
    const estateTenant = await models.EstateTenants.create(req.body);
    res.status(201).json({
      success: true,
      data: estateTenant
    });
  } catch (e) {
    console.log(e);
    errorHandler(e, res);
  }
};

exports.updateEstateTenantById = async (req: Request, res: Response) => {
  try {
    const updatedDoc = await updateById(models.EstateTenants, req);
    res.status(200).json({
      success: true,
      data: updatedDoc
    });
  } catch (e) {
    console.log(e);
    errorHandler(e, res);
  }
};

exports.getEstateTenantById = async (req: Request, res: Response) => {
  try {
    const estateTenant = await findById(models.EstateTenants, req.params.id);
    if (estateTenant === null) {
      res.status(404).json({
        success: false,
        data: "No estate admin found"
      });
    } else {
      res.status(200).json({
        success: true,
        data: estateTenant
      });
    }
  } catch (e) {
    console.log(e);
    errorHandler(e, res);
  }
};

exports.getAllEstateTenants = async (req: Request, res: Response) => {
  try {
    const estateTenants = await findAll(models.EstateTenants);
    if (estateTenants === null) {
      res.status(404).json({
        success: false,
        data: "No estate tenant found"
      });
    } else {
      res.status(200).json({
        success: true,
        data: estateTenants
      });
    }
  } catch (e) {
    console.log(e);
    errorHandler(e, res);
  }
};

