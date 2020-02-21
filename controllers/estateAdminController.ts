import models from "../models";
const errorHandler = require("../utils/errors");
import { Request, Response } from "express";
const { findById, findAll, updateById } =  require('../utils/helpers/query');

exports.createEstateAdmins = async (req: Request, res: Response) => {
  try {
    const estateAdmin = await models.EstateAdmins.create(req.body);
    res.status(201).json({
      success: true,
      data: estateAdmin
    });
  } catch (e) {
    console.log(e);
    errorHandler(e, res);
  }
};

exports.updateEstateAdminsById = async (req: Request, res: Response) => {
  try {
    const updatedDoc = await updateById(models.EstateAdmins, req);
    res.status(200).json({
      success: true,
      data: updatedDoc
    });
  } catch (e) {
    console.log(e);
    errorHandler(e, res);
  }
};

exports.getEstateAdminsById = async (req: Request, res: Response) => {
  try {
    const estateAdmin = await findById(models.EstateAdmins, req.params.id);
    if (estateAdmin === null) {
      res.status(404).json({
        success: false,
        data: "No estate admin found"
      });
    } else {
      res.status(200).json({
        success: true,
        data: estateAdmin
      });
    }
  } catch (e) {
    console.log(e);
    errorHandler(e, res);
  }
};

exports.getAllEstateAdmins = async (req: Request, res: Response) => {
  try {
    const estateAdmin = await findAll(models.EstateAdmins);
    if (estateAdmin === null) {
      res.status(404).json({
        success: false,
        data: "No estate admin found"
      });
    } else {
      res.status(200).json({
        success: true,
        data: estateAdmin
      });
    }
  } catch (e) {
    console.log(e);
    errorHandler(e, res);
  }
};

