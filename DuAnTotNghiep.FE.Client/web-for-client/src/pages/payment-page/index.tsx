import "../../assets/css/paymentpage.prefixed.css";
import { useState } from 'react';
import PaymentStepThree from '../../components/Payment/statusPayment';
import TicketInfo from '../../components/Payment/ticketDetails';
import { useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentPage = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const stripePromise = loadStripe('pk_test_51QMTJEGoIZvD6rjmJtwjiquJtr6MsOQSCK6n3jEXEdjnisj9FjSYDZPMr00SgACQBEkp58SErxJEFokLMmZRv72h006G8Uzsk7');

    const location = useLocation();
    const { orderData } = location.state || {}; 
    if (!orderData) {
        return <div>Không tìm thấy dữ liệu đơn hàng. Vui lòng thử lại!</div>;
    }


    const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
    const [showTicketInfo, setShowTicketInfo] = useState(true);
    const discountCodes: { Happy20K: number; Happy50K: number } = {
        Happy20K: 20000,
        Happy50K: 50000,
    };

    const [formData, setFormData] = useState<{
        fullname: string;
        phone: string;
        email: string;
        paymentMethod: string;
        discountCode: keyof typeof discountCodes | ""; // Giới hạn chỉ là khóa hợp lệ
        ageConfirmed: boolean;
        termsConfirmed: boolean;
    }>({
        fullname: "",
        phone: "",
        email: "",
        paymentMethod: "",
        discountCode: "",
        ageConfirmed: false,
        termsConfirmed: false,
    });

    const [errors, setErrors] = useState<{
        fullname: string;
        phone: string;
        email: string;
        paymentMethod: string;
    }>({
        fullname: "",
        phone: "",
        email: "",
        paymentMethod: "",
    });


    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
    const handlePaymentMethodSelect = (method: any) => {
        setSelectedPaymentMethod(method);
        setFormData({
            ...formData,
            paymentMethod: method,
        });
        setErrors({
            ...errors,
            paymentMethod: '', // Xóa lỗi khi chọn phương thức thanh toán
        });
    };


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
            newErrors.ageConfirmed = 'Vui lòng xác nhận đúng độ tuổi và đồng ý với điều khoản trước khi tiếp tục.'
        }
        if (formData.discountCode && !discountCodes[formData.discountCode]) {
            alert("Mã giảm giá không hợp lệ!");
            return;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validatePersonalInfo()) {
            if (currentStep === 1) {
                setCurrentStep(2);
            } else if (currentStep === 2 && formData.paymentMethod) {
                setCurrentStep(3);
            }
        }
    };

    const handlePaymentSuccess = async () => {
        // Kiểm tra phương thức thanh toán
        if (!formData.paymentMethod) {
            setErrors({ ...errors, paymentMethod: 'Vui lòng chọn phương thức thanh toán.' });
            return;
        }

        // Xử lý giảm giá
        let discountAmount = 0;
        if (formData.discountCode && discountCodes[formData.discountCode]) {
            discountAmount = discountCodes[formData.discountCode];
        }

        const originalAmount = parseInt(orderData.totalAmount.replace(/\D/g, ""), 10);
        const finalAmount = Math.max(originalAmount - discountAmount, 0);

        // Kiểm tra nếu thanh toán qua Stripe
        if (formData.paymentMethod === "stripe") {
            if (!stripe || !elements) {
                setErrorMessage("Stripe chưa được khởi tạo.");
                return;
            }

            setIsProcessing(true);
            const cardElement = elements.getElement(CardElement);

            try {
                const clientSecret = "sk_test_51QMTJEGoIZvD6rjmqIYSdel9VsajwLQGmpMKNKUr1Jn3iQhPIqIUJzTJUKNcb4V0PlKCJZNHsjpGuylweTYP8cJi00wj6vFfDj"; // Thay thế bằng secret từ server
                const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
                    payment_method: {
                        card: cardElement!,
                    },
                });

                if (error) {
                    setErrorMessage(error.message || "Lỗi thanh toán.");
                    setIsProcessing(false);
                    return;
                }

                if (paymentIntent?.status === "succeeded") {
                    setPaymentSuccess(true);
                    setCurrentStep(3); // Đi đến bước hoàn thành
                }
            } catch (error) {
                setErrorMessage("Đã xảy ra lỗi, vui lòng thử lại sau.");
            } finally {
                setIsProcessing(false);
            }
        } else {
            // Xử lý các phương thức thanh toán khác
            setShowTicketInfo(false);
            setCurrentStep(3);
        }
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
                                        <label
                                            className={`payment-option ${selectedPaymentMethod === 'credit-card' ? 'active' : ''}`}
                                            htmlFor="credit-card"
                                            onClick={() => handlePaymentMethodSelect('credit-card')}
                                        >
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                value="credit-card"
                                                id="credit-card"
                                                checked={selectedPaymentMethod === 'credit-card'}
                                                onChange={() => { }}
                                            />
                                            <img src="https://cdn-icons-png.flaticon.com/512/6963/6963703.png" alt="Credit Card" />
                                            Thẻ tín dụng
                                        </label>

                                        <label
                                            className={`payment-option ${selectedPaymentMethod === 'Vnpay' ? 'active' : ''}`}
                                            htmlFor="Vnpay"
                                            onClick={() => handlePaymentMethodSelect('Vnpay')}
                                        >
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                value="Vnpay"
                                                id="Vnpay"
                                                checked={selectedPaymentMethod === 'Vnpay'}
                                                onChange={() => { }}
                                            />
                                            <img src="https://vinadesign.vn/uploads/images/2023/05/vnpay-logo-vinadesign-25-12-57-55.jpg" alt="Vnpay" />
                                            VNPAY
                                        </label>

                                        <label
                                            className={`payment-option ${selectedPaymentMethod === 'cashPay' ? 'active' : ''}`}
                                            htmlFor="cashPay"
                                            onClick={() => handlePaymentMethodSelect('cashPay')}
                                        >
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                value="cashPay"
                                                id="cashPay"
                                                checked={selectedPaymentMethod === 'cashPay'}
                                                onChange={() => { }}
                                            />
                                            <img src="https://cdn-icons-png.flaticon.com/512/2460/2460470.png" alt="cashPay" />
                                            Thanh Toán Trực Tiếp
                                        </label>
                                    </div>
                                    {errors.paymentMethod && <span className="text-danger">{errors.paymentMethod}</span>}
                                </div>
                                {selectedPaymentMethod === 'credit-card' && (
                                    <Elements stripe={stripePromise}>
                                        <form
                                            className="paymentForm-step active"
                                            onSubmit={handlePaymentSuccess}
                                        >
                                            <div>
                                                <label htmlFor="card-element">Thông tin thẻ</label>
                                                <CardElement id="card-element" />
                                            </div>
                                            <button type="submit" disabled={isProcessing}>
                                                {isProcessing ? 'Đang xử lý...' : 'Thanh toán'}
                                            </button>
                                            {errorMessage && (
                                                <p className="text-danger">{errorMessage}</p>
                                            )}
                                        </form>
                                    </Elements>
                                )}

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
                                    {formData.discountCode && discountCodes[formData.discountCode] && (
                                        <span className="text-success" style={{ fontSize: '1.5rem' }}>
                                            Mã giảm giá hợp lệ! Bạn được giảm {discountCodes[formData.discountCode].toLocaleString('vi-VN')} VND.
                                        </span>
                                    )}
                                    {formData.discountCode && !discountCodes[formData.discountCode] && (
                                        <span className="text-danger" style={{ fontSize: '1.5rem' }}>Mã giảm giá không hợp lệ.</span>
                                    )}
                                </div>

                                <button type="button" className="paymentForm-btn" onClick={handlePaymentSuccess}>
                                    Thanh toán
                                </button>
                            </div>
                        )}
                        {/* Bước 3: Thanh toán thành công */}
                        {currentStep === 3 && (
                            <div className="paymentForm-step paymentForm-step3 active">
                                <PaymentStepThree show={showPaymentSuccess} onPaymentSuccess={handlePaymentSuccess} onClose={handleCloseModal} onPaymentFail={handlePaymentFail} />
                            </div>
                        )}
                    </div>
                    {/* Phần thông tin vé */}
                    {showTicketInfo && <TicketInfo ticketData={orderData} />}
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
