import { Document } from 'mongoose';

interface ArtistModel extends Document {
  _id: string;
  releaseDate: Date;
  rating: number;
  title: string;
  year: number;
}

export = ArtistModel;
