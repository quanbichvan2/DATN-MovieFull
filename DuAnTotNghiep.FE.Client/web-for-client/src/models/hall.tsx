export interface Hall {
    seats:      Seat[];
    id:         string;
    cinemaName: string;
    totalSeat:  number;
    name:       string;
}

export interface Seat {
    id:            string;
    seatPosition:  string;
    seatTypeId:    string;
    seatTypeName:  SeatTypeName;
    seatTypePrice: number;
    
    isSelected?: boolean;
    type: "regular" | "vip" | "couple";
    className: string;
}

export enum SeatTypeName {
    GhếThường = "Ghế thường",
    GhếĐôi = "Ghế Đôi",
    GhếVIP = "Ghế Vip"
}
