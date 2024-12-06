import "../../assets/css/aboutUs.prefixed.css";
import logo1 from "../../assets/Img/rap/1.png"
import logo2 from "../../assets/Img/rap/2.png"
import logo3 from "../../assets/Img/rap/3.png"
import logo4 from "../../assets/Img/rap/4.png"
import logo5 from "../../assets/Img/rap/5.png"
export default function aboutUs() {
    return (
        <div className="aboutUs">
            <main>
                <div className="container">
                    <h1 className="mission-title text-center">
                        {" "}
                        <strong>Sứ Mệnh</strong>
                    </h1>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="info-box">
                                <h3 className="text-yellow">01</h3>
                                <span className="description">
                                    Góp phần tăng trưởng thị phần điện ảnh, văn hóa, giải trí của người
                                    Việt Nam.
                                </span>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="info-box">
                                <h3 className="text-yellow">02</h3>
                                <span className="description">
                                    Phát triển dịch vụ xuất sắc với mức giá tối ưu, phù hợp với thu nhập
                                    người Việt Nam.
                                </span>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="info-box">
                                <h3 className="text-yellow">03</h3>
                                <span className="description">
                                    Mang nghệ thuật điện ảnh, văn hóa Việt Nam hội nhập quốc tế.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={logo1} className="d-block w-100" alt="..." />
                            <div className="container-carousel container d-none d-md-block text-center">
                                <h5>
                                    <strong>7 Cinema</strong>
                                </h5>
                                <p className="margin-left-right-2">
                                    7 Cinema được biết đến là một rạp chiếu phim duy nhất tọa lạc tại
                                    123 Đường Lê Duẫn, Quận 1, TP.HCM. Mặc dù chỉ có một cơ sở, 7 Cinema
                                    đã nhanh chóng trở thành điểm đến yêu thích của những tín đồ điện
                                    ảnh nhờ vào chất lượng phục vụ xuất sắc và không gian hiện đại, sang
                                    trọng.
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={logo2} className="d-block w-100" alt="..." />
                            <div className="carousel-dot d-none d-md-block text-center">
                                <h5>
                                    <strong>7 Cinema</strong>
                                </h5>
                                <p className="margin-left-right-2">
                                    7 Cinema luôn được trang bị những công nghệ âm thanh và hình ảnh
                                    tiên tiến nhất, mang lại trải nghiệm chân thực và sống động cho khán
                                    giả. Không gian rạp chiếu phim được thiết kế thoải mái và sạch sẽ,
                                    giúp khách hàng hoàn toàn yên tâm khi thưởng thức bộ phim yêu thích.{" "}
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={logo3} className="d-block w-100" alt="..." />
                            <div className="carousel-dot d-none d-md-block text-center">
                                <h5>
                                    <strong>7 Cinema</strong>
                                </h5>
                                <p className="margin-left-right-2">
                                    Phòng chờ rộng rãi, thoáng đãng, được bài trí tinh tế với ghế ngồi
                                    êm ái, giúp khách hàng có thể thoải mái chờ đợi trước khi thưởng
                                    thức bộ phim. Hệ thống ánh sáng nhẹ nhàng và màu sắc hài hòa không
                                    chỉ tạo cảm giác ấm áp mà còn tạo điểm nhấn thẩm mỹ cho không gian.
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={logo4} className="d-block w-100" alt="..." />
                            <div className="carousel-dot d-none d-md-block text-center">
                                <h5>
                                    <strong>7 Cinema</strong>
                                </h5>
                                <p className="margin-left-right-2">
                                    Đặc biệt, tại phòng chờ, khách hàng có thể trải nghiệm các dịch vụ
                                    tiện ích như quầy đồ ăn nhẹ và nước uống, giúp họ dễ dàng tiếp thêm
                                    năng lượng trước khi vào xem phim. Đội ngũ nhân viên tận tình và
                                    chuyên nghiệp luôn sẵn sàng hỗ trợ, đảm bảo rằng mọi nhu cầu của
                                    khách hàng đều được đáp ứng kịp thời.
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={logo5} className="d-block w-100" alt="..." />
                            <div className="carousel-dot d-none d-md-block text-center">
                                <h5>
                                    <strong>7 Cinema</strong>
                                </h5>
                                <p className="margin-left-right-2">
                                    7 Cnema luôn được trang bị những công nghệ âm thanh và hình ảnh tiên
                                    tiến nhất, mang lại trải nghiệm chân thực và sống động cho khán giả.
                                    Không gian rạp chiếu phim được thiết kế thoải mái và sạch sẽ, giúp
                                    khách hàng hoàn toàn yên tâm khi thưởng thức bộ phim yêu thích. Đội
                                    ngũ nhân viên tại 7cinema được cam kết phục vụ tận tình và chuyên
                                    nghiệp, luôn sẵn sàng đáp ứng kịp thời mọi nhu cầu của khách hàng.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={0}
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={1}
                            aria-label="Slide 2"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={2}
                            aria-label="Slide 3"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={3}
                            aria-label="Slide 4"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={4}
                            aria-label="Slide 5"
                        />
                    </div>
                    <div className="text-center">
                        {" "}
                        {/* Thêm margin-top */}
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="contact-body">
                    <strong>TRỤ SỞ CỦA CHÚNG TÔI</strong>
                </div>
                <div className="info-container">
                    <div className="info">
                        <h1>
                            <strong>Trụ sở | HEADQUARTER</strong>
                        </h1>
                        <div className="address">135 Hai Bà Trưng, Phường Bến Nghé, Quận 1, TP.HCM</div>
                        <div className="email">Email: marketing.cinestar@gmail.com</div>
                        <div className="phone">Điện thoại: 028 7300 7279</div>
                    </div>
                </div>
                {/* <div className="info-container-mb">
                    <div className="info">
                        <h1>
                            <strong>Trụ sở | HEADQUARTER</strong>
                        </h1>
                        <div className="address">135 Hai Bà Trưng, Phường Bến Nghé, Quận 1, TP.HCM</div>
                        <div className="email">Email: marketing.cinestar@gmail.com</div>
                        <div className="phone">Điện thoại: 028 7300 7279</div>
                    </div>
                </div> */}
            </main>
        </div>
    )
}