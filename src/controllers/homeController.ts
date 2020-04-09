import { Request, Response } from 'express';

export default class HomeController {
  public static getDefault(req: Request, res: Response): void {
    res.send('Hello World!');
  }
}
