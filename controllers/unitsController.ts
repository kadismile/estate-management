import models from "../models";
const errorHandler = require('../utils/errors');
import { Request, Response } from 'express'

exports.createUnits = async (req:Request, res:Response) => {
    console.log("BODY____",req.body);
    try {
        const unit = await models.Units.create(req.body);
        res.status(201).json({
            success: true,
            data: unit
        });
    } catch (e) {
        errorHandler(e,res)
    }
};
