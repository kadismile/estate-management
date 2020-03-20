import models from "../models";
const errorHandler = require('../utils/errors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const  { modelName } = require('../utils/helpers/modelname');
const { findByEmail, findById } =  require('../utils/helpers/query');
import {Request, Response} from 'express'

exports.authLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const model = req.headers.modelname;

  if (!model) {
    res.status(403).json({
      success: false,
      data: "No modelName set on Headers"
    });
  }

  if (!email || !password) {
    res.status(403).json({
      success: false,
      data: "Invalid Login Details "
    });
  }

  try {

    let Model = modelName(model);
    if (!Model) {
      res.status(404).json({
        success: false,
        data: `No Model Found with ${model}`
      });
    }
    const resource = await findByEmail(Model, email);

    if (resource === null) {
      res.status(404).json({
        success: false,
        data: "No Resource Found with this details"
      });
    }

    const isMatch  = await bcrypt.compare(password, resource.password);
    if (!isMatch) {
      res.status(401).json({
        success: false,
        data: "Invalid Credentials"
      });
    } else {
      let token = jwt.sign({ id: resource.id, roles: resource.roles, model: resource.model  }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
      });

      res.status(200).json({
        success: true,
        data: { resource, token }
      });
    }
  } catch (e) {
    errorHandler(e, res)
  }
};

exports.authUser = async (req: Request, res: Response) => {
  let token;
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
      errorHandler('Not authorized to access this route', res)
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded.id) {
      errorHandler('Not authorized to access this route', res)
    }

    const resource = await findById(modelName(decoded.model), decoded.id);

    res.status(200).json(
      resource
    );
  } catch (e) {
    errorHandler('An Error Occurred', e)
  }
}
