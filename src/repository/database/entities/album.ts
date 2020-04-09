import { Document, Model, model, Schema, Types } from "mongoose";
import { Album } from '../../../domain/album/album';

export interface DocumentAlbum extends Document {
  id: string;
  releaseDate: Date;
  rating: number;
  title: string;
  year: number;
}
export interface AlbumEntity extends DocumentAlbum {
  toAlbum(): Album;
}

export const AlbumSchema = new Schema({
  id: { type: String, required: false },
  releaseDate: { type: Date, required: true },
  rating: { type: Number, required: true },
  title: { type: String, required: true },
  year: { type: Number, required: true },
  artist: {
    type: Types.ObjectId,
    ref: "Artist"
  }
});

AlbumSchema.methods.toAlbum = function toUser(): Album {
  return {
    id: this.id,
    releaseDate: this.releaseDate,
    rating: this.rating,
    title: this.title,
    year: this.year
  };
};

export const AlbumDao: Model<AlbumEntity> = model<AlbumEntity>('Album', AlbumSchema);
