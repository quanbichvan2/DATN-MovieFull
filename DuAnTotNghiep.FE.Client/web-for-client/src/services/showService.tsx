import baseApi from "../apis/base";
import axios from "axios";
import { Show } from "../models/show";

const showService = {
    getShows: async () => {
        try {
            const response = await baseApi.get('movie-management-module/Shows', {
                headers: {
                    Accept: "*/*"
                }
            });

            // Chuyển đổi từng show thành instance của ShowDTO
            // const shows = response.data.items.map((item: Show) => new ShowDTO(item));
            // return shows;
            return response.data;
        } catch (error) {
            console.error("Error fetching shows:", error);
            throw error;
        }
    },

    getShowsByMovieId: async (movieId: string) => {
        try {
            // const response = await baseApi.get(`movie-management-module/Movies/${movieId}`);
            const response = await baseApi.get(`/movie-management-module/Shows/GetShowByMovieId/${movieId}`);
            console.log(response.data)
            return response.data;
        } catch (error) {
            console.error("Error fetching shows by movieId:", error);
            throw error;
        }
    }
};

export default showService;
