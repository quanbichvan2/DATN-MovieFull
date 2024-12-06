import React, { useState } from 'react';
import "../../assets/css/paymentpage.prefixed.css";
import TicketInfo from '../modal/Ticketdetails';
import { sampleTicketData, TicketModel } from '../../models/Ticket';
import { Modal, Button } from 'react-bootstrap';

// Định nghĩa kiểu cho props
interface PaymentStepThreeProps {
    onPaymentSuccess: () => void; // Hàm được gọi khi thanh toán thành công
    onPaymentFail: () => void; 
    onClose: () => void; // Hàm được gọi khi modal đóng
    show: boolean; // Hiển thị trạng thái modal
}

const PaymentStepThree: React.FC<PaymentStepThreeProps> = ({ onPaymentSuccess, onClose, onPaymentFail }) => {
    const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
    const [showTicketInfo, setShowTicketInfo] = useState(false);
    const ticketData: TicketModel = sampleTicketData;

    const handlePaymentSuccess = () => {
        setShowPaymentSuccess(true); // Hiển thị thông tin vé
        onPaymentSuccess(); // Gọi hàm callback khi thanh toán thành công
    };

    const handleViewTicketInfo = () => {
        setShowTicketInfo(true);
    };
    const handlePaymentFail = () => {
        window.location.href = '/';
    };
    const handleClosePaymentSuccess = () => {
        setShowPaymentSuccess(false); // Đóng modal thanh toán thành công
        onClose(); // Gọi hàm onClose nếu cần
    };
    return (
        <>
            <div className="paymentForm-step paymentForm-step3 active" style={{ width: '100%' }}>
                {/* Các button để giả lập trạng thái thanh toán */}
                <div>
                    <h3>Chọn trạng thái thanh toán</h3>
                    <button className="paymentForm-btn" onClick={handlePaymentSuccess}>
                        Thanh toán thành công
                    </button>
                    <button className="paymentForm-btn ms-3" onClick={onPaymentFail}>
                        Thanh toán thất bại
                    </button>
                </div>
            </div>

            {/* Hiển thị thông báo thanh toán thành công */}
            <Modal show={showPaymentSuccess} onHide={handleClosePaymentSuccess} centered>
                <Modal.Header closeButton>
                    <Modal.Title className="text-dark">Thông báo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p style={{ fontSize: 20, color: '#28a745', fontWeight: 700 }}>
                        Thanh toán thành công!
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handlePaymentFail}>
                        Quay về trang chủ
                    </Button>
                    <Button variant="primary" onClick={handleViewTicketInfo}>
                        Xem thông tin vé
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Hiển thị thông tin vé trong modal nếu có */}
            <div className='mt-5 col-sm-12' style={{ width: '700px' }}>
                <TicketInfo 
                    onClose={() => setShowTicketInfo(false)} 
                    show={showTicketInfo} 
                    ticketData={ticketData} 
                />
            </div>
        </>
    );
};

export default PaymentStepThree;
