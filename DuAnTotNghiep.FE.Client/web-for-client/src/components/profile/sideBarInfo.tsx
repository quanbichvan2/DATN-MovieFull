import React from 'react';

interface SideBarInfoProps {
  onNavigate: (section: string) => void;
}

const SideBarInfo: React.FC<SideBarInfoProps> = ({ onNavigate }) => {
  return (
    <section className="col-lg-3 col-md-4 col-12">
      <div className="sidebar mb-4">
        <div className="profile-section d-flex align-items-center mb-4">
          <img
            src="/MovieTicet_Client/src/Img/user.jpg"
            alt="User Avatar"
            className="img-fluid col-4"
          />
          <div className="col-8">
            <h5>Nguyễn Thế Tân</h5>
            <a href="#">Thay đổi ảnh đại diện</a>
          </div>
        </div>

        <div className="points mb-4">
          <p>Tích điểm</p>
          <div className="progress" style={{ height: '5px' }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: '0%' }}
              aria-valuenow={0}
              aria-valuemin={0}
              aria-valuemax={10000}
            ></div>
          </div>
          <p>0/10K</p>
        </div>

        <hr />

        <nav className="nav flex-column">
          <a
            className="nav-link active"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('profile');
            }}
          >
            <i className="bi bi-person"></i> Thông tin khách hàng
          </a>
          <a
            className="nav-link"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('member');
            }}
          >
            <i className="bi bi-star"></i> Thành viên Cinestar
          </a>
          <a
            className="nav-link"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('history');
            }}
          >
            <i className="bi bi-clock-history"></i> Lịch sử mua hàng
          </a>
        </nav>

        <hr />

        <div className="logout">
          <a href="#">
            <i className="bi bi-box-arrow-right"></i> Đăng xuất
          </a>
        </div>
      </div>
    </section>
  );
};

export default SideBarInfo;
