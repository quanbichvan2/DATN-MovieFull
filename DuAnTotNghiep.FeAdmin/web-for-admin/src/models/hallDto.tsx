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
    seatTypeName:  string;
    seatTypePrice: number;
}
