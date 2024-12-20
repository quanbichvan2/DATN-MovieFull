import "../../assets/css/authencation.prefixed.css";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { login } from "../../service/identityService"
import { register } from "../../service/identityService"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const AuthencationPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [registerData, setRegisterData] = useState({
        name: '', dateOfBirth: '', phoneNumber: '', email: '', password: '', confirmPassword: ''
    });
    const [loginErrors, setLoginErrors] = useState<{ [key: string]: string }>({});
    const [registerErrors, setRegisterErrors] = useState<{ [key: string]: string }>({});
    const navigate = useNavigate();
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    const handleLoginChange = (e: any) => {
        const { id, value } = e.target;
        setLoginData({ ...loginData, [id]: value });
    };

    const handleRegisterChange = (e: any) => {
        const { id, value } = e.target;
        setRegisterData({ ...registerData, [id]: value });
    };

    const validateLogin = () => {
        let errors: { [key: string]: string } = {};
        if (!loginData.email) {
            errors.email = "Vui lòng nhập email hoặc số điện thoại.";
        }
        if (!loginData.password) {
            errors.password = "Vui lòng nhập mật khẩu.";
        }
        setLoginErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const validateRegister = () => {
        let errors: { [key: string]: string } = {};
        if (!registerData.name) {
            errors.name = "Vui lòng nhập họ và tên.";
        } else if (/[^a-zA-Z0-9\s\u00C0-\u1EF9]/.test(registerData.name)) {
            errors.name = 'Tên món không được chứa ký tự đặc biệt!';
        }
        if (!registerData.dateOfBirth) {
            errors.dateOfBirth = "Vui lòng chọn ngày sinh.";
        }
        else {
            const selectedDate = new Date(registerData.dateOfBirth);
            const currentDate = new Date();

            // Kiểm tra nếu ngày không hợp lệ
            if (isNaN(selectedDate.getTime())) {
                errors.dateOfBirth = "Ngày sinh không hợp lệ.";
            }
            // Kiểm tra nếu ngày trong tương lai
            else if (selectedDate > currentDate) {
                errors.dateOfBirth = "Ngày sinh không được là ngày trong tương lai.";
            }
        }
        if (!registerData.phoneNumber) {
            errors.phoneNumber = "Vui lòng nhập số điện thoại.";
        } else {
            const phoneRegex = /^[0-9]{10,11}$/;
            if (!phoneRegex.test(registerData.phoneNumber)) {
                errors.phoneNumber = "Số điện thoại không hợp lệ. Vui lòng nhập 10 hoặc 11 chữ số.";
            }
        }
        if (!registerData.email) {
            errors.email = "Vui lòng nhập email.";
        } else if (!/\S+@\S+\.\S+/.test(registerData.email)) {
            errors.email = "Email không hợp lệ.";
        }
        if (!registerData.password) {
            errors.password = "Vui lòng nhập mật khẩu.";
        } else if (
            !/(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])/.test(registerData.password)
        ) {
            errors.password = "Mật khẩu phải có ít nhất 1 số, 1 chữ cái viết hoa, và 1 ký tự đặc biệt.";
        }
        if (registerData.password !== registerData.confirmPassword) {
            errors.confirmPassword = "Mật khẩu không khớp.";
        }
        setRegisterErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleLoginSubmit = async (e: any) => {
        e.preventDefault();
        if (validateLogin()) {
            try {
                const response = await login(loginData);
                console.log("Đăng nhập thành công:", response);

                if (response && response.token) {
                    localStorage.setItem("token", response.token);
                    navigate("/");
                    toast.success("Dang nhap thanh cong !");
                }
                // Xử lý đăng nhập thành công, như chuyển hướng người dùng hoặc lưu token
            } catch (error) {
                console.error("Đăng nhập thất bại:", error);
                // Xử lý lỗi đăng nhập, chẳng hạn như thông báo lỗi cho người dùng
            }
        }
    };

    const handleRegisterSubmit = async (e: any) => {
        e.preventDefault();
        if (validateRegister()) {
            try {
                const simplifiedRegisterData = {
                    email: registerData.email,
                    password: registerData.password,
                };
                await register(simplifiedRegisterData);
                console.log("Đăng ký thành công:", simplifiedRegisterData);
                toast.success("Đăng ký thành công!");
            } catch (error) {
                console.error("Đăng ký thất bại:", error);
            }

        }
    };

    return (
        <div className="AuthencationPage">
            <div className="container py-5 mt-5">
                <div className="row">
                    <div className="col-md-6 col-sm-12 action-auth">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item col-6" role="presentation">
                                <button className="nav-link active p-3 text-center" id="login-tab" data-bs-toggle="tab" data-bs-target="#login" type="button" role="tab" aria-controls="login" aria-selected="true" style={{ width: '100%' }}>
                                    Đăng nhập
                                </button>
                            </li>
                            <li className="nav-item col-6" role="presentation">
                                <button className="nav-link p-3 text-center" id="register-tab" data-bs-toggle="tab" data-bs-target="#register" type="button" role="tab" aria-controls="register" aria-selected="false" style={{ width: '100%' }}>
                                    Đăng ký
                                </button>
                            </li>
                        </ul>

                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                                <form onSubmit={handleLoginSubmit}>
                                    <div className="mx-4 pt-4">
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Tài khoản, Email hoặc số điện thoại</label>
                                            <input type="email" className="form-control" id="email" value={loginData.email} onChange={handleLoginChange} />
                                            {loginErrors.email && <span className="text-danger">{loginErrors.email}</span>}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label">Mật khẩu</label>
                                            <input type="password" className="form-control" id="password" value={loginData.password} onChange={handleLoginChange} />
                                            {loginErrors.password && <span className="text-danger">{loginErrors.password}</span>}
                                        </div>
                                        <div className="form-check mb-3">
                                            <input type="checkbox" className="form-check-input" id="rememberMe" />
                                            <label className="form-check-label" htmlFor="rememberMe">Lưu mật khẩu đăng nhập</label>
                                        </div>
                                        <button type="submit" className="btn-login btn" onClick={handleLoginSubmit}>Đăng nhập</button>
                                        <a href="ForgetPassword.html" className="d-block mt-2 pb-3 text-dark">Quên mật khẩu?</a>
                                    </div>
                                </form>
                            </div>

                            <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                                <form onSubmit={handleRegisterSubmit}>
                                    <div className="mx-4 pt-4">
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Họ và tên</label>
                                            <input type="text" className="form-control" id="name" value={registerData.name} onChange={handleRegisterChange} />
                                            {registerErrors.name && <span className="text-danger">{registerErrors.name}</span>}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="dateOfBirth" className="form-label">Ngày sinh</label>
                                            <input type="date" className="form-control" id="dateOfBirth" value={registerData.dateOfBirth} onChange={handleRegisterChange} />
                                            {registerErrors.dateOfBirth && <span className="text-danger">{registerErrors.dateOfBirth}</span>}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="phoneNumber" className="form-label">Số điện thoại</label>
                                            <input type="phone" className="form-control" id="phoneNumber" value={registerData.phoneNumber} onChange={handleRegisterChange} />
                                            {registerErrors.phoneNumber && <span className="text-danger">{registerErrors.phoneNumber}</span>}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="email" value={registerData.email} onChange={handleRegisterChange} />
                                            {registerErrors.email && <span className="text-danger">{registerErrors.email}</span>}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label">Mật khẩu</label>
                                            <input type="password" className="form-control" id="password" value={registerData.password} onChange={handleRegisterChange} />
                                            {registerErrors.password && <span className="text-danger">{registerErrors.password}</span>}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="confirmPassword" className="form-label">Nhập lại mật khẩu</label>
                                            <input type="password" className="form-control" id="confirmPassword" value={registerData.confirmPassword} onChange={handleRegisterChange} />
                                            {registerErrors.confirmPassword && <span className="text-danger">{registerErrors.confirmPassword}</span>}
                                        </div>
                                        <div className="mb-3">

                                            <div className=" bg-light">
                                                {/* <!-- Sử dụng data-bs-toggle để mở/đóng nội dung bên trong --> */}
                                                <h5 className="mb-0">
                                                    <a href="#" className="text-decoration-none text-dark d-flex align-items-center"
                                                        data-bs-toggle="collapse" data-bs-target="#privacyPolicyContent"
                                                        aria-expanded={isOpen}
                                                        onClick={(e) => { e.preventDefault(); toggleCollapse(); }}
                                                        style={{ fontSize: '15px' }}>
                                                        <span className={`me-2 rotate ${isOpen ? 'down' : ''}`}><i className="fas fa-chevron-right me-2 toggle-arrow"></i></span>
                                                        Chính sách bảo mật
                                                    </a>
                                                </h5>

                                            </div>
                                            {/* <!-- Nội dung có thể ẩn/hiện bằng Bootstrap Collapse --> */}
                                            {isOpen && (
                                                <div id="privacyPolicyContent"  >

                                                    <div className="scrollable-content mt-3 ms-2" >
                                                        <div data-content-type="text" data-appearance="default" data-element="main">
                                                            <p>CINESTAR hiểu rằng Khách Hàng quan tâm đến việc dữ liệu cá nhân của Khách Hàng sẽ được sử dụng và chia sẻ như thế nào. CINESTAR rất coi trọng sự tin tưởng của Khách Hàng, vì vậy CINESTAR sẽ sử dụng những dữ liệu mà Khách Hàng cung cấp một cách cẩn thận và hợp lý, phù hợp với quy định của pháp luật.</p>
                                                            <p><strong>1. TỔNG QUAN VỀ CHÍNH SÁCH BẢO MẬT</strong><br />&nbsp;</p><p>&nbsp;</p>
                                                            <p>Website: <a tabIndex={0} title="www.cinestar.com.vn" href="https://www.cinestar.com.vn">www.cinestar.com.vn</a> thuộc quyền sở hữu của Công ty Cổ phần Giải trí – Phát hành phim – Rạp chiếu phim Ngôi Sao (CINESTAR), địa chỉ: 135 Hai Bà Trưng, phường Bến Nghé, Quận 1, TP.HCM. Website này được quản lý điều hành bởi CINESTAR. Website này được sử dụng cho các hoạt động của CINESTAR, các chi nhánh trực thuộc, các công ty thành viên và các tổ chức liên quan (được gọi là CINESTAR trong văn bản này).</p>
                                                            <p>&nbsp;</p>
                                                            <p>CINESTAR cam kết tôn trọng quyền riêng tư và những vấn đề cá nhân của tất cả Khách Hàng trên website của CINESTAR (sau đây gọi là "Website”). CINESTAR nhận thức được tầm quan trọng của các dữ liệu cá nhân mà Khách Hàng đã cung cấp cho CINESTAR và tin rằng trách nhiệm của CINESTAR là quản lý đúng cách, bảo vệ và xử lý dữ liệu cá nhân của Khách Hàng.</p>
                                                            <p>&nbsp;</p>
                                                            <p>Chính Sách Bảo Mật Dữ Liệu Cá Nhân (sau đây gọi tắt là "Chính Sách Bảo Mật" hay "Chính Sách") được tạo ra nhằm cung cấp các thông tin tổng quát về việc CINESTAR sẽ xử lý dữ liệu cá nhân bao gồm việc: thu thập, ghi, phân tích, xác nhận, lưu trữ, chỉnh sửa, công khai, kết hợp, truy cập, truy xuất, thu hồi, mã hóa, giải mã, sao chép, chia sẻ, truyền đưa, cung cấp, chuyển giao, xóa, hủy dữ liệu cá nhân hoặc các hành động khác có liên quan mà Khách Hàng đã cung cấp cho CINESTAR khi tham gia truy cập, giao dịch trên Website của CINESTAR như thế nào, cho dù ở hiện tại hay trong tương lai; cũng như cách mà CINESTAR sẽ hỗ trợ Khách Hàng trước khi đưa ra bất cứ quyết định nào liên quan đến việc cung cấp dữ liệu cá nhân của Khách Hàng cho CINESTAR.</p>
                                                            <p>&nbsp;</p>
                                                            <p>"Dữ liệu cá nhân" là các thông tin dưới dạng ký hiệu, chữ viết, chữ số, hình ảnh, âm thanh hoặc dạng tương tự trên môi trường điện tử gắn liền với một con người cụ thể hoặc giúp xác định một con người cụ thể. Dữ liệu cá nhân bao gồm dữ liệu cá nhân cơ bản và dữ liệu cá nhân nhạy cảm. Dữ liệu cá nhân của Khách Hàng sau đây được gọi chung là “Thông Tin Khách Hàng”.</p>
                                                            <p>&nbsp;</p>
                                                            <p>Bằng cách sử dụng dịch vụ, đăng ký tài khoản với CINESTAR, ghé thăm Website của CINESTAR, hoặc truy cập vào dịch vụ, thực hiện giao dịch trên Website của CINESTAR hoặc các sản phẩm liên quan của CINESTAR và đánh dấu vào ô đồng ý với nội dung Chính Sách được hiểu là Khách Hàng</p>
                                                            <p>đã được đọc, hiểu, thừa nhận và đồng ý các yêu cầu, và/hoặc các Chính Sách, thực tiễn áp dụng nêu trong Chính Sách Bảo Mật này (kể cả các phiên bản sửa đổi, bổ sung của Chính Sách), và Khách Hàng đồng ý với CINESTAR về việc xử lý dữ liệu cá nhân của Khách Hàng theo cách được mô tả trong tài liệu này.</p>
                                                            <p>&nbsp;</p>
                                                            <p>Nếu Khách Hàng không đồng ý với Chính Sách Bảo Mật này, vui lòng không sử dụng dịch vụ của CINESTAR hoặc truy cập Website của CINESTAR. Nếu CINESTAR thay đổi Chính Sách Bảo Mật, CINESTAR sẽ cập nhật thay đổi hoặc sửa đổi đó trên Website của CINESTAR. Phiên bản sửa đổi, bổ sung Chính Sách này (nếu có) sẽ có hiệu lực kể từ ngày việc sửa đổi, bổ sung Chính Sách được đăng tải, thông báo trên Website. CINESTAR bảo lưu quyền sửa đổi Chính Sách Bảo Mật này vào bất cứ lúc nào.</p>
                                                            <p>&nbsp;</p>
                                                            <p>CINESTAR kính mong Khách Hàng vui lòng đọc Chính Sách Bảo Mật một cách cẩn thận. Nếu Khách Hàng có bất kỳ câu hỏi liên quan đến các thông tin này hoặc thực tiễn bảo mật của CINESTAR, xin vui lòng liên hệ với CINESTAR theo thông tin ở phần cuối của Chính Sách Bảo Mật này.</p>
                                                            <p>&nbsp;</p>
                                                            <p><strong>2. PHẠM VI XỬ LÝ THÔNG TIN</strong><br />&nbsp;</p>
                                                            <p>Thông tin do Khách Hàng cung cấp: CINESTAR thu thập tất cả những thông tin, dữ liệu cá nhân (“Thông Tin Khách Hàng”) mà Khách Hàng đăng tải hoặc các thao tác mà Khách Hàng thực hiện trên Website của CINESTAR.</p>
                                                            <p>&nbsp;</p>
                                                            <p>Dữ liệu cá nhân được thu thập trong phạm vi thực hiện Chính Sách này là “Dữ liệu cá nhân cơ bản” bao gồm 09 thông tin cá nhân được liệt kê sau đây:</p>
                                                            <p>&nbsp;</p>
                                                            <p>1. Họ và tên;</p>
                                                            <p>2. Ngày, tháng, năm sinh;</p>
                                                            <p>3. Giới tính</p>
                                                            <p>4. Địa chỉ cư trú;</p>
                                                            <p>5. Số điện thoại;</p>
                                                            <p>6. Số chứng minh nhân dân, số định danh cá nhân, số hộ chiếu, số giấy phép lái xe;</p>
                                                            <p>7. Thông tin về tài khoản số thanh toán của cá nhân; và</p>
                                                            <p>8. Địa chỉ email.</p>
                                                            <p>&nbsp;</p>
                                                            <p>Khách Hàng cam kết cung cấp đầy đủ, chính xác dữ liệu cá nhân khi đồng ý với Chính Sách Bảo Mật này. Trong trường hợp (các) dữ liệu được cung cấp không chính xác thì Khách Hàng tự chịu trách nhiệm đối với mọi thiệt hại phát sinh cho CINESTAR và/hoặc bên thứ ba bất kỳ và tự chịu trách nhiệm trước pháp luật.</p>
                                                            <p>&nbsp;</p>
                                                            <p>Lưu ý: Khách Hàng là người dưới 16 tuổi chỉ được đánh dấu vào ô đồng ý sau khi được sự đồng ý của cha, mẹ hoặc người giám hộ hợp pháp. Bằng việc đánh dấu vào ô đồng ý, CINESTAR được hiểu rằng Khách Hàng và người người giám hộ hợp pháp của mình đã đồng ý với Chính Sách Bảo Mật này và do đó CINESTAR được quyền miễn trừ mọi hậu quả pháp lý phát sinh (nếu có) trong trường hợp phát hiện có sự gian dối, không trung thực từ phía Khách Hàng tại mục này.</p>
                                                            <p>&nbsp;</p>
                                                            <p><strong>3. MỤC ĐÍCH XỬ LÝ THÔNG TIN</strong><br />&nbsp;</p>
                                                            <p>Mục đích thu thập, xử lý Thông Tin Khách Hàng bao gồm các hoạt động sau đây:</p>
                                                            <p>&nbsp;</p>
                                                            <p>1. Cung cấp các dịch vụ, sản phẩm theo nhu cầu của Khách Hàng;</p>
                                                            <p>2. Liên hệ xác nhận khi Khách Hàng đăng ký sử dụng dịch vụ, xác lập giao dịch trên Website;</p>
                                                            <p>3. Thực hiện việc quản lý Website, gửi thông tin cập nhật về Website, các chương trình khuyến mại, ưu đãi/tri ân tới Khách Hàng;</p>
                                                            <p>4. Bảo đảm quyền lợi của Khách Hàng khi phát hiện các hành động giả mạo, phá hoại tài khoản, lừa đảo Khách Hàng;</p>
                                                            <p>5. Liên lạc, hỗ trợ, giải quyết với Khách Hàng trong các trường hợp đặc biệt.</p>
                                                            <p>&nbsp;</p>
                                                            <p>CINESTAR chỉ sử dụng Thông Tin Khách Hàng cho các mục đích nêu trên hoặc mục đích khác (nếu có) với điều kiện đã thông báo và được sự đồng ý của Khách Hàng.</p>
                                                            <p>&nbsp;</p>
                                                            <p>Khách Hàng hiểu và đồng ý rằng CINESTAR có nghĩa vụ phải cung cấp Thông Tin Khách Hàng theo yêu cầu/quyết định của Cơ quan nhà nước có thẩm quyền và/hoặc quy định pháp luật.</p>
                                                            <p>CINESTAR sẽ được miễn trừ mọi trách nhiệm liên quan đến bảo mật thông tin trong trường hợp này.</p>
                                                            <p>&nbsp;</p>
                                                            <p>Để tránh nghi ngờ, trong quá trình giao dịch thanh toán tại Website, CINESTAR chỉ lưu giữ thông tin chi tiết về đơn hàng đã thanh toán của khách hàng, các thông tin về tài khoản ngân hàng của khách hàng sẽ không được lưu giữ.</p>
                                                            <p>&nbsp;</p>
                                                            <p><strong>4. LƯU GIỮ VÀ BẢO MẬT THÔNG TIN</strong><br />&nbsp;</p>
                                                            <p>- Thông Tin Khách Hàng, cũng như các thông tin trao đổi giữa Khách Hàng và CINESTAR, đều được lưu giữ và bảo mật bởi hệ thống của CINESTAR.</p>
                                                            <p>&nbsp;</p>
                                                            <p>- CINESTAR sẽ lưu trữ Thông Tin Khách Hàng theo quy định pháp luật hiện hành. Nếu Khách Hàng ngừng sử dụng Website, hoặc việc cho phép Khách Hàng sử dụng Website và/hoặc các dịch vụ bị chấm dứt, CINESTAR có thể tiếp tục lưu trữ, sử dụng và/hoặc tiết lộ Thông Tin Khách Hàng phù hợp với Chính Sách Bảo Mật và nghĩa vụ của CINESTAR theo quy định của pháp luật.</p>
                                                            <p>&nbsp;</p>
                                                            <p>- Khách Hàng tuyệt đối không được có bất kỳ hành vi sử dụng công cụ, chương trình để can thiệp trái phép vào hệ thống hay làm thay đổi cấu trúc dữ liệu của CINESTAR, cũng như bất kỳ hành vi nào khác nhằm phát tán, cổ vũ cho các hoạt động với mục đích can thiệp, phá hoại hay xâm nhập vào dữ liệu của hệ thống CINESTAR, cũng như các các hành vi mà pháp luật Việt Nam nghiêm cấm. Trong trường hợp CINESTAR phát hiện Khách Hàng có hành vi cố tình giả mạo, gian lận, phát tán các thông tin trái phép,… CINESTAR có quyền chuyển Thông Tin Khách Hàng theo yêu cầu của cơ quan có thẩm quyền để xử lý theo quy định pháp luật.</p>
                                                            <p>&nbsp;</p>
                                                            <p><strong>5. THỜI GIAN LƯU TRỮ THÔNG TIN</strong><br />&nbsp;</p>
                                                            <p>Thông Tin Khách Hàng sẽ được lưu trữ cho đến khi có yêu cầu hủy bỏ hoặc tự thành viên đăng nhập và thực hiện đóng tài khoản. Đối với các tài khoản đã đóng, CINESTAR vẫn lưu trữ Thông Tin Khách Hàng và truy cập của Khách Hàng để phục vụ cho mục đích phòng chống gian lận, điều tra, giải đáp thắc mắc ...</p>
                                                            <p>Các thông tin này sẽ được CINESTAR lưu trữ trong hệ thống máy chủ tối đa mười hai (12) tháng kể từ ngày Khách Hàng đóng tài khoản trên CINESTAR. Sau khi thời hạn này kết thúc, CINESTAR có thể tiến hành xóa vĩnh viễn thông tin cá nhân của Khách Hàng.</p>
                                                            <p>&nbsp;</p>
                                                            <p><strong>6. TỔ CHỨC, CÁ NHÂN ĐƯỢC XỬ LÝ THÔNG TIN</strong><br />&nbsp;</p>
                                                            <p>CINESTAR và các công ty thành viên, các chi nhánh của mình sẽ thực hiện xử lý dữ liệu thông tin cá nhân của Khách Hàng theo các mục nêu trên. CINESTAR không cung cấp Thông Tin Khách Hàng cho bất kỳ bên thứ ba nào khác trừ các trường hợp ngoại lệ không cần sự đồng ý của Khách Hàng theo quy định của pháp luật.</p>
                                                            <p>&nbsp;</p>
                                                            <p>Các tổ chức, cá nhân được liệt kê sau đây có thể được xử lý dữ liệu cá nhân sau khi được sự đồng ý của Khách Hàng:</p>
                                                            <p>&nbsp;</p>
                                                            <p>- Nhà thầu, đại lý, nhà cung cấp dịch vụ và các bên thứ ba khác mà CINESTAR sử dụng để hỗ trợ hoạt động kinh doanh của CINESTAR</p>
                                                            <p>- Các đối tác có ký kết thỏa thuận liên kết chăm sóc khách hàng với CINESTAR. Việc chia sẻ này giúp CINESTAR có thể cung cấp cho Khách Hàng các thông tin về các sản phẩm và dịch vụ, liên quan đến hàng hóa, dịch vụ và vấn đề khác mà Khách Hàng có thể quan tâm. Trong trường hợp các chi nhánh, công ty thành viên của CINESTAR và các công ty liên kết của CINESTAR được cấp quyền truy cập Thông Tin Khách Hàng, họ sẽ phải tuân thủ nghiêm ngặt các quy định được mô tả trong Chính Sách Bảo Mật này.</p>
                                                            <p>- Các bên thứ ba là đối tác, đại lý của CINESTAR: CINESTAR có thể chuyển Thông Tin Khách Hàng cho các đại lý và nhà thầu phụ để làm phân tích dữ liệu, tiếp thị, quảng cáo và hỗ trợ dịch vụ khách hàng.</p>
                                                            <p>- Các đơn vị kinh doanh khác mà CINESTAR có kế hoạch sáp nhập hoặc mua lại: Trong trường hợp này, CINESTAR sẽ yêu cầu những đơn vị đó tuân thủ nghiêm ngặt theo Chính Sách Bảo Mật này.</p>
                                                            <p>&nbsp;</p>
                                                            <p>Chính Sách Bảo Mật này không phải là một lời hứa rằng dữ liệu cá nhân của Khách Hàng sẽ không bao giờ được tiết lộ, ngoại trừ như được mô tả trong Chính Sách Bảo Mật này.</p>
                                                            <p>&nbsp;</p>
                                                            <p><strong>7. QUYỀN VÀ NGHĨA VỤ CỦA KHÁCH HÀNG</strong><br />&nbsp;</p>
                                                            <p>Trừ trường hợp pháp luật có quy định khác, quyền và nghĩa vụ của Khách Hàng đối với dữ liệu cá nhân được quy định chi tiết như sau:</p>
                                                            <p>&nbsp;</p>
                                                            <p>A. Quyền của Khách Hàng</p>
                                                            <p>1. Quyền được biết</p>
                                                            <p>Khách Hàng được biết về hoạt động xử lý dữ liệu cá nhân của mình, trừ trường hợp luật có quy định khác.</p>
                                                            <p>2. Quyền đồng ý</p>
                                                            <p>Khách Hàng được đồng ý hoặc không đồng ý cho phép xử lý dữ liệu cá nhân của mình, trừ trường hợp pháp luật cho phép CINESTAR xử lý mà không cần có sự đồng ý của Khách Hàng.</p>
                                                            <p>3. Quyền truy cập</p>
                                                            <p>Khách Hàng được truy cập để xem, chỉnh sửa hoặc yêu cầu chỉnh sửa dữ liệu cá nhân của mình, trừ trường hợp luật có quy định khác.</p>
                                                            <p>4. Quyền rút lại sự đồng ý</p>
                                                            <p>Khách Hàng được quyền rút lại sự đồng ý của mình, trừ trường hợp luật có quy định khác.</p>
                                                            <p>5. Quyền xóa dữ liệu</p>
                                                            <p>Khách Hàng được xóa hoặc yêu cầu xóa dữ liệu cá nhân của mình, trừ trường hợp luật có quy định khác.</p>
                                                            <p>6. Quyền hạn chế xử lý dữ liệu</p>
                                                            <p>a) Khách Hàng được yêu cầu hạn chế xử lý dữ liệu cá nhân của mình, trừ trường hợp luật có quy định khác;</p>
                                                            <p>b) Việc hạn chế xử lý dữ liệu được thực hiện trong 72 giờ sau khi có yêu cầu của Khách Hàng, với toàn bộ dữ liệu cá nhân mà chủ thể dữ liệu yêu cầu hạn chế, trừ trường hợp luật có quy định khác.</p>
                                                            <p>7. Quyền cung cấp dữ liệu</p>
                                                            <p>Khách Hàng được yêu cầu CINESTAR và các bên liên quan cung cấp cho bản thân dữ liệu cá nhân của mình, trừ trường hợp luật có quy định khác.</p>
                                                            <p>8. Quyền phản đối xử lý dữ liệu</p>
                                                            <p>a) Khách Hàng được phản đối CINESTAR và các bên liên quan nhằm ngăn chặn hoặc hạn chế tiết lộ dữ liệu cá nhân hoặc sử dụng cho mục đích quảng cáo, tiếp thị, trừ trường hợp luật có quy định khác;</p>
                                                            <p>b) CINESTAR và các bên liên quan thực hiện yêu cầu của Khách Hàng trong 72 giờ sau khi nhận được yêu cầu, trừ trường hợp luật có quy định khác.</p>
                                                            <p>9. Quyền khiếu nại, tố cáo, khởi kiện</p>
                                                            <p>Khách Hàng có quyền khiếu nại, tố cáo hoặc khởi kiện theo quy định của pháp luật.</p>
                                                            <p>10. Quyền yêu cầu bồi thường thiệt hại</p>
                                                            <p>Khách Hàng có quyền yêu cầu bồi thường thiệt hại theo quy định của pháp luật khi xảy ra vi phạm quy định về bảo vệ dữ liệu cá nhân của mình, trừ trường hợp các bên có thỏa thuận khác hoặc luật có quy định khác.</p>
                                                            <p>11. Quyền tự bảo vệ</p>
                                                            <p>Khách Hàng có quyền tự bảo vệ theo quy định của Bộ luật Dân sự, luật khác có liên quan, hoặc yêu cầu cơ quan, tổ chức có thẩm quyền thực hiện các phương thức bảo vệ quyền dân sự theo quy định tại Điều 11 Bộ luật Dân sự.</p>
                                                            <p>&nbsp;</p>
                                                            <p>B. Nghĩa vụ của Khách Hàng</p>
                                                            <p>1. Tự bảo vệ dữ liệu cá nhân của mình; yêu cầu các tổ chức, cá nhân khác có liên quan bảo vệ dữ liệu cá nhân của mình.</p>
                                                            <p>2. Tôn trọng, bảo vệ dữ liệu cá nhân của người khác.</p>
                                                            <p>3. Cung cấp đầy đủ, chính xác dữ liệu cá nhân khi đồng ý cho phép xử lý dữ liệu cá nhân.</p>
                                                            <p>4. Tham gia tuyên truyền, phổ biến kỹ năng bảo vệ dữ liệu cá nhân.</p>
                                                            <p>5. Thực hiện quy định của pháp luật về bảo vệ dữ liệu cá nhân và tham gia phòng, chống các hành vi vi phạm quy định về bảo vệ dữ liệu cá nhân.</p>
                                                            <p>&nbsp;</p>
                                                            <p><strong>8. THÔNG BÁO VÀ SỬA ĐỔI</strong><br />&nbsp;</p>
                                                            <p>Do CINESTAR liên tục cải thiện dịch vụ và sản phẩm để phục vụ Khách Hàng tốt hơn, nên Chính Sách Bảo Mật, Điều Kiện và Điều Khoản Giao Dịch, Quy Định Chung sẽ thường xuyên được thay đổi và cập nhật. CINESTAR có thể đăng tải trên Website hoặc có thể gửi email thông báo cho Khách Hàng về những thay đổi trong những chính sách của CINESTAR. Tuy nhiên, CINESTAR cũng khuyến khích Khách Hàng thường xuyên theo dõi trên Website để cập nhật những thay đổi trong chính sách của CINESTAR. Trừ trường hợp có văn bản với nội dung khác, Chính Sách Bảo Mật hiện tại của CINESTAR được áp dụng cho tất cả những thông tin mà CINESTAR có trong phạm vi xử lý Thông Tin Khách Hàng.</p>
                                                            <p>&nbsp;</p>
                                                            <p><strong>9. CAM KẾT CHUNG</strong><br />&nbsp;</p>
                                                            <p>Mọi thông tin cá nhân của Khách Hàng thu thập được từ Website sẽ được lưu giữ an toàn, chỉ có Khách Hàng mới có thể truy cập vào tài khoản cá nhân của mình bằng tên đăng nhập và mật khẩu do Khách Hàng chọn.</p>
                                                            <p>&nbsp;</p>
                                                            <p>CINESTAR cam kết bảo mật thông tin, không chia sẻ, tiết lộ, chuyển giao Thông Tin Khách Hàng, thông tin giao dịch trực tuyến trên Website cho bất kỳ bên thứ ba nào khi chưa được sự đồng ý của Khách Hàng, trừ các trường hợp pháp luật cho phép CINESTAR xử lý thông tin mà không cần đến sự đồng ý của Khách Hàng.</p>
                                                            <p>&nbsp;</p>
                                                            <p>CINESTAR, bằng nỗ lực tốt nhất của mình, sẽ áp dụng các giải pháp công nghệ để ngăn chặn các hành vi đánh cắp hoặc tiếp cận thông tin trái phép; sử dụng, thay đổi hoặc phá hủy thông tin trái phép. Tuy nhiên, CINESTAR không thể cam kết sẽ ngăn chặn được tất cả các hành vi xâm phạm, sử dụng thông tin cá nhân trái phép nằm ngoài khả năng kiểm soát của CINESTAR. CINESTAR sẽ không chịu trách nhiệm dưới bất kỳ hình thức nào đối với bất kỳ khiếu nại, tranh chấp hoặc thiệt hại nào phát sinh từ hoặc liên quan đến việc truy cập, xâm nhập, sử dụng thông tin trái phép như vậy.</p>
                                                            <p>&nbsp;</p>
                                                            <p>Trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến mất mát Thông Tin Khách Hàng, gây ảnh hưởng xấu đến Khách Hàng, CINESTAR sẽ ngay lập tức thông báo cho Khách Hàng và trình vụ việc cho cơ quan chức năng điều tra xử lý.</p>
                                                            <p>&nbsp;</p>
                                                            <p>Khách Hàng có nghĩa vụ bảo mật tên đăng ký, mật khẩu và hộp thư điện tử của mình. CINESTAR sẽ không chịu trách nhiệm dưới bất kỳ hình thức nào đối với các thiệt hại, tổn thất (nếu có) do Khách Hàng không tuân thủ quy định bảo mật này.</p>
                                                            <p>&nbsp;</p>
                                                            <p>Khách Hàng tuyệt đối không được có các hành vi sử dụng công cụ, chương trình để can thiệp trái phép vào hệ thống hay làm thay dổi dữ liệu của CINESTAR. Trong trường hợp CINESTAR phát hiện Khách Hàng có hành vi cố tình giả mạo, gian lận, phát tán thông tin cá nhân trái phép… CINESTAR có quyền chuyển thông tin cá nhân của Khách Hàng cho các cơ quan có thẩm quyền để xử lý theo quy định của pháp luật.</p>
                                                            <p>&nbsp;</p>
                                                            <p><strong>10. THÔNG TIN LIÊN HỆ</strong><br />&nbsp;</p>
                                                            <p>Bất kỳ lúc nào Khách Hàng có bất kỳ câu hỏi, cần hỗ trợ, cần giải thích, khiếu nại hoặc quan tâm về việc bảo mật của CINESTAR hoặc các giao dịch của Khách Hàng với CINESTAR, xin vui lòng liên hệ CINESTAR theo thông tin sau:</p>
                                                            <p>&nbsp;</p>
                                                            <p>CÔNG TY CỔ PHẦN GIẢI TRÍ PHÁT HÀNH PHIM – RẠP CHIẾU PHIM NGÔI SAO</p>
                                                            <p>Mã số thuế: 0312742744</p>
                                                            <p>Địa chỉ: 135 Hai Bà Trưng, phường Bến Nghé, Quận 1, TP.HCM</p>
                                                            <p>Hotline: 028.7300 8881</p>
                                                            <p>Email: cskh@cinestar.com.vn</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                        </div>
                                        <div className="form-check mb-3">
                                            <input type="checkbox" className="form-check-input" id="acceptTerms" />
                                            <label className="form-check-label" htmlFor="acceptTerms">Khách hàng đã đồng ý các điều khoản, điều kiện của thành viên 7Cinema</label>
                                        </div>
                                        <button type="submit" className="btn-register btn mb-4">Đăng ký</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthencationPage;
