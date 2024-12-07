import baseApi from "../apis/base";

const registerService = {
    registerUser: async (userData: any): Promise<any> => { // Định nghĩa kiểu trả về và dữ liệu đầu vào
        try {
            const response = await baseApi.post('/identity-module/Identity/register', userData, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            });

            // Trả về dữ liệu phản hồi từ API
            return response.data;
        } catch (error: any) {
            console.error("Error during user registration:", error);

            // Xử lý lỗi cụ thể nếu có, ví dụ lấy thông tin từ response
            if (error.response) {
                throw new Error(error.response.data.message || "An error occurred while registering.");
            }
            throw new Error("Failed to register user.");
        }
    }
};

export default registerService;
