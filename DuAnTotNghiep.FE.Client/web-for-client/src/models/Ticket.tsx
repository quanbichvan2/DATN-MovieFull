// src/models/TicketModel.ts
export interface TicketModel {
    movieTitle: string;
    countdown: string;
    ageRestriction: string;
    cinemaName: string;
    cinemaAddress: string;
    showTime: string;
    roomNumber: string;
    ticketCount: number;
    ticketType: string;
    seatType: string;
    seatNumber: string;
    popcornInfo: string;
    totalAmount: string;
}

// Mẫu dữ liệu
export const sampleTicketData: TicketModel = {
    movieTitle: "JOKER: FOLIE À DEUX ĐIÊN CÓ ĐÔI (T18)",
    countdown: "05:00",
    ageRestriction: "Phim dành cho khán giả từ đủ 18 tuổi trở lên (18+)",
    cinemaName: "7Cinestar",
    cinemaAddress: "Nhà văn hóa sinh viên, Đại học Quốc gia HCM, P.Đông Hòa, Dĩ An, Bình Dương",
    showTime: "19:30 Thứ Sáu 04/10/2024",
    roomNumber: "01",
    ticketCount: 1,
    ticketType: "HSSV-Người Cao Tuổi",
    seatType: "Ghế Thường",
    seatNumber: "C11",
    popcornInfo: "6 combo có gấu",
    totalAmount: "45,000 VND"
};
