// movieDetailService.ts

import baseApi from "../apis/base";
import { Movie, MovieListResponse, Genre, CastMember } from "../models/movieDetail";

const movieDetailService = {
  // Fetch movie details by ID
  getMovieById: async (movieId: string): Promise<Movie> => {
    try {
      // const response = await baseApi.get(`/movie-management-module/Shows/${movieId}`, {
        const response = await baseApi.get(`/movie-management-module/Movies/${movieId}`, {
        headers: { Accept: "*/*" }
      });
      return response.data;
    } catch (error) {
      console.error(`Error fetching movie with ID ${movieId}:`, error);
      throw new Error(`Failed to fetch movie details for ID: ${movieId}`);
    }
  },

  // Fetch paginated list of movies
  getMovies: async (pageIndex: number = 1, pageSize: number = 10): Promise<MovieListResponse> => {
    try {
      const response = await baseApi.get('/movie-management-module/Movies', {
        params: { pageIndex, pageSize },
        headers: { Accept: "*/*" }
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching movies list:", error);
      throw new Error("Failed to fetch movies list");
    }
  },

  // Fetch paginated list of genres
  getGenres: async (pageIndex: number = 1, pageSize: number = 10): Promise<{ items: Genre[]; totalPages: number; totalCount: number; }> => {
    try {
      const response = await baseApi.get('/movie-management-module/Genres', {
        params: { pageIndex, pageSize },
        headers: { Accept: "*/*" }
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching genres list:", error);
      throw new Error("Failed to fetch genres list");
    }
  },

  // Fetch paginated list of cast members
  getCastMembers: async (pageIndex: number = 1, pageSize: number = 10): Promise<{ items: CastMember[]; totalPages: number; totalCount: number; }> => {
    try {
      const response = await baseApi.get('/movie-management-module/CastMembers', {
        params: { pageIndex, pageSize },
        headers: { Accept: "*/*" }
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching cast members list:", error);
      throw new Error("Failed to fetch cast members list");
    }
  },
};

export default movieDetailService;
