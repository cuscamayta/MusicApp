/**
 * This is the app Model it is decoupled from
 * the Entities used for the databse
 */
export interface Album {
  id: string;
  releaseDate: Date;
  rating: number;
  title: string;
  year: number;
}
