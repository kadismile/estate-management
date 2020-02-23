import models from "../models";
const errorHandler = require("../utils/errors");
import { Request, Response } from "express";
const { findById, findAll, updateById } =  require('../utils/helpers/query');

exports.createSubTransactions = async (req: Request, res: Response) => {
  try {
    const transaction = await models.SubTransactions.create(req.body);
    res.status(201).json({
      success: true,
      data: transaction
    });
  } catch (e) {
    console.log(e);
    errorHandler(e, res);
  }
};

exports.updateSubTransactionById = async (req: Request, res: Response) => {
  try {
    const updatedDoc = await updateById(models.SubTransactions, req);
    res.status(200).json({
      success: true,
      data: updatedDoc
    });
  } catch (e) {
    console.log(e);
    errorHandler(e, res);
  }
};

exports.getSubTransactionById = async (req: Request, res: Response) => {
  try {
    const transaction = await findById(models.SubTransactions, req.params.id);
    if (transaction === null) {
      res.status(404).json({
        success: false,
        data: "No transaction found"
      });
    } else {
      res.status(200).json({
        success: true,
        data: transaction
      });
    }
  } catch (e) {
    console.log(e);
    errorHandler(e, res);
  }
};

exports.getAllSubTransactions = async (req: Request, res: Response) => {
  try {
    const transaction = await findAll(models.SubTransactions);
    if (transaction === null) {
      res.status(404).json({
        success: false,
        data: "No transaction found"
      });
    } else {
      res.status(200).json({
        success: true,
        data: transaction
      });
    }
  } catch (e) {
    console.log(e);
    errorHandler(e, res);
  }
};