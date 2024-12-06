import axios from "axios";

const baseApi = axios.create({
    baseURL: "https://localhost:7022/",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,  // Tự động gửi cookie cùng yêu cầu
});

baseApi.interceptors.request.use(
    (config) => {
        // Không cần thêm Authorization header thủ công từ localStorage
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

baseApi.interceptors.response.use(
    (res) => {
        return res;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            console.log("Không xác minh được. Vui lòng đăng nhập lại.");
        }
        return Promise.reject(error);
    }
);

export default baseApi;
