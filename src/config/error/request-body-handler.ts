import { Request, Response, NextFunction } from 'express';

import { CONSTANTS } from '@constants';

export function requestBodyHandler(error: Error | any, req: Request, res: Response, next: NextFunction) {

  // TODO: Add proper logging

  if (error.status === 400 && error instanceof SyntaxError) {
    res.status(CONSTANTS.STATUS.BAD_REQUEST).json({
      message: 'Invalid JSON in request',
      error
    });
  } else if (error.type === 'entity.too.large') {
    res.status(CONSTANTS.STATUS.BAD_REQUEST).json({
      message: 'Request Payload size exceeded',
      error
    });
  } else {
    next();
  }

}
