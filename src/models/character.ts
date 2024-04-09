import { LocationRef } from "../models/location-ref";

export class Character {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: LocationRef;
  location?: LocationRef;
  image?: string;
  episode?: string[];
  url?: string;
  created?: string;
}

export interface ArryCharacters {
  characterInPage: Character[];
  numberPage: number
}