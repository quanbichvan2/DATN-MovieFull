import baseApi from "../apis/base";
import { HallDTO } from "../models/hall";

const hallService = {
    getHallById: async (hallId: string): Promise<HallDTO> => {
        try {
            const response = await baseApi.get(`/movie-management-module/Halls/${hallId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching seats:', error);
            throw error;
        }
    }
};

export default hallService;