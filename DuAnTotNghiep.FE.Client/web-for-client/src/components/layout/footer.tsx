import logo from '../../assets/Img/logo.jpg'; import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <>
      {/* Footer cho Desktop */}
      <footer className="footer">
        <div className="footer-section">
          <div className="row">
            <div className="col-md-6 footer-col">
              <div className="row">
                <div className="col-md-1" />
                <div className="col-md-3">
                  <h4 className="footer-heading">Xem phim</h4>
                  <ul className="footer-list">
                    <li><Link to="/lich-chieu">Lịch Chiếu</Link></li>
                    <li><Link to="/phim-dang-chieu">Phim đang chiếu</Link></li>
                    <li><Link to="/phim-sap-chieu">Phim sắp chiếu</Link></li>
                    <li><Link to="/suat-chieu-dac-biet">Suất chiếu đặc biệt</Link></li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <div className="col-md-12">
                    <h4 className="footer-heading">Tài Khoản</h4>
                    <ul className="footer-list">
                      <li><Link to="/dang-nhap">Đăng Nhập</Link></li>
                      <li><Link to="/dang-ky">Đăng Ký</Link></li>
                      <li><Link to="/membership">Membership</Link></li>
                    </ul>
                  </div>
                  <div className="col-md-12" style={{ marginTop: "24px" }}>
                    <h4 className="footer-heading">Dịch vụ</h4>
                    <ul className="footer-list">
                      <li><Link to="/thue-rap">Thuê rạp</Link></li>
                      <li><Link to="/khuyen-mai">Khuyến Mãi</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <h4 className="footer-heading">7 Cinema</h4>
                  <ul className="footer-list">
                    <li><Link to="/lich-chieu">Lịch Chiếu</Link></li>
                    <li><Link to="/phim-dang-chieu">Phim đang chiếu</Link></li>
                    <li><Link to="/phim-sap-chieu">Phim sắp chiếu</Link></li>
                    <li><Link to="/suat-chieu-dac-biet">Suất chiếu đặc biệt</Link></li>
                  </ul>
                </div>
              </div>
              <div className="footer-hotline d-flex justify-content-center align-items-center">
                <i className="fas fa-phone-alt" />
                <span>Hotline: 123456789</span>
              </div>
            </div>
            <div className="col-md-6 footer-logo">
              <div className="row d-flex align-items-center">
                <div className="col-md-9">
                  <h6 className="text-center">7CINEMA-ENTERTAINMENT & CINEMA</h6>
                </div>
                <div className="col-md-3 d-flex justify-content-center align-items-center">
                  <img
                    src={logo}
                    alt="Cinema Logo"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="footer-company-info">
                <p>
                  Giấy Chứng nhận đăng ký doanh nghiệp: 0303675393 đăng ký lần đầu ngày 31/7/2030, được
                  cấp bởi Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh. Địa chỉ: Lầu 2, số 7/28, Đường Thành Thái, Phường 14, Quận 10, Thành phố Hồ Chí Minh, Việt Nam
                </p>
                <p>COPYRIGHT 2017 CJ CGV VIETNAM CO., LTD. ALL RIGHTS RESERVED</p>
              </div>
              <div className="footer-social-icons d-flex justify-content-end">
                <a href="#"><i className="fab fa-facebook" /></a>
                <a href="#"><i className="fab fa-instagram" /></a>
                <a href="#"><i className="fab fa-telegram" /></a>
                <a href="#"><i className="fab fa-twitter" /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer cho Mobile */}
      <footer className="footer mobile-footer" style={{ background: "linear-gradient(106deg, #639, #36c 102.69%)" }}>
        <div className="mobile-footer-logo text-center d-flex align-items-center justify-content-center">
          <img
         
            alt="Cinema Logo"
            className="img-fluid"
          />
        </div>
        <div className="footer-navigation text-center">
          <ul className="footer-list">
            <li><Link to="/design">Xem phim</Link></li>
            <li><Link to="/explore">Tài Khoản</Link></li>
            <li><Link to="/features">Dịch vụ</Link></li>
          </ul>
        </div>
        <div className="footer-social-icons text-center">
          <a href="#"><i className="fab fa-facebook" /></a>
          <a href="#"><i className="fab fa-instagram" /></a>
          <a href="#"><i className="fab fa-telegram" /></a>
          <a className='twitter' href="#"><i className="fab fa-twitter" /></a>
        </div>
        <div className="footer-company-info text-center">
          <p>COPYRIGHT 2017 CJ CGV VIETNAM CO., LTD. ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
