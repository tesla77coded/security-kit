import { validationResult } from 'express-validator';

// Validates request data using express-validator and sends formated data

export function validationRequest(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const formatted = errors.array().map(err => ({
      field: err.param,
      message: err.msg,
    }));

    return res.status(400).json({
      success: false,
      errors: formatted,
    })
  }
  next();
}
