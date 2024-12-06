import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import "../../assets/css/paymentpage.prefixed.css";
import QR from '../../assets/Img/Payment/qr.png'
interface TicketData {
    movieTitle: string;
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
}

interface TicketInfoProps {
    ticketData: TicketData;
    onClose: () => void; // Hàm để đóng modal
    show: boolean; 
}

const TicketInfo: React.FC<TicketInfoProps> = ({ ticketData,show, onClose }) => {
    return (
        <Modal show={show} onHide={onClose} centered dialogClassName="ticketInfo text-light" size='lg'>
        <Modal.Header  style={{ backgroundColor: '#36c' }} className='row'>
            <div className="row">
           <Modal.Title>{ticketData.movieTitle}</Modal.Title>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>     
            </div>
            
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#36c' }} className='row'>
            <div className="col-8" >
                <p style={{ fontSize: 16, color: '#f3ea28' }}>{ticketData.ageRestriction}</p>
            <p style={{ fontWeight: 700, fontSize: 20 }}>{ticketData.cinemaName}</p>
            <p>{ticketData.cinemaAddress}</p>
            <div className="d-flex gap-3">
                <p style={{ fontSize: 16, fontWeight: 600, color: '#f3ea28' }}>Thời gian:</p>
            <p>{ticketData.showTime}</p>
            </div>
            
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
            <div className="d-flex gap-3">
                <p style={{ fontSize: 16, fontWeight: 600, color: '#f3ea28' }}>Bắp nước:</p>
            <p>{ticketData.popcornInfo}</p>
            </div>
            
            </div>
            <div className="col-4">
                <img src={QR} alt="" style={{width:'100%'}}/>
            </div>
        </Modal.Body>
    </Modal>
    );
};

export default TicketInfo;
