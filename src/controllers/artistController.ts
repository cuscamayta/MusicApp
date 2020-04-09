import { NextFunction, Request, Response } from 'express';
import ArtistService from '../services/ArtistService';
import { ArtistEntity } from '../repository/database/entities/artist';
import BaseController from './baseController';
import { AlbumEntity } from '../repository/database/entities/album';
import ArtistValidator from './validators/artistValidator';
import httpException from './../common/httpException';
import AlbumValidator from './validators/albumValidator';
import Constants from '../config/constants/Constants';

export default class ArtistController extends BaseController {
  private readonly _artistService: ArtistService
  constructor() {
    super();
    this._artistService = new ArtistService()
  }

  create = (req: Request, res: Response, next: NextFunction): void => {
    const artist: ArtistEntity = req.body as ArtistEntity;
    if (!ArtistValidator.validate(artist))
      throw new httpException(500, Constants.INVALID_PARAMETERS_ERROR);

    this.handleExceptionAndExecuteRequest(() => {
      this._artistService.create(artist, (error: Error, result: any) => this.sendResponse(res, error, result, next));
    });
  }

  addAlbum = (req: Request, res: Response, next: NextFunction): void => {
    const artistId: string = req.params.id as string;
    const album: AlbumEntity = req.body as AlbumEntity;

    if (!AlbumValidator.validate(album) || !artistId)
      throw new httpException(500, Constants.INVALID_PARAMETERS_ERROR);

    this.handleExceptionAndExecuteRequest(() => {
      this._artistService.addAlbum(artistId, album, (error: Error, result: any) => this.sendResponse(res, error, result, next));
    });
  }

  removeAlbum = (req: Request, res: Response, next: NextFunction): void => {
    const albumId: string = req.params.albumId as string;
    const artistId: string = req.params.artistId as string;

    if (!artistId || !albumId)
      throw new httpException(500, Constants.INVALID_PARAMETERS_ERROR);

    this.handleExceptionAndExecuteRequest(() => {
      this._artistService.removeAlbum(artistId, albumId, (error: Error, result: any) => this.sendResponse(res, error, result, next));
    });
  }

  delete = (req: Request, res: Response, next: NextFunction): void => {
    const artistId: string = req.params.id as string;
    if (!artistId)
      throw new httpException(500, Constants.INVALID_PARAMETERS_ERROR);

    this.handleExceptionAndExecuteRequest(() => {
      this._artistService.delete(artistId, (error: Error, result: any) => this.sendResponse(res, error, result, next));
    });
  }


  update = (req: Request, res: Response, next: NextFunction): void => {
    const artistModel: ArtistEntity = req.body as ArtistEntity;
    const artistId: string = req.params.id as string;

    if (!ArtistValidator.validate(artistModel) || !artistId)
      throw new httpException(500, Constants.INVALID_PARAMETERS_ERROR);

    this.handleExceptionAndExecuteRequest(() => {
      this._artistService.update(artistId, artistModel, (error: Error, result: any) => this.sendResponse(res, error, result, next));
    });
  }

  getAll = (req: Request, res: Response, next: NextFunction): void => {
    this.handleExceptionAndExecuteRequest(() => {
      this._artistService.retrieve((error: Error, result: any) => this.sendResponse(res, error, result, next));
    });
  }

  getById = (req: Request, res: Response, next: NextFunction): void => {
    const artistId: string = req.params.id as string;
    if (!artistId)
      throw new httpException(500, Constants.INVALID_PARAMETERS_ERROR);

    this.handleExceptionAndExecuteRequest(() => {
      this._artistService.findById(artistId, (error: Error, result: any) => this.sendResponse(res, error, result, next));
    });
  }
}