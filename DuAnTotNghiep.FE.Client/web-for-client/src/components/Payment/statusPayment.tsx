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
    const [showPaymentFail, setShowPaymentFail] = useState(false);
    const [showTicketInfo, setShowTicketInfo] = useState(false);
    const ticketData: TicketModel = sampleTicketData;

    const handlePaymentSuccess = () => {
        setShowPaymentSuccess(true); // Hiển thị thông tin vé
        onPaymentSuccess(); // Gọi hàm callback khi thanh toán thành công
        setShowPaymentFail(false); // Đảm bảo không hiển thị thông báo thất bại
    };

    const handlePaymentFail = () => {
        setShowPaymentFail(true); // Hiển thị thông báo thanh toán thất bại
        setShowPaymentSuccess(false); // Đảm bảo không hiển thị thông báo thành công
        // window.location.href = '/'; // Quay lại trang chủ
    };

    const handleViewTicketInfo = () => {
        setShowTicketInfo(true);
    };
    const handleClosePaymentSuccess = () => {
        setShowPaymentSuccess(false); // Đóng modal thanh toán thành công
        onClose(); // Gọi hàm onClose nếu cần
    };
    const handleClosePaymentFail = () => {
        setShowPaymentFail(false); // Đóng modal thanh toán thành công
        onClose(); // Gọi hàm onClose nếu cần
    };
    return (
        <>
            <div className="paymentForm-step paymentForm-step3 active" style={{ width: '100%' , marginBottom:'1rem'}}>
                <div>
                    <h3>Chọn trạng thái thanh toán</h3>
                    <button className="paymentForm-btn" onClick={handlePaymentSuccess}>
                        Thanh toán thành công
                    </button>
                    <button className="paymentForm-btn ms-3" onClick={handlePaymentFail}>
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

            <Modal show={showPaymentFail} onHide={handleClosePaymentFail} centered>
                <Modal.Header closeButton>
                    <Modal.Title className="text-dark">
                        <i className="bi bi-x-circle-fill text-danger" style={{ fontSize: '1.5rem' }}></i> Thông báo
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <p style={{ fontSize: '1.25rem', color: '#ff4545', fontWeight: 600 }}>
                        <strong style={{ fontSize: '2rem', textTransform: 'uppercase' }}>Thanh toán Thất Bại!</strong>
                        <br />
                        <span style={{ fontSize: '1.1rem', fontWeight: 500 }}>
                            Có lỗi xảy ra trong quá trình thanh toán. Vui lòng thử lại.
                        </span>
                    </p>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <Button variant="danger" onClick={handlePaymentFail} style={{ padding: '10px 20px', fontWeight: 'bold' }}>
                        Quay về trang chủ
                    </Button>
                </Modal.Footer>
            </Modal>


            {/* Hiển thị thông báo thanh toán thất bại ngay lập tức */}
            {showPaymentFail && (
                <div className="alert alert-danger" role="alert">
                    <strong>Thanh toán thất bại!</strong> 
                    <br />
                    Có lỗi xảy ra trong quá trình thanh toán. Vui lòng thử lại.
                </div>
            )}

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
