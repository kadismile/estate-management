import models from "../models";
const errorHandler = require("../utils/errors");
import { Request, Response } from "express";
const { findById, findAll, updateById } =  require('../utils/helpers/query');

exports.createTransaction = async (req: Request, res: Response) => {
  try {
    const transaction = await models.Transactions.create(req.body);
    res.status(201).json({
      success: true,
      data: transaction
    });
  } catch (e) {
    console.log(e);
    errorHandler(e, res);
  }
};

exports.updateTransactionId = async (req: Request, res: Response) => {
  try {
    const updatedDoc = await updateById(models.Transactions, req);
    res.status(200).json({
      success: true,
      data: updatedDoc
    });
  } catch (e) {
    console.log(e);
    errorHandler(e, res);
  }
};

exports.getTransactionById = async (req: Request, res: Response) => {
  try {
    const transaction = await findById(models.Transactions, req.params.id);
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

exports.getAllTransactions = async (req: Request, res: Response) => {
  try {
    const transaction = await findAll(models.Transactions);
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