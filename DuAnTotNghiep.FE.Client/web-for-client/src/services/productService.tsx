import baseApi from "../apis/base";
import { Product, ProductDTO } from "../models/product";

const productService = {
    getProducts: async () => {
        try {
            const response = await baseApi.get('catalog-module/Products', {
                headers: {
                    Accept: "*/*"
                }
            });
            
            // Chuyển đổi từng sản phẩm thành instance của ProductDTO
            const products = response.data.items.map((item: Product) => new ProductDTO(item)); // Chỉ định kiểu cho item
            return products;
        } catch (error) {
            console.error("Error fetching products:", error);
            throw error;
        }
    }
};

export default productService;
