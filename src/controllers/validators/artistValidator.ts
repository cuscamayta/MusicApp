import { ArtistEntity } from '../../repository/database/entities/artist';

class ArtistValidator extends Error {
    public static validate(artist: ArtistEntity): boolean {
        if (!artist.firstName || !artist.lastName || !artist.birthDate )
            return false;
        return true;
    }
}

export default ArtistValidator;