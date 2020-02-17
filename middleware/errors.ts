import { Request, Response, NextFunction, ErrorRequestHandler } from 'express'
const ErrorResponse = require('../utils/errorResponse');

// @ts-ignore
const errorHandler = (err:ErrorResponse, req:Request, res:Response, next: NextFunction)=> {
  let error = {...err};
  error.message = err.message;

  console.log("ERROR_OOOOOOO ", err);

if (err.type === 'entity.parse.failed') {
const message = `Wrong Entity as een Parsed`;
error = new ErrorResponse(message, 404)
}
 res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  })
};

module.exports = errorHandler;