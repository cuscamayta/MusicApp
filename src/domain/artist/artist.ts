/**
 * This is the app Model it is decoupled from
 * the Entities used for the databse
 */
export interface Artist {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: Date;  
}
