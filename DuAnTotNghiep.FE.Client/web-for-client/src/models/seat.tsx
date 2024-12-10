export interface SeatType {
    id:  string;
    name: string;
    price: number;
}

export interface SeatTypeDTO {
    id: string;
    name: string;
    price: number;
    type: "regular" | "vip" | "couple";
}

export interface SeatDTO {
    seatPosition: any;
    seatNumber: any;
    id: string;
    diagram: string;
    row: string;
    // seatNumber : string;
}
