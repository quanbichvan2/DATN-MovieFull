import baseApi from "../apis/base";
import { CategoryDTO, Category } from "../models/category";

const categoryService = {
    getCategories: async (): Promise<CategoryDTO[]> => { // Chỉ định kiểu trả về là mảng CategoryDTO
        try {
            const response = await baseApi.get('catalog-module/Categories', {
                headers: {
                    Accept: "*/*"
                }
            });

            // Chuyển đổi từng danh mục thành instance của CategoryDTO
            const categories = response.data.items.map((item: Category) => new CategoryDTO(item));
            return categories; // Trả về danh sách danh mục đã chuyển đổi
        } catch (error) {
            console.error("Error fetching categories:", error);
            throw error;
        }
    }
};

export default categoryService;