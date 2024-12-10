import { Order } from "../models/order";
import baseApi from "../apis/base";

const orderService = {
    createOrder: async (orderData : any): Promise<Order> => {
        try {
            // const token = sessionStorage.getItem('accessToken');
            const response = await baseApi.post('/booking-module/Orders', orderData);
            console.log('API Response:', response);
            return response.data;
        } catch (error) {
            console.error('Error fetching seats:', error);
            throw error;
        }
    }
}
export default orderService;