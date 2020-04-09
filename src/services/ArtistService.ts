import ArtistRepository from '../repository/ArtistRepository';
import AlbumRepository from '../repository/AlbumRepository';
import { ArtistEntity } from '../repository/database/entities/artist';
import { AlbumEntity } from '../repository/database/entities/album';


class ArtistService {
    private _artistRepository: ArtistRepository;
    private _albumRepository: AlbumRepository;

    constructor() {
        this._artistRepository = new ArtistRepository();
        this._albumRepository = new AlbumRepository();
    }

    create(item: ArtistEntity, callback: (error: Error, result: any) => void): void {
        this._artistRepository.create(item, callback);
    }

    retrieve(callback: (error: Error, result: any) => void): void {
        return this._artistRepository.retrieve(callback);
    }

    addAlbum(_id: string, album: AlbumEntity, callback: (error: Error, result: any) => void): void {
        this._albumRepository.create(album, (error, album) => {
            this._artistRepository.addAlbum(_id, album._id.toString(), callback);
        });
    }

    removeAlbum(_id: string, albumId: string, callback: (error: Error, result: any) => void): void {
        this._albumRepository.delete(_id, (error, album) => {
            if (!error)
                this._artistRepository.removeAlbum(_id, albumId, callback);
            callback(error, album);
        })

    }

    update(_id: string, item: ArtistEntity, callback: (error: Error, result: any) => void): void {
        this._artistRepository.findById(_id, (err, res) => {
            if (err)
                callback(err, res);
            else
                this._artistRepository.update(_id, item, callback);
        });
    }

    delete(_id: string, callback: (error: Error, result: any) => void): void {
        this._artistRepository.delete(_id, callback);
    }

    findById(_id: string, callback: (error: Error, result: ArtistEntity) => void): void {
        this._artistRepository.findById(_id, callback);
    }
}

Object.seal(ArtistService);
export = ArtistService;