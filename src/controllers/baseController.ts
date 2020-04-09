import { NextFunction, Response } from 'express';
import { logger } from '../libs/logger';
import HttpResponse from '../common/httpResponse';
import HttpException from '../common/httpException';

export default abstract class BaseController {
  protected sendResponse(res: Response, error: Error, result: any, next: NextFunction): void {
    if (error)
      next(new HttpException(500, error.message));
    else
      res.send(new HttpResponse(200, "", result));
  }

  protected handleExceptionAndExecuteRequest<T>(actionToExecute: () => void): void {
    try {
      actionToExecute();
    }
    catch (e) {
      logger.log(e);
      throw new HttpException(500, e);
    }
  }
}
