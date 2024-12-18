// import axios, { AxiosResponse } from 'axios';
// import { loginDto } from '../models/loginDto'
// import { registerDto } from '../models/registerDto'
// interface LoginResponse {
//     token: string; // Mã token để sử dụng cho xác thực
//     expiresIn: number; // Thời gian hết hạn của token
//     userId: string; // ID của người dùng
//     username: string; // Tên người dùng
// }
// const BASE_URL = "http://localhost:5232/identity-module"
// // Hàm xử lý đăng nhập
// export const login = async (credentials: loginDto): Promise<LoginResponse | null> => {
//     try {
//         // Thực hiện yêu cầu POST đến API đăng nhập
//         const response: AxiosResponse<LoginResponse> = await axios.post(
//             `${BASE_URL}/Identity/login`, // Đường dẫn API của bạn
//             credentials,{
//                 headers: {
//                   "Content-Type": "application/json",
//                 },
//               }
//         );

//         // Trả về dữ liệu đăng nhập
//         return response.data;
//     } catch (error) {
//         console.error('Đăng nhập thất bại:', error);
//         return null;
//     }
// };
// export const register = async (user: registerDto): Promise<registerDto | null> => {
//     try {
//         // Thực hiện yêu cầu POST đến API đăng nhập
//         const response: AxiosResponse<registerDto> = await axios.post(
//             `${BASE_URL}/Identity/register`, // Đường dẫn API của bạn
//             user,{
//                 headers: {
//                   "Content-Type": "application/json",
//                 },
//               }
//         );

//         // Trả về dữ liệu đăng nhập
//         return response.data;
//     } catch (error) {
//         console.error('Đăng ký thất bại:', error);
//         return null;
//     }
// };

import axios, { AxiosResponse, AxiosError } from 'axios';
import { loginDto } from '../models/loginDto';
import { registerDto } from '../models/registerDto';

interface LoginResponse {
    token: string;
    expiresIn: number;
    userId: string;
    username: string;
}

const BASE_URL = "https://localhost:7022/identity-module";
const USER_MODULE_URL = "https://localhost:7022/users-module";

// Utility function for error logging
const handleAxiosError = (error: unknown, action: string) => {
    if (error instanceof AxiosError) {
        console.error(`${action} thất bại:`, {
            message: error.message,
            status: error.response?.status,
            data: error.response?.data,
        });
    } else {
        console.error(`${action} thất bại:`, error);
    }
};

// Login function
export const login = async (credentials: loginDto): Promise<LoginResponse | null> => {
    try {
        const response: AxiosResponse<LoginResponse> = await axios.post(
            `${BASE_URL}/Identity/login`,
            credentials,
            {
                headers: { "Content-Type": "application/json" },
            }
        );
        return response.data;
    } catch (error: unknown) {
        handleAxiosError(error, "Đăng nhập");
        return null;
    }
};

// Register function
export const register = async (user: registerDto): Promise<registerDto | null> => {
    try {
        // Step 1: Register the user in identity-module
        const response: AxiosResponse<registerDto> = await axios.post(
            `${BASE_URL}/Identity/register`,
            user,
            {
                headers: { "Content-Type": "application/json" },
            }
        );
        
        console.log("Đăng ký thành công tại identity-module:", response.data);

        // Step 2: Save additional user info in users-module
        const additionalUserInfo = {
            name: user.name,
            phoneNumber: user.phoneNumber,
            email: user.email
        };

        await axios.post(
            `${USER_MODULE_URL}/User`,
            additionalUserInfo,
            {
                headers: { "Content-Type": "application/json" },
            }
        );
        
        console.log("Thông tin bổ sung đã được lưu tại users-module:", additionalUserInfo);
        return response.data;
    } catch (error: unknown) {
        handleAxiosError(error, "Đăng ký");
        return null;
    }
};
