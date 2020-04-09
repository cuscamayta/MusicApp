import { AlbumEntity } from '../../repository/database/entities/album';

class AlbumValidator extends Error {
    public static validate(album: AlbumEntity): boolean {
        if (!album.releaseDate || !album.rating || !album.title || !album.year)
            return false;
        return true;
    }
}

export default AlbumValidator;