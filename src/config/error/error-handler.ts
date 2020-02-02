import { Response } from 'express';

import { CONSTANTS } from '@constants';

export class ErrorHandler {

  constructor() { }

  handleException(methodName: string, exception: Error, res: Response) {

    console.log(`Exception in method:${methodName}`, exception);
    res.status(CONSTANTS.STATUS.INTERNAL_SERVER_ERROR)
      .json({
        exception,
      });
  }
}

export const errorHandler = new ErrorHandler();
