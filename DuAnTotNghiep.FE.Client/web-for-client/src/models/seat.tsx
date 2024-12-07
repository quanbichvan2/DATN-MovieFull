export interface SeatType {
    id:    string;
    name:  string;
    price: number;
}

export enum SeatEnum{
    regular,
    vip,
    couples
}

export class SeatTypeDTO {
    id: string;
    name: string;
    price: number;
    constructor({ id, name, price }: any) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
