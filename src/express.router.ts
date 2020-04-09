import { Express, Router } from 'express';
import HomeController from './controllers/homeController';
import ArtistController from './controllers/artistController';
import AlbumController from './controllers/albumController';

export default class ExpressRouter {
  public router: Router;
  private app: Express;
  private albumController: AlbumController;
  private artistController: ArtistController;

  constructor(app: Express) {
    this.router = Router();
    this.app = app;
    this.albumController = new AlbumController();
    this.artistController = new ArtistController();
  }

  public init(): void {

    this.router.get('/', HomeController.getDefault);
    this.router.get('/albums', this.albumController.getAll);
    this.router.get('/albums/:id', this.albumController.getById);
    this.router.post('/albums', this.albumController.create);
    this.router.put('/albums/:id', this.albumController.update);
    this.router.delete('/albums/:id', this.albumController.delete);


    this.router.get('/', HomeController.getDefault);
    this.router.get('/artists', this.artistController.getAll);
    this.router.post('/artists', this.artistController.create);
    this.router.post('/artists/:id/albums', this.artistController.addAlbum);
    this.router.put('/artists/:id', this.artistController.update);
    this.router.delete('/artists/:artistId/albums/:albumId', this.artistController.removeAlbum);
    this.router.delete('/artists/:id', this.artistController.delete);

    this.app.use('/api/v1/', this.router);
  }
}
