// ProductDTO.ts
export class ProductDTO {
    id: string;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    categoryId: string;

    constructor({ id, code, name, description = "", image = "", price, categoryId }: any) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.description = description;
        this.image = image;
        this.price = price;
        this.categoryId = categoryId;
    }
}
// Product.ts
export interface Product {
    id: string;
    code: string;
    name: string;
    description?: string; // Có thể không có
    image?: string; // Có thể không có
    price: number;
    categoryId: string;
}
