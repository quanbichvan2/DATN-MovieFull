import baseApi from "../apis/base";
import { SeatType, SeatTypeDTO } from "../models/seat";
const seatService = {
    getSeats: async () => {
        try {
            const response = await baseApi.get('seat-module/Seats', {
                headers: {
                    Accept: "*/*"
                }
            });

            // Chuyển đổi từng ghế thành instance của SeatDTO
            const seats = response.data.items.map((item: SeatType) => new SeatTypeDTO(item));
            return seats;
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