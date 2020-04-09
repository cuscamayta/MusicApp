import { Document, Model, model, Schema, Types } from "mongoose";
import { Artist } from '../../../domain/artist/artist';

export interface DocumentArtist extends Document {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
}
export interface ArtistEntity extends DocumentArtist {
  toArtist(): Artist;
}

export const ArtistSchema = new Schema({
  id: { type: String, required: false },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  birthDate: { type: Date, required: true },
  albums: [{
    type: Types.ObjectId,
    ref: "Album"
  }]
});

ArtistSchema.methods.toArtist = function toArtist(): Artist {
  return {
    id: this.id,
    firstName: this.firstName,
    lastName: this.lastName,
    birthDate: this.birthDate
  };
};

export const ArtistDao: Model<ArtistEntity> = model<ArtistEntity>('Artist', ArtistSchema);
