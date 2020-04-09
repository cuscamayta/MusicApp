import { ArtistEntity, ArtistDao } from './database/entities/artist';
import DaoBase from './base/DaoBase';
import { Types } from "mongoose";

class ArtistRepository extends DaoBase<ArtistEntity> {
    constructor() {
        super(ArtistDao);
    }

    addAlbum(_id: string, albumId: string, callback: (error: Error, result: any) => void): void {
        this._model.findByIdAndUpdate({ _id: Types.ObjectId(_id) }, { $push: { albums: albumId } }, { new: true }, callback);
    }

    removeAlbum(_id: string, albumId: string, callback: (error: Error, result: any) => void): void {
        this._model.update({ _id: Types.ObjectId(_id) }, { $pull: { albums: albumId } }, { multi: true }, callback);
    }
}

Object.seal(ArtistRepository);
export = ArtistRepository;