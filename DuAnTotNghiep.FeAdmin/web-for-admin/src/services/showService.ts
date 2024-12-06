import instance from "../apis/base";
import { Show } from "../models/showDto";

interface AddShowPayload  {
    movieId: string,
    startTime: string,
    cinemaHallId: string
}

export const getAllShows = async (): Promise<Show[]> => {
    try {
        const response = await instance.get('/movie-management-module/Shows');
        return response.data.items;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error; 
    }
};

export const addShow  = async (payload: AddShowPayload) => {
    try {
        await instance.post('movie-management-module/Shows', payload)
    }
    catch(error) {
        console.log(error);
        
    }
}