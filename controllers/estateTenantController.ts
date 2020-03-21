import models from "../models";
const errorHandler = require("../utils/errors");
const jwt = require("jsonwebtoken");
import { Request, Response } from "express";
const { findById, findAll, updateById } = require("../utils/helpers/query");

exports.createEstateTenant = async (req: Request, res: Response) => {
  try {
    const estateTenant = await models.EstateTenants.create(req.body);
    const { password, ...result } = estateTenant.get({ plain: true });
    res.status(201).json({
      success: true,
      data: result
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

exports.getTenantsByAdmin = async (req: Request, res: Response) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
      return errorHandler("Not authorized to access this route", res);
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded.id) {
      return errorHandler("Not authorized to access this route", res);
    }

    const estateTenants = await models.EstateTenants.findAll({
      where: { estateAdminId: decoded.id }
    });
    if (estateTenants.length > 0) {
      res.status(200).json({
        success: true,
        data: estateTenants
      });
    } else {
      res.status(404).json({
        success: false,
        data: "No estate tenant found"
      });
    }
  } catch (e) {
    console.log(e);
    errorHandler(e, res);
  }
};
