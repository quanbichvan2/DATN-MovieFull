// movieDetail.ts

export interface Movie {
  id: string;
  title: string;
  directorName: string;
  directorId: string;
  ageRating: number;
  runtimeMinutes: number;
  releaseDate: string;
  trailerLink: string;
  bannerText: string;
  headerImage: string;
  posterImage: string;
  description: string;
  genres: Genre[];         // Array of associated genres
  castMembers: CastMember[];  // Array of associated cast members
}

export interface Genre {
  id: string;
  name: string;
}

export interface CastMember {
  id: string;
  name: string;
}

export interface MovieListResponse {
  items: Movie[];
  pageIndex: number;
  totalPages: number;
  totalCount: number;
  pageSize: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
