import "../../assets/css/paymentpage.prefixed.css";
import { useState } from 'react';
import PaymentStepThree from '../../components/Payment/statusPayment';
import TicketInfo from '../../components/Payment/ticketDetails';

const PaymentPage = () => {
    const ticketData = {
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
    const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [showTicketInfo, setShowTicketInfo] = useState(true);
    const [formData, setFormData] = useState({
        fullname: '',
        phone: '',
        email: '',
        paymentMethod: '',
        discountCode: '',
        ageConfirmed: false,
        termsConfirmed: false
    });
    const [errors, setErrors] = useState({
        fullname: '',
        phone: '',
        email: '',
        paymentMethod: '',
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: '', // Clear error message on change
        });
    };
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
    setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
    });
    };
    const validatePersonalInfo = () => {
        const newErrors: any = {};
        if (!formData.fullname) {
            newErrors.fullname = 'Vui lòng nhập họ và tên.';
        }
        if (!formData.phone) {
            newErrors.phone = 'Vui lòng nhập số điện thoại.';
        } else if (!/^\d{10,11}$/.test(formData.phone)) {
            newErrors.phone = 'Số điện thoại không hợp lệ.';
        }
        if (!formData.email) {
            newErrors.email = 'Vui lòng nhập email.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email không hợp lệ.';
        }
        if (!formData.ageConfirmed || !formData.termsConfirmed) {
            newErrors.ageConfirmed ='Vui lòng xác nhận đúng độ tuổi và đồng ý với điều khoản trước khi tiếp tục.'
            
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validatePersonalInfo()) {
            setCurrentStep(2);
        }
    };

    const handlePaymentSuccess = () => {
        if (!formData.paymentMethod) {
            setErrors({ ...errors, paymentMethod: 'Vui lòng chọn phương thức thanh toán.' });
            return;
        }
        setShowTicketInfo(false);
        setCurrentStep(3);
    };

    const handlePaymentFail = () => {
        window.location.href = '/';
    };
    const handleCloseModal = () => {
        setShowPaymentSuccess(false);
    };
    return (
        <div className="paymentPage">
            <div className="container-payment text-light">
                <div className="payment-container">
                    <div className="payment-form">
                        {/* Bước 1: Thông tin cá nhân */}
                        {currentStep === 1 && (
                            <div className="paymentForm-step paymentForm-step1 active">
                                <div className="payment-process d-flex">
                                    <ul className="process d-flex text-uppercase" style={{ paddingLeft: 0 }}>
                                        <li className="process-item process-cus active-text">
                                            <p className="link">
                                                <span className="num">1 </span>
                                                <span className="txt">Thông tin khách hàng</span>
                                            </p>
                                        </li>
                                        <li className="process-item process-cus">
                                            <p className="link"><span className="num">2</span><span className="txt">Thanh toán</span></p>
                                        </li>
                                        <li className="process-item process-cus">
                                            <p className="link"><span className="num">3</span><span className="txt">Thông tin vé phim</span></p>
                                        </li>
                                    </ul>
                                </div>
                                <form id="paymentForm-personalInfo">
                                    <div className="paymentForm-group">
                                        <label htmlFor="fullname">Họ và tên <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="text"
                                            placeholder="Họ và Tên"
                                            id="paymentForm-fullname"
                                            className="paymentForm-input"
                                            name="fullname"
                                            value={formData.fullname}
                                            onChange={handleChange}
                                        />
                                        {errors.fullname && <span className="text-danger">{errors.fullname}</span>}
                                    </div>
                                    <div className="paymentForm-group">
                                        <label htmlFor="phone">Số điện thoại <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="tel"
                                            placeholder="Số điện thoại"
                                            id="paymentForm-phone"
                                            className="paymentForm-input"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                        {errors.phone && <span className="text-danger">{errors.phone}</span>}
                                    </div>
                                    <div className="paymentForm-group">
                                        <label htmlFor="email">Email <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            id="paymentForm-email"
                                            className="paymentForm-input"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        {errors.email && <span className="text-danger">{errors.email}</span>}
                                    </div>
                                    <div className="paymentForm-group checkbox d-flex">
                                        <input 
                                        className="paymentForm-checkbox" 
                                        type="checkbox" 
                                        id="age-confirmation"
                                        name="ageConfirmed" 
                                        checked={formData.ageConfirmed}
                                        onChange={handleCheckboxChange} 
                                        required />
                                        <label className="paymentForm-label" htmlFor="age-confirmation">
                                            Đảm bảo mua vé đúng số tuổi quy định.
                                        </label>
                                    </div>
                                    <div className="paymentForm-group checkbox d-flex">
                                        <input className="paymentForm-checkbox" 
                                        type="checkbox" 
                                        id="terms-confirmation"
                                        name="termsConfirmed"
                                        checked={formData.termsConfirmed}
                                        onChange={handleCheckboxChange} 
                                        required />
                                        
                                        <label className="paymentForm-label" htmlFor="terms-confirmation">
                                            Đồng ý với <a href="#" style={{ textDecorationLine: 'underline' }}>Điều khoản của 7Cinema</a>.
                                            
                                        </label>
                                        <div className="row ms-3">
                                            {/* {errors.ageConfirmed && <span className="text-danger">{errors.ageConfirmed}</span>} */}
                                        </div>
                                        
                                           
                                       
                                    </div>
                                    <button type="button" className="paymentForm-btn" onClick={handleNext}>
                                        Tiếp tục
                                    </button>
                                </form>
                            </div>
                        )}

                        {/* Bước 2: Phương thức thanh toán */}
                        {currentStep === 2 && (
                            <div className="paymentForm-step paymentForm-step2 active">
                                <div className="payment-process d-flex">
                                    <ul className="process d-flex text-uppercase" style={{ paddingLeft: 0 }}>
                                        <li className="process-item process-cus active-text">
                                            <p className="link">
                                                <span className="num">1 </span>
                                                <span className="txt">Thông tin khách hàng</span>
                                            </p>
                                        </li>
                                        <li className="process-item process-cus active-text">
                                            <p className="link"><span className="num">2</span><span className="txt">Thanh toán</span></p>
                                        </li>
                                        <li className="process-item process-cus">
                                            <p className="link"><span className="num">3</span><span className="txt">Thông tin vé phim</span></p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="paymentForm-group paymentForm-options">
                                    <div className="payment-options">
                                        <label className="payment-option" htmlFor="credit-card">
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                value="credit-card"
                                                id="credit-card"
                                                onChange={handleChange}
                                            />
                                            <img src="src/Img/Payment/img-card.png" alt="Credit Card" />
                                            Thẻ tín dụng
                                        </label>
                                        <label className="payment-option" htmlFor="Vnpay">
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                value="Vnpay"
                                                id="Vnpay"
                                                onChange={handleChange}
                                            />
                                            <img src="src/Img/Payment/Icon VNPAY-QR.png" alt="Vnpay" />
                                            Vn pay
                                        </label>
                                        <label className="payment-option" htmlFor="momo">
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                value="momo"
                                                id="momo"
                                                onChange={handleChange}
                                            />
                                            <img src="src/Img/Payment/img-momo.png" alt="MoMo" />
                                            Ví momo
                                        </label>
                                    </div>
                                    {errors.paymentMethod && <span className="text-danger">{errors.paymentMethod}</span>}
                                </div>
                                <div className="paymentForm-group">
                                    <label htmlFor="discount-code">Mã giảm giá</label>
                                    <input
                                        type="text"
                                        id="paymentForm-discountCode"
                                        className="paymentForm-input"
                                        name="discountCode"
                                        value={formData.discountCode}
                                        onChange={handleChange}
                                    />
                                </div>
                                <button type="button" className="paymentForm-btn" onClick={handlePaymentSuccess}>
                                    Thanh toán
                                </button>
                            </div>
                        )}

                        {/* Bước 3: Thanh toán thành công */}
                        {currentStep === 3 && (
                            <div className="paymentForm-step paymentForm-step3 active">
                                <PaymentStepThree show={showPaymentSuccess}  onPaymentSuccess={handlePaymentSuccess} onClose={handleCloseModal} onPaymentFail={handlePaymentFail} />
                            </div>
                        )}
                    </div>

                    {/* Phần thông tin vé */}
                    {showTicketInfo && <TicketInfo ticketData={ticketData}/>}
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
