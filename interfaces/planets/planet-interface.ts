export interface Planet {
  count:    number;
  next:     string | null;
  previous: string | null;
  results:  Result[];
}

export interface Result {
  name:            string;
  rotation_period: string;
  orbital_period:  string;
  diameter:        string;
  climate:         string;
  gravity:         string;
  terrain:         string;
  surface_water:   string;
  population:      string;
  residents:       string[];
  films:           string[];
  created:         Date;
  edited:          Date;
  url:             string;
}
