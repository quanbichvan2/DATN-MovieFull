import axios, { AxiosResponse } from 'axios';
import { loginDto } from '../models/loginDto'
import { registerDto } from '../models/registerDto'
interface LoginResponse {
    token: string; // Mã token để sử dụng cho xác thực
    expiresIn: number; // Thời gian hết hạn của token
    userId: string; // ID của người dùng
    username: string; // Tên người dùng
}
const BASE_URL = "http://localhost:5232/identity-module"
// Hàm xử lý đăng nhập
export const login = async (credentials: loginDto): Promise<LoginResponse | null> => {
    try {
        // Thực hiện yêu cầu POST đến API đăng nhập
        const response: AxiosResponse<LoginResponse> = await axios.post(
            `${BASE_URL}/Identity/login`, // Đường dẫn API của bạn
            credentials,{
                headers: {
                  "Content-Type": "application/json",
                },
              }
        );

        // Trả về dữ liệu đăng nhập
        return response.data;
    } catch (error) {
        console.error('Đăng nhập thất bại:', error);
        return null;
    }
};
export const register = async (user: registerDto): Promise<registerDto | null> => {
    try {
        // Thực hiện yêu cầu POST đến API đăng nhập
        const response: AxiosResponse<registerDto> = await axios.post(
            `${BASE_URL}/Identity/register`, // Đường dẫn API của bạn
            user,{
                headers: {
                  "Content-Type": "application/json",
                },
              }
        );

        // Trả về dữ liệu đăng nhập
        return response.data;
    } catch (error) {
        console.error('Đăng ký thất bại:', error);
        return null;
    }
};