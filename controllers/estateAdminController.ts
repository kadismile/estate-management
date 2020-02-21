import models from "../models";
const errorHandler = require("../utils/errors");
import { Request, Response } from "express";

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
    const updatedDoc = await models.EstateAdmins.update(
      req.body,
      {returning: true, where: {id: req.params.id} }
    );
      res.status(201).json({
        success: true,
        data: updatedDoc[1][0]
      });
  } catch (e) {
    console.log(e);
    errorHandler(e, res);
  }
};

exports.getEstateAdminsById = async (req: Request, res: Response) => {
  try {
    const estateAdmin = await findEstateAdminsById(req.params.id)
    if (estateAdmin === null) {
      res.status(404).json({
        success: false,
        data: "No estate admin found"
      });
    } else {
      res.status(201).json({
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
    const estateAdmin = await findAllEstateAdmin();
    if (estateAdmin === null) {
      res.status(404).json({
        success: false,
        data: "No estate admin found"
      });
    } else {
      res.status(201).json({
        success: true,
        data: estateAdmin
      });
    }
  } catch (e) {
    console.log(e);
    errorHandler(e, res);
  }
};

//export a utility function that take in any model and finds by id
const findEstateAdminsById = async (id: string) => {
    const estateAdmin = await models.EstateAdmins.findOne({
      where: { id: id }
    });
    if (estateAdmin) {
      return estateAdmin;
    } 
    return null;
};

const findAllEstateAdmin = async () => {
  const estateAdmin = await models.EstateAdmins.findAll();
  if (estateAdmin) {
    return estateAdmin;
  } 
  return null;
};

