import React, { useState } from 'react';
import { Order } from './order';
import OrderDetailModal from './modalSectionHistory'; // Import thành phần OrderDetailModal

interface ProfileSectionFormProps {
  section: string;
}

const ProfileSectionForm: React.FC<ProfileSectionFormProps> = ({ section }) => {
  // State cho phần thông tin cá nhân
  // State for profile section
  const [fullName, setFullName] = useState<string>('Nguyễn Thế Tân');
  const [dob, setDob] = useState<string>('2023-08-17');
  const [phone, setPhone] = useState<string>('0325567615');
  const [email, setEmail] = useState<string>('thetanad315@gmail.com');

  // State cho phần mật khẩu
  // State for password section
  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  // Trạng thái validation
  // Validation state
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Dữ liệu đơn hàng mẫu cho phần lịch sử
  // Sample order data for history section
  const orders: Order[] = [
    {
      id: 1,
      date: '19/08/2024',
      activity: 'Mua vé',
      total: 195000,
      points: 195,
      movieTitle: 'DEADPOOL VÀ WOLVERINE 2D (T18)',
      time: '22:30 30/07/2024',
      hall: '01',
      tickets: 3,
      comboFood: 'Bắp corn vị phô mai + Coca',
      seats: 'D13, D14, D12',
    },
    {
      id: 2,
      date: '19/08/2024',
      activity: 'Mua vé',
      total: 250000,
      points: 250,
      movieTitle: 'PHIM KHÁC',
      time: '20:00 29/08/2024',
      hall: '02',
      tickets: 2,
      comboFood: 'Bắp corn vị chocolate + Pespi vị chanh không ca lo',
      seats: 'A1, A2',
    },
  ];

  // State để quản lý sự hiển thị của modal và đơn hàng được chọn
  // State for managing modal visibility and selected order
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null); // Sử dụng kiểu Order hoặc null  

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Validate các trường thông tin cá nhân
    // Validate profile section inputs
    const formErrors: { [key: string]: string } = {};
    
    if (!fullName.trim()) {
      formErrors.fullName = 'Họ và tên không được để trống';
    }

    if (!dob) {
      formErrors.dob = 'Ngày sinh không được để trống';
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phone.match(phoneRegex)) {
      formErrors.phone = 'Số điện thoại phải bao gồm 10 chữ số';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      formErrors.email = 'Email không hợp lệ';
    }

    // Validate phần mật khẩu
    // Validate password section
    if (oldPassword && (!newPassword || !confirmPassword)) {
      formErrors.newPassword = 'Mật khẩu mới và xác nhận mật khẩu không được để trống';
    }

    if (newPassword !== confirmPassword) {
      formErrors.confirmPassword = 'Mật khẩu mới và xác nhận mật khẩu không khớp';
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // Submit form (không có lỗi)
      // Submit the form (no errors)
      setErrors({});
      // Xử lý logic khi nộp form ở đây
      console.log('Form nộp thành công');
      // Handle form submission logic here
      console.log('Form submitted successfully');
    }
  };

  const handleOrderDetailClick = (order: Order) => {
    setSelectedOrder(order);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedOrder(null);
  };

  return (
    <div className="sectionForm col-lg-9 col-md-8 col-12">
      {/* Phần Thông tin cá nhân */}
      {/* Profile Section */}
      {section === 'profile' && (
        <section id="profileSection">
          <div className="content">
            <h2>Thông tin khách hàng</h2>
            <div className="card mb-4">
              <div className="card-body">
                <h4>Thông tin cá nhân</h4>
                <form onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="fullName" className="form-label">Họ và tên</label>
                      <input
                        type="text"
                        className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                      {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="dob" className="form-label">Ngày / Tháng / Năm sinh</label>
                      <input
                        type="date"
                        className={`form-control ${errors.dob ? 'is-invalid' : ''}`}
                        id="dob"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                      />
                      {errors.dob && <div className="invalid-feedback">{errors.dob}</div>}
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label">Số điện thoại</label>
                      <input
                        type="text"
                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">Cập nhật</button>
                </form>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h4>Đổi mật khẩu</h4>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="oldPassword" className="form-label">Mật khẩu cũ</label>
                    <input
                      type="password"
                      className="form-control"
                      id="oldPassword"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="newPassword" className="form-label">Mật khẩu mới</label>
                    <input
                      type="password"
                      className={`form-control ${errors.newPassword ? 'is-invalid' : ''}`}
                      id="newPassword"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                    {errors.newPassword && <div className="invalid-feedback">{errors.newPassword}</div>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Xác nhận mật khẩu</label>
                    <input
                      type="password"
                      className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                  </div>
                  <button type="submit" className="btn btn-primary">Đổi mật khẩu</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Phần Thành viên */}
      {/* Member Section */}
      {section === 'member' && (
        <section id="memberSection">
          <div className="point-content">
            <h2>Thành viên Cinestar</h2>
            <div className="points mb-4">
              <p>Tích điểm</p>
              <div className="progress" style={{ height: '5px' }}>
                <div className="progress-bar" role="progressbar" style={{ width: '0%' }}></div>
              </div>
              <p>0/10K</p>
            </div>
            <div className="align-items-center">
              <img src="https://cinestar.com.vn/assets/images/img-card-member2.jpg" alt="Member" />
                  <p>
                                    C’FRIEND <br/>
                                    Được cấp lần đầu khi mua 2 vé xem phim bất kỳ tại Cinestar.<br/>
                                    Được tích lũy điểm theo giá trị mua hàng hóa dịch vụ như sau:<br/>
                                    Được giảm 10% trực tiếp trên giá trị hóa đơn bắp nước khi mua tại quầy.<br/>
                                    Được tặng 1 vé xem phim 2D vào tuần sinh nhật (tính từ Thứ Hai đến Chủ Nhật) với số điểm tích lũy tối thiểu 500 điểm.<br/>
                                    Được tham gia các chương trình dành cho thành viên.<br/>
                                </p> <br/> 
              <div className="align-items-center text-center">
              <img className='h-auto' src="https://cinestar.com.vn/_next/image/?url=%2Fassets%2Fimages%2FLoyalty_Program.webp&w=2048&q=75" alt="Member" />
              <button type="submit" className="btn btn-primary" style={{ alignItems: 'center' }}>Tham gia thành viên ngay</button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Phần Lịch sử */}
      {/* History Section */}
      {section === 'history' && (
        <section id="historySection">
          <div className="point-content">
            <h2>Lịch sử mua hàng</h2>
            <div className="table-wrapper">
              <table className="table table-bordered text-white">
                <thead>
                  <tr>
                    <th>Mã Đơn</th>
                    <th>Ngày đặt</th>
                    <th>Hoạt động</th>
                    <th>Tổng cộng</th>
                    <th>Tích điểm</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.date}</td>
                      <td>{order.activity}</td>
                      <td>{order.total.toLocaleString('vi-VN')} đ</td>
                      <td>{order.points}</td>
                      <td>
                        <button
                          className="detail-link"
                          onClick={() => handleOrderDetailClick(order)}
                        >
                          Chi tiết
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Modal Chi tiết Đơn hàng */}
      {/* Order Detail Modal */}
      <OrderDetailModal show={isModalVisible} onClose={handleCloseModal} order={selectedOrder} />
    </div>
  );
};

export default ProfileSectionForm;

