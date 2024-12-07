import baseApi from "../apis/base";
import { SeatType, SeatTypeDTO } from "../models/seat";
const seatService = {
    getSeats: async (hallId : string) => {
        try {
            const response = await baseApi.get<SeatType[]>(`/movie-management-module/Halls/${hallId}`, {
                headers: {
                    Accept: "*/*"
                }
            });
            console.log(response.data)
            return response.data;
        } catch (error) {
            console.error("Error fetching seats:", error);
            throw error;
        }
    },


    getAllSeatsType: async (): Promise<SeatType[]> => {
        try {
            const response = await baseApi.get('/movie-management-module/SeatTypes');
            console.log(response.data);

            return response.data;
        } catch (error) {
            console.error('Error fetching seats:', error);
            throw error;
        }
    }
};
export default seatService;