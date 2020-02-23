import models from "../models";
const errorHandler = require("../utils/errors");
import { Request, Response } from "express";
const { findById, findAll, updateById } =  require('../utils/helpers/query');

exports.createVisitor = async (req: Request, res: Response) => {
  try {
    const visitor = await models.Visitors.create(req.body);
    res.status(201).json({
      success: true,
      data: visitor
    });
  } catch (e) {
    console.log(e);
    errorHandler(e, res);
  }
};

exports.updateVisitorById = async (req: Request, res: Response) => {
  try {
    const updatedDoc = await updateById(models.Visitors, req);
    res.status(200).json({
      success: true,
      data: updatedDoc
    });
  } catch (e) {
    console.log(e);
    errorHandler(e, res);
  }
};

exports.getVisitorById = async (req: Request, res: Response) => {
  try {
    const visitor = await findById(models.Visitors, req.params.id);
    if (visitor === null) {
      res.status(404).json({
        success: false,
        data: "No visitor found"
      });
    } else {
      res.status(200).json({
        success: true,
        data: visitor
      });
    }
  } catch (e) {
    console.log(e);
    errorHandler(e, res);
  }
};

exports.getAllVisitors = async (req: Request, res: Response) => {
  try {
    const visitors = await findAll(models.Visitors);
    if (visitors === null) {
      res.status(404).json({
        success: false,
        data: "No visitor found"
      });
    } else {
      res.status(200).json({
        success: true,
        data: visitors
      });
    }
  } catch (e) {
    console.log(e);
    errorHandler(e, res);
  }
};

