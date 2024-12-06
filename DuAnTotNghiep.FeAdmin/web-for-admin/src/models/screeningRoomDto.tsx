export interface Seat {
  seatNumber: string;
  type: string;
}
export interface SeatRow {
  row: string;
  seats: Seat[];
}
export interface ScreeningRoomDto {
  id: number;
  code: string;
  name: string;
  rows: number;
  columns: number;
  totalSeats: number;
  status: string;
  regular: number;
  vipCount: number;
  coupleCount: number;
  seatdiagram: { row: string; seats: Seat[] }[];
}

import seatDiagram from "../assets/seatDiagram.json";

export const screeningRoomData: ScreeningRoomDto[] = [
  {
    id: 1,
    code: "P01",
    name: "Rạp 1",
    rows: 10,
    columns: 10,
    totalSeats: 100,
    status: "active",
    regular: 90,
    vipCount: 0,
    coupleCount: 10,
    seatdiagram: seatDiagram, // Gán dữ liệu từ JSON vào đây
  },
  {
    id: 2,
    code: "P02",
    name: "Rạp 2",
    rows: 10,
    columns: 10,
    totalSeats: 100,
    status: "active",
    regular: 0,
    vipCount: 90,
    coupleCount: 10,
    seatdiagram: seatDiagram, // Dữ liệu giả lập
  },
  // Các phòng chiếu khác...
];
// SeatDTO.ts
export interface SeatDTO {
  code: string;
  name: string;
  price: number;
}

// export const sampleSeats: SeatDTO[] = [
//   { code: 'CVIP01', name: 'Ghế VIP', price: 75000 },
//   { code: 'CNRM01', name: 'Ghế Thường', price: 55000 },
//   { code: 'CCPL01', name: 'Ghế Đôi', price: 130000 },
// ];
