import React, { useState } from 'react';
import "../../assets/css/authencation.prefixed.css";

const ForgetPassword: React.FC = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setError(''); // Xóa lỗi khi người dùng nhập lại
    };

    const validateEmail = (email: string) => {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            setError('Vui lòng nhập địa chỉ email.');
            return;
        }

        if (!validateEmail(email)) {
            setError('Email không hợp lệ. Vui lòng nhập đúng định dạng.');
            return;
        }

        // Logic gửi mã xác minh
        console.log('Email:', email);
    };

    return (
        <div className="AuthencationPage">
            <div className="container py-5" style={{ height: '700px' }}>
                <div className="Forget-Password text-center">
                    <h1>QUÊN MẬT KHẨU</h1>
                    <p>Nhập địa chỉ email của bạn và chúng tôi sẽ gửi cho bạn hướng dẫn để tạo mật khẩu mới</p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control"
                                id="registerEmail"
                                placeholder="Nhập Email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            {error && <span className="text-danger">{error}</span>}
                        </div>
                        <button type="submit" className="btn-login btn">
                            GỬI MÃ XÁC MINH
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;
