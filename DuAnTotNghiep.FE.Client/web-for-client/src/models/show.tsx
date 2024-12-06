export interface Show {
  id:                  string;
  movieTitle:          string;
  genres:              Genre[];
  listHall:            ListHall[];
  movieRuntimeMinutes: number;
  moviePosterImage:    string;
  ageRating:           number;
  movieId:             string;
}

export interface Genre {
  id:   string;
  name: string;
}

export interface ListHall {
  hallId:   string;
  hallName: string;
  listTime: ListTime[];
}

export interface ListTime {
  startTime: string;
  showTimes: ShowTime[];
}
export interface ShowTime {
  showId: string;
  time:   string;
}

