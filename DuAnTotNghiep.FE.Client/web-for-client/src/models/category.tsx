export class CategoryDTO {
    id: string;
    name: string;
    code: string;

    constructor(data: { id: string; name: string; code: string }) {
        this.id = data.id;
        this.name = data.name;
        this.code = data.code;
    }
}

export interface Category {
    id: string;
    name: string;
    code: string;
}