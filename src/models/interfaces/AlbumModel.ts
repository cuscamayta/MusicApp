import { Document } from 'mongoose';

interface AlbumModel extends Document {
  _id: string;
  releaseDate: Date;
  rating: number;
  title: string;
  year: number;
}

export = AlbumModel;
