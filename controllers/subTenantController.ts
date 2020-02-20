import models from "../models";
const errorHandler = require("../utils/errors");
import { Request, Response } from "express";
const { findById, findAll, updateById } =  require('../utils/helpers/query');

exports.createSubTenant = async (req: Request, res: Response) => {
  try {
    const subTenant = await models.SubTenants.create(req.body);
    res.status(201).json({
      success: true,
      data: subTenant
    });
  } catch (e) {
    console.log(e);
    errorHandler(e, res);
  }
};

exports.updateSubTenantById = async (req: Request, res: Response) => {
  try {
    const updatedDoc = await updateById(models.SubTenants, req);
    res.status(200).json({
      success: true,
      data: updatedDoc
    });
  } catch (e) {
    console.log(e);
    errorHandler(e, res);
  }
};

exports.getSubTenantByEstateTenantId = async (req: Request, res: Response) => {
  try {
    const subTenant = await findById(models.SubTenants, req.params.id);
    if (subTenant === null) {
      res.status(404).json({
        success: false,
        data: "No sub tenant found"
      });
    } else {
      res.status(200).json({
        success: true,
        data: subTenant
      });
    }
  } catch (e) {
    console.log(e);
    errorHandler(e, res);
  }
};

exports.getAllSubTenants = async (req: Request, res: Response) => {
  try {
    const subTenants = await findAll(models.SubTenants);
    if (subTenants === null) {
      res.status(404).json({
        success: false,
        data: "No sub tenant found"
      });
    } else {
      res.status(200).json({
        success: true,
        data: subTenants
      });
    }
  } catch (e) {
    console.log(e);
    errorHandler(e, res);
  }
};