import seatDiagram from "../assets/seatDiagram.json";
import { Hall, Seat } from "../models/hallDto";
import instance from "../apis/base";
export const getAllSeats = async (id: string): Promise<Seat[]> => {
    try {
        // Gọi API để lấy dữ liệu của rạp
        const response = await instance.get<Hall>(`/movie-management-module/Halls/${id}`);
        console.log('Hall data:', response.data);

        // Trả về mảng seats từ Hall
        return response.data.seats;
    } catch (error) {
        console.error('Error fetching seats:', error);
        throw error; // Ném lỗi để xử lý ở nơi gọi hàm
    }
};