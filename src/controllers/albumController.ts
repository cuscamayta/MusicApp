import { NextFunction, Request, Response } from 'express';
import AlbumService from '../services/AlbumService';
import { AlbumEntity } from '../repository/database/entities/album';
import BaseController from './baseController';
import AlbumValidator from './validators/albumValidator';
import httpException from './../common/httpException';
import Constants from '../config/constants/Constants';

export default class AlbumController extends BaseController {
  private readonly _albumService: AlbumService
  constructor() {
    super();
    this._albumService = new AlbumService()
  }

  create = (req: Request, res: Response, next: NextFunction): void => {
    const album: AlbumEntity = req.body as AlbumEntity;
    if (!AlbumValidator.validate(album))
      throw new httpException(500, Constants.INVALID_PARAMETERS_ERROR);

    this.handleExceptionAndExecuteRequest(() => {
      this._albumService.create(album, (error: Error, result: any) => this.sendResponse(res, error, result, next));
    });
  }

  delete = (req: Request, res: Response, next: NextFunction): void => {
    const albumId: string = req.params.id as string;
    if (!albumId)
      throw new httpException(500, Constants.INVALID_PARAMETERS_ERROR);

    this.handleExceptionAndExecuteRequest(() => {
      this._albumService.delete(albumId, (error: Error, result: any) => this.sendResponse(res, error, result, next));
    });
  }

  update = (req: Request, res: Response, next: NextFunction): void => {
    const albumModel: AlbumEntity = req.body as AlbumEntity;
    const albumId: string = req.params.id as string;
    if (!AlbumValidator.validate(albumModel) || !albumId)
      throw new httpException(500, Constants.INVALID_PARAMETERS_ERROR);

    this.handleExceptionAndExecuteRequest(() => {
      this._albumService.update(albumId, albumModel, (error: Error, result: any) => this.sendResponse(res, error, result, next));
    });
  }

  getAll = (req: Request, res: Response, next: NextFunction): void => {
    this.handleExceptionAndExecuteRequest(() => {
      this._albumService.retrieve((error: Error, result: any) => this.sendResponse(res, error, result, next));
    });
  }

  getById = (req: Request, res: Response, next: NextFunction): void => {
    const albumId: string = req.params.id as string;
    if (!albumId)
      throw new httpException(500, Constants.INVALID_PARAMETERS_ERROR);

    this.handleExceptionAndExecuteRequest(() => {
      this._albumService.findById(albumId, (error: Error, result: any) => this.sendResponse(res, error, result, next));
    });
  }
}
