import { SeatDTO } from "./seat";

export interface HallDTO {
    id: string;
    cinemaName: string;
    name: string;
    totalSeat: number;
    seats: SeatDTO[];
}

