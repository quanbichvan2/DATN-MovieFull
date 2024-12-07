export interface SeatType {
    id:    string;
    name:  string;
    price: number;
}

export class SeatTypeDTO {
    id: string;
    name: string;
    price: number;
    type: string;

    constructor({ id, name, price }: any) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
