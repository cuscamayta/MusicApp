import { NextFunction, Response } from 'express';
import { logger } from '../libs/logger';
import HttpResponse from '../common/httpResponse';

export default abstract class BaseController {
  protected sendResponse(res: Response, error: Error, result: any, next: NextFunction): void {
    if (error)
      res.send(new HttpResponse(500, error.message, {}, false));
    else
      res.send(new HttpResponse(200, "", result));
  }

  protected handleExceptionAndExecuteRequest<T>(actionToExecute: () => void): void {
    try {
      actionToExecute();
    }
    catch (e) {
      logger.log(e);
    }
  }
}
