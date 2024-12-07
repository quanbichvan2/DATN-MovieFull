export interface SeatType {
    id:  string;
    name: string;
    price: number;
}

export interface SeatTypeDTO {
    id: string;
    name: string;
    price: number;
    type: string;
}

export interface SeatDTO {
    id: string;
    diagram: string;
}
