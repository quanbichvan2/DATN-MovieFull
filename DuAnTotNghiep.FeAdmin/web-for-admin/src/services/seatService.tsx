import { SeatType } from "../models/seatDto";
import instance from "../apis/base";
import { Id } from "react-toastify";
export const getAllSeatsType = async (): Promise<SeatType[]> => {
    try {
        const response = await instance.get('/movie-management-module/SeatTypes');
        console.log(response.data);
        
        return response.data;
    } catch (error) {
        console.error('Error fetching seats:', error);
        throw error; 
    }
};

export const createSeatType = async (seatForm: SeatType): Promise<SeatType> => {
    try {
        // const token = sessionStorage.getItem('accessToken');
        const response = await instance.post('/movie-management-module/SeatTypes',seatForm);
        console.log('API Response:', response);
        return response.data;
    } catch (error) {
        console.error('Error fetching seats:', error);
        throw error; 
    }
};
export const UpdateSeatType = async (seatForm: SeatType, id: string): Promise<SeatType> => {
    try {
        // const token = sessionStorage.getItem('accessToken');
        const response = await instance.put(`/movie-management-module/SeatTypes/${id}`,seatForm);
        return response.data;
    } catch (error) {
        console.error('Error fetching seats:', error);
        throw error; 
    }
};