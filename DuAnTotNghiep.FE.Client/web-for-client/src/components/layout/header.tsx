import logo from '../../assets/Img/logo.jpg';
import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { Button, Modal } from 'react-bootstrap';
const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const [userAvatar, setUserAvatar] = useState<string | null>(null);
  useEffect(() => {
    // Kiểm tra xem token có tồn tại trong local storage không
    const token = localStorage.getItem("token");
    const avatar = localStorage.getItem("userAvatar");
    if (token) {
      setIsLoggedIn(true);
    }

    if (token && avatar) {
      setIsLoggedIn(true);
      setUserAvatar(avatar);
  }
  }, []);
  const handleLogout = () => {
   
     // Xóa dữ liệu trong localStorage khi đăng xuất
     localStorage.removeItem("token");
     localStorage.removeItem("userAvatar");
     setIsLoggedIn(false);
     setUserAvatar(null);
     toast.success("Đăng xuất thành công!");
     navigate("/");
    // Chuyển hướng hoặc thực hiện các hành động cần thiết
};
  return (
    <>
    <header className="header sticky-header">
      <div className="header-container container-fluid d-flex justify-content-between align-items-center">
        <div className="header-logo d-flex align-items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Cinema Logo"
              className="img-fluid header-logo-img me-3"
              loading="lazy"
            />
          </Link>
          <Link to="/schedule-movie" className="btn btn-outline-warning d-none d-md-inline header-booking-btn">
            Đặt Vé Ngay
          </Link>
          <Link to="/schedule-movie" className="d-inline d-md-none header-booking-icon" style={{ fontSize: "36px" }}>
            <i className="fa-solid fa-ticket" />
          </Link>
        </div>
        <nav className="header-nav d-none d-md-block">
          <ul className="header-nav-list list-unstyled d-flex mb-0">
            <li className="ms-3">
              <Link to="/schedule-movie" state={{ type: 'current' }}>Lịch Chiếu</Link>
            </li>
            <li className="ms-3">
              <Link to="/movie-list" state={{ type: 'current' }}>Phim Chiếu</Link>
            </li>
            <li className="ms-3">
              <Link to="/rule">Thông Tin</Link>
            </li>
            <li className="ms-3">
              <Link to="/promotion">Khuyến Mãi</Link>
            </li>
            <li className="ms-3">
              <Link to="/aboutUs">Liên Hệ</Link>
            </li>
          </ul>
        </nav>
        <div className="header-actions d-flex align-items-center">
          <form className="header-search-form d-none d-md-flex" role="search">
            <div className="input-group">
              <input
                className="form-control rounded-pill header-search-input"
                type="search"
                placeholder="Tìm phim, rạp"
                aria-label="Search"
              />
              <span className="input-group-text bg-transparent border-0 header-search-icon">
                <i className="fas fa-search" />
              </span>
            </div>
          </form>
          <Link to="/search" className="d-inline d-md-none ms-3">
            <i className="fas fa-search" />
          </Link>
           {/* Hiển thị avatar nếu đã đăng nhập, nút Đăng Nhập nếu chưa */}
           {isLoggedIn ? (
                <div className="dropdown">
                    <img
                        src={userAvatar || "https://i.pravatar.cc/150"}
                        alt="User Avatar"
                        className="rounded-circle"
                        width="50"
                        height="50"
                        style={{ cursor: "pointer" }}
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    />
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                            <Link className="dropdown-item" to="/profile">Hồ Sơ Cá Nhân</Link>
                        </li>
                        <li>
                            <button className="dropdown-item text-danger" onClick={handleShowModal}>
                                Đăng Xuất
                            </button>
                        </li>
                    </ul>
                </div>
            ) : (
                <Link to="/identity" className="btn btn-outline-primary">Đăng Nhập</Link>
            )}
          
          <Link to="/dang-nhap" className="d-inline d-md-none ms-3">
            <i className="fas fa-user" />
          </Link>
          <button
            className="navbar-toggler d-inline d-md-none ms-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
        </div>
      </div>

      {/* Navbar cho Mobile */}
      <nav className="collapse navbar-collapse d-md-none" id="navbarResponsive">
        <ul className="header-nav-list-mobile list-unstyled d-flex flex-column text-center">
          <li className="my-2">
            <Link to="/schedule-movie" className="text-light">
              Lịch Chiếu
            </Link>
          </li>
          <li className="my-2">
            <Link to="/movie-list" className="text-light">
              Phim Chiếu
            </Link>
          </li>
          <li className="my-2">
            <Link to="/rule" className="text-light">
              Thông Tin
            </Link>
          </li>
          <li className="my-2">
            <Link to="/promotion" className="text-light">
              Khuyến Mãi
            </Link>
          </li>
          <li className="my-2">
            <Link to="/aboutUs" className="text-light">
              Liên Hệ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Xác Nhận Đăng Xuất</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có chắc chắn muốn đăng xuất không?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Hủy
          </Button>
          <Button variant="primary" onClick={() => {
            handleLogout();
            handleCloseModal();
          }}>
            Đăng Xuất
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    
    
  );
};

export default Header;
