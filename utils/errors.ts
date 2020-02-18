import {Response} from 'express'

const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, res: Response) => {
    let error = {...err};
    error.message = err.message;

    if (err.type === 'entity.parse.failed') {
        const message = `Wrong Entity as been Parsed`;
        error = new ErrorResponse(message, 404)
    }

    if (err.name === 'SequelizeUniqueConstraintError') {
        const message = `Unique Entity Error`;
        error = new ErrorResponse(message, 404)
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    })
};

module.exports = errorHandler;