import AlbumRepository from '../repository/AlbumRepository';
import { AlbumEntity } from '../repository/database/entities/album';

class AlbumService {
    private _albumRepository: AlbumRepository;

    constructor() {
        this._albumRepository = new AlbumRepository();
    }

    create(item: AlbumEntity, callback: (error: Error, result: any) => void): void {
        this._albumRepository.create(item, callback);
    }

    retrieve(callback: (error: Error, result: any) => void): void {
        return this._albumRepository.retrieve(callback);
    }

    update(_id: string, item: AlbumEntity, callback: (error: Error, result: any) => void): void {
        this._albumRepository.findById(_id, (err, res) => {
            if (err)
                callback(err, res);
            else
                this._albumRepository.update(_id, item, callback);
        });
    }

    delete(_id: string, callback: (error: Error, result: any) => void): void {
        this._albumRepository.delete(_id, callback);
    }

    findById(_id: string, callback: (error: Error, result: AlbumEntity) => void): void {
        this._albumRepository.findById(_id, callback);
    }
}

Object.seal(AlbumService);
export = AlbumService;