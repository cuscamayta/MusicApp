import { AlbumEntity, AlbumDao } from './database/entities/album';
import DaoBase from './base/DaoBase';

class AlbumRepository extends DaoBase<AlbumEntity> {
    constructor() {
        super(AlbumDao);
    }
}

Object.seal(AlbumRepository);
export = AlbumRepository;