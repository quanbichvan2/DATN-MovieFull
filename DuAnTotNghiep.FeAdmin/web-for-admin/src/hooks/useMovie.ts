import { useQuery } from "@tanstack/react-query"
import { getAllMovies } from "../services/movieService"

export const useMovieQuery  = () => {
    return useQuery({queryKey:['movies'], queryFn: getAllMovies})
}