export interface ResponseCharacters {
  info:    Info;
  results: Characters[];
}

  interface Info {
  count: number;
  pages: number;
  next:  string;
  prev:  null;
}

  interface Characters {
  id:       number;
  name:     string;
  status:   Status;
  species:  Species;
  type:     string;
  gender:   Gender;
  origin:   Location;
  location: Location;
  image:    string;
  episode:  string[];
  url:      string;
  created:  Date;
}

  enum Gender {
  Female = "Female",
  Male = "Male",
  Unknown = "unknown",
}

  interface Location {
  name: string;
  url:  string;
}

  enum Species {
  Alien = "Alien",
  Human = "Human",
}

export enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}


export interface ResponseCharacterID {
  id:       number;
  name:     string;
  status:   string;
  species:  string;
  type:     string;
  gender:   string;
  origin:   Location;
  location: Location;
  image:    string;
  episode:  string[];
  url:      string;
  created:  Date;
}

