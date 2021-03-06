import models from "../models";
import { Request, Response, NextFunction } from "express";
const { modelName } = require("../utils/helpers/modelname");

const jwt = require("jsonwebtoken");
const errorHandler = require("../utils/errors");
const { findById } = require("../utils/helpers/query");

// Protect routes

exports.authorize = roles => {
  return async (req, res, next) => {
    try {
      const { resource, decoded } = await verifyToken(req, res, next);
      if (!decoded.roles.includes("admin")) {
        return errorHandler("Not authorized to access this route", res);
      }

      if (!resource.id) {
        return errorHandler("Not authorized to access this route", res);
      }
      next();
    } catch (e) {
      console.log("error");
      console.log(e);
    }
  };
};

async function verifyToken(req: Request, res: Response, next: NextFunction) {
  let token;
  try {
    if (
      req.headers &&
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

    const resource = await findById(modelName(decoded.model), decoded.id);

    return await { resource, decoded };
  } catch (e) {
    console.log("error");
    console.log(e);
    return errorHandler("An Error Occurred", e);
  }
}
