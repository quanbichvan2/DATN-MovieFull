// TicketInfo.tsx
import React from 'react';

interface TicketData {
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

interface TicketInfoProps {
    ticketData: TicketData;
}

const TicketInfo: React.FC<TicketInfoProps> = ({ ticketData }) => {
    return (
        <div className="ticketInfo">
            <div className="ticketInfo-title d-flex justify-content-between">
                <p style={{ fontWeight: 900 }}>{ticketData.movieTitle}</p>
                <span style={{ marginTop: 12 }}>
                    Thời gian giữ vé: <span style={{ backgroundColor: '#f3ea28', color: 'black', borderRadius: 8, padding: 8 }} id="countdown">{ticketData.countdown}</span>
                </span>
            </div>
            <p style={{ fontSize: 16, color: '#f3ea28' }}>{ticketData.ageRestriction}</p>
            <p style={{ fontWeight: 700, fontSize: 20 }}>{ticketData.cinemaName}</p>
            <p>{ticketData.cinemaAddress}</p>
            <p style={{ fontSize: 16, fontWeight: 600, color: '#f3ea28' }}>Thời gian:</p>
            <p>{ticketData.showTime}</p>
            <div className="d-flex gap-3">
                <p style={{ fontSize: 16, fontWeight: 600, color: '#f3ea28' }}>Phòng chiếu:</p>
                <p>{ticketData.roomNumber}</p>
                <p style={{ fontSize: 16, fontWeight: 600, color: '#f3ea28' }}>Số vé:</p>
                <p>{ticketData.ticketCount}</p>
                <p style={{ fontSize: 16, fontWeight: 600, color: '#f3ea28' }}>Loại vé:</p>
                <p>{ticketData.ticketType}</p>
            </div>
            <div className="d-flex gap-3">
                <p style={{ fontSize: 16, fontWeight: 600, color: '#f3ea28' }}>Loại ghế:</p>
                <p>{ticketData.seatType}</p>
                <p style={{ fontSize: 16, fontWeight: 600, color: '#f3ea28' }}>Số ghế:</p>
                <p>{ticketData.seatNumber}</p>
            </div>

            <p style={{ fontSize: 16, fontWeight: 600, color: '#f3ea28' }}>Bắp nước:</p>
            <p>{ticketData.popcornInfo}</p>
            <div className="form-footer d-flex justify-content-between" style={{ borderTop: '.2rem dashed #f8fafc', paddingTop: 12 }}>
                <p style={{ fontSize: 26, fontWeight: 700, color: '#f3ea28' }}>Số tiền cần thanh toán:</p>
                <p style={{ fontSize: 26, fontWeight: 700 }}>{ticketData.totalAmount}</p>
            </div>
        </div>
    );
};

export default TicketInfo;
