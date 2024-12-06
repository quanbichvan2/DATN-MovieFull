import "../../assets/css/homepage.prefixed.css";
import React, { useEffect, useState } from "react";
import MovieCarousel from "../../components/movie/movieCarousel";
import movieDetailService from "../../services/movieDetailService"; // Import the movie service
import { Movie } from "../../models/movieDetail"; // Import the Movie interface
import carousel1 from "../../assets/Img/carousel_Image1.jpg";
import carousel2 from "../../assets/Img/carousel_Image2.jpg";
import carousel3 from "../../assets/Img/carousel_Image3.jpg";
import Star from '../../assets/Img/star.jpg';
import { Link, useParams } from "react-router-dom";
import { shortMoviesUpComingOrCurrent } from "../../components/booking/ulti";

const HomePage: React.FC = () => {
    // Carousel slides (unchanged)
    const slides = [
        { image: carousel1 },
        { image: carousel2 },
        { image: carousel3 },
    ];

    // State for movies data fetched from the API
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentMovies, setCurrentMovies] = useState<Movie[]>([]); // Danh sách phim đang chiếu
    const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]); // Danh sách phim sắp chiếu

    // Fetch movies on component mount
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const moviesData = await movieDetailService.getMovies(1, 10); // Fetch first page with 10 movies
                shortMoviesUpComingOrCurrent("current", moviesData.items, setCurrentMovies);
                shortMoviesUpComingOrCurrent("upcoming", moviesData.items, setUpcomingMovies);
                setMovies(moviesData.items); // Set fetched movies to state
            } catch (error) {
                console.error("Failed to fetch movies:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    const renderStars = () => {
        return Array(5)
            .fill(null)
            .map((_, index) => (
                <img key={index} src={Star} alt="Star" className="star-icon" />
            ));
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="homepage">
            <main>
                <section className="banner-carousel">
                    <div
                        id="carouselControls"
                        className="carousel-container carousel slide"
                        data-bs-ride="carousel"
                        data-bs-interval="3000"
                    >
                        {/* Dots Indicator */}
                        <ol className="carousel-indicators" style={{ listStyle: 'none' }}>
                            {slides.map((_, index) => (
                                <li key={index}
                                    data-bs-target="#carouselControls"
                                    style={{ width: '12px', height: '12px' }}
                                    data-bs-slide-to={index}
                                    className={index === 0 ? 'active' : ''} />
                            ))}
                        </ol>

                        <div className="carousel-inner">
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`carousel-item ${index === 0 ? 'active' : ''}`}
                                >
                                    <img className="banner-carousel-img" src={slide.image} />
                                    <div className="carousel-caption" />
                                </div>
                            ))}
                        </div>

                        <a
                            className="carousel-control-prev"
                            href="#carouselControls"
                            role="button"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </a>

                        <a
                            className="carousel-control-next"
                            href="#carouselControls"
                            role="button"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </a>
                    </div>
                </section>
                <section className="movie-selection-header">
                    <div
                        className="movieSelectionBody"
                        style={{
                            height: '8rem',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <div className="star-container">
                            {/* Left stars */}
                            <div className="stars" style={{ marginRight: '1rem' }}>
                                {renderStars()}
                            </div>
                            <h1
                                className="section-title-Movie text-uppercase"
                                style={{ fontFamily: "'Nunito', sans-serif" }}
                            >
                                <strong>Phim Đang chiếu</strong>
                            </h1>
                            {/* Right stars */}
                            <div className="stars" style={{ marginLeft: '1rem' }}>
                                {renderStars()}
                            </div>
                        </div>
                    </div>
                    <MovieCarousel
                        // movies={movies}
                        movies={currentMovies}
                        variant="current"
                    />
                </section>

                <section className="movie-selection-header">
                    <div
                        className="movieSelectionBody"
                        style={{
                            height: '8rem',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <div className="star-container">
                            {/* Left stars */}
                            <div className="stars" style={{ marginRight: '1rem' }}>
                                {renderStars()}
                            </div>
                            <h1
                                className="section-title-Movie text-uppercase"
                                style={{ fontFamily: "'Nunito', sans-serif" }}
                            >
                                <strong>Phim Sắp Chiếu</strong>
                            </h1>
                            {/* Right stars */}
                            <div className="stars" style={{ marginLeft: '1rem' }}>
                                {renderStars()}
                            </div>
                        </div>
                    </div>
                    <MovieCarousel
                        // movies={movies}
                        movies={upcomingMovies}
                        // type="upcoming" 
                        // type={type === "upcoming" ? type : "upcoming"} 
                        variant="upcoming"

                    />
                </section>
                <section className="movie-selection-header">
                    <div
                        className="movieSelectionBody"
                        style={{ height: '4rem', display: 'flex', justifyContent: 'start', marginLeft: '10%' }}
                    >
                        <h1
                            className="section-title-Movie text-uppercase"
                            style={{ fontFamily: "'Nunito', sans-serif" }}
                        >
                            <strong>Khuyến Mãi</strong>
                        </h1>
                    </div>
                    <div
                        className="promotion-body"
                        style={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <Link to="/promotion" style={{ textDecoration: 'none' }}>
                            <div className="promotion-images d-flex justify-content-center align-items-center">
                                <div id="icon1" className="icon">
                                    <i className="fa-solid fa-chevron-left"></i>
                                </div>
                                <img
                                    className="promotion-card"
                                    src="https://cinestar.com.vn/_next/image/?url=https%3A%2F%2Fapi-website.cinestar.com.vn%2Fmedia%2FMageINIC%2Fbannerslider%2Fkm-m-1.webp&w=1920&q=75"
                                    alt="Promotion 1"
                                />
                                <img
                                    className="promotion-card"
                                    src="https://cinestar.com.vn/_next/image/?url=https%3A%2F%2Fapi-website.cinestar.com.vn%2Fmedia%2FMageINIC%2Fbannerslider%2Fkm-m-2.webp&w=1920&q=75"
                                    alt="Promotion 2"
                                />
                                <img
                                    className="promotion-card"
                                    src="https://cinestar.com.vn/_next/image/?url=https%3A%2F%2Fapi-website.cinestar.com.vn%2Fmedia%2FMageINIC%2Fbannerslider%2Fkm-m-3.webp&w=1920&q=75"
                                    alt="Promotion 3"
                                />
                                <div id="icon2" className="icon">
                                    <i className="fa-solid fa-chevron-right"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>

                <div className="sec-pd">
                    <section className="sec-memb" style={{ backgroundColor: 'transparent' }}>
                        <div className="sec-heading">
                            <h2>CHƯƠNG TRÌNH THÀNH VIÊN</h2>
                        </div>
                        <div className="memb-slider">
                            {/* Membership Card 1 */}
                            <div className="memb-wr">
                                <a
                                    className="memb-img"
                                    href="https://cinestar.com.vn/membership"
                                    aria-label="Read more about membership"
                                >
                                    <img
                                        src="https://api-website.cinestar.com.vn/media/wysiwyg/CMSPage/Member/Desktop519x282_CMember.webp"
                                        alt="Thành Viên C'Friend"
                                    />
                                </a>
                                <div className="memb-content">
                                    <h3 className="memb-name">
                                        <a
                                            style={{ fontSize: '40px', fontWeight: 600 }}
                                            href="https://cinestar.com.vn/membership"
                                        >
                                            Thành Viên 7'Friend
                                        </a>
                                    </h3>
                                    <p className="memb-des">Thẻ C'Friend nhiều ưu đãi cho thành viên mới</p>
                                    <a className="btn--pri" href="https://cinestar.com.vn/membership">
                                        <span className="txt">TÌM HIỂU NGAY</span>
                                    </a>
                                </div>
                            </div>

                            {/* Membership Card 2 */}
                            <div className="memb-wr">
                                <a
                                    className="memb-img"
                                    href="https://cinestar.com.vn/membership"
                                    aria-label="Read more about membership"
                                >
                                    <img
                                        src="https://api-website.cinestar.com.vn/media/wysiwyg/CMSPage/Member/c-vip.webp"
                                        alt="Thành Viên C'VIP"
                                    />
                                </a>
                                <div className="memb-content">
                                    <h3 className="memb-name">
                                        <a
                                            style={{ fontSize: '40px', fontWeight: 600 }}
                                            href="https://cinestar.com.vn/membership"
                                        >
                                            Thành Viên 7'VIP
                                        </a>
                                    </h3>
                                    <p className="memb-des">Thẻ VIP CineStar mang đến sự ưu đãi độc quyền</p>
                                    <a className="btn--pri" href="https://cinestar.com.vn/membership">
                                        <span className="txt">TÌM HIỂU NGAY</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <section className="sec-ct" style={{ backgroundColor: 'transparent', padding: '32px' }}>
                    <div className="row" style={{ position: "relative", zIndex: "5", width: '80%', marginLeft: '10%' }}>
                        <div className="col col-5" style={{ marginRight: '64px' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16rem' }}>
                                <a className="sec-ct-titl" style={{ fontSize: '48px', fontWeight: 800, color: 'white' }}>Liên hệ với chúng tôi</a>
                            </div>
                            <div className="ct-social">
                                <a
                                    style={{ textDecoration: 'none' }}
                                    className="ct-social-link d-flex"
                                    href="https://www.facebook.com/cinestarcinemasvietnam"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="facebook"
                                >
                                    <img loading="lazy" src="https://cinestar.com.vn/assets/images/ct-1.webp" alt="" />
                                    <span className="txt txtFa" style={{ paddingRight: '200px', paddingLeft: '5px' }}>FACEBOOK</span>
                                </a>
                                <a
                                    className="ct-social-link"
                                    style={{ textDecoration: 'none' }}
                                    href="https://zalo.me/2861828859391058401"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img loading="lazy" src="https://cinestar.com.vn/assets/images/ct-2.webp" alt="" />
                                    <span className="txt" style={{ paddingRight: 0, paddingLeft: '100px' }}>ZALO CHAT</span>
                                </a>
                            </div>
                        </div>

                        <div className="ct-right col col-6" data-aos="fade-up">
                            <div className="ct-box" style={{ marginTop: '140px' }}>
                                <h3 className="heading">THÔNG TIN LIÊN HỆ</h3>
                                <ul className="ct-tt">
                                    <li>
                                        <img src="https://cinestar.com.vn/assets/images/ct-1.svg" alt="" />
                                        <a href="mailto:marketing.cinestar@gmail.com" aria-label="Email">marketing.cinestar@gmail.com</a>
                                    </li>
                                    <li>
                                        <img src="https://cinestar.com.vn/assets/images/ct-2.svg" alt="ct-2.svg" />
                                        <a href="tel:028 7300 8881" aria-label="Telephone">028 7300 8881</a>
                                    </li>
                                    <li>
                                        <img src="https://cinestar.com.vn/assets/images/ct-3.svg" alt="" />
                                        <a
                                            href="https://maps.app.goo.gl/RYfzjhyyw7vn7PuV8"
                                            target="_blank"
                                            aria-label="Address"
                                            rel="noreferrer"
                                        >
                                            135 Hai Bà Trưng, phường Bến Nghé, Quận 1, TP.HCM
                                        </a>
                                    </li>
                                </ul>

                                <div className="ct-form">
                                    <form>
                                        <div className="f-list">
                                            <div className="f-item">
                                                <label className="re-label"></label>
                                                <div className="w-full relative mb-input">
                                                    <input
                                                        className="re-input"
                                                        type="text"
                                                        name=""
                                                        required
                                                        placeholder="Họ và tên"
                                                        style={{ fontSize: '20px' }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="f-item">
                                                <label className="re-label"></label>
                                                <div className="w-full relative mb-input">
                                                    <input
                                                        className="re-input"
                                                        type="email"
                                                        name=""
                                                        required
                                                        placeholder="Điền email"
                                                        style={{ fontSize: '20px' }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="f-item">
                                                <label className="re-label"></label>
                                                <textarea
                                                    className="re-input"
                                                    name=""
                                                    cols={30}
                                                    rows={10}
                                                    required
                                                    placeholder="Thông tin liên hệ hoặc phản ánh"
                                                    style={{ fontSize: '20px', marginTop: '20px' }}
                                                ></textarea>
                                            </div>
                                        </div>
                                        <button className="btn btn--pri btn-pad-2" type="submit">
                                            <span className="txt">GỬI NGAY</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="sec-ct-mb" style={{ backgroundColor: 'transparent', padding: '32px' }}>
                    <div className="ct-right col" data-aos="fade-up">
                        <div className="ct-box" style={{ marginTop: '140px' }}>
                            <h3 className="heading">THÔNG TIN LIÊN HỆ</h3>
                            <ul className="ct-tt">
                                <li>
                                    <img src="https://cinestar.com.vn/assets/images/ct-1.svg" alt="" />
                                    <a href="mailto:marketing.cinestar@gmail.com" aria-label="Email">marketing.cinestar@gmail.com</a>
                                </li>
                                <li>
                                    <img src="https://cinestar.com.vn/assets/images/ct-2.svg" alt="ct-2.svg" />
                                    <a href="tel:028 7300 8881" aria-label="Telephone">028 7300 8881</a>
                                </li>
                                <li>
                                    <img src="https://cinestar.com.vn/assets/images/ct-3.svg" alt="" />
                                    <a
                                        href="https://maps.app.goo.gl/RYfzjhyyw7vn7PuV8"
                                        target="_blank"
                                        aria-label="Address"
                                        rel="noreferrer"
                                    >
                                        135 Hai Bà Trưng, phường Bến Nghé, Quận 1, TP.HCM
                                    </a>
                                </li>
                            </ul>

                            <div className="ct-form">
                                <form>
                                    <div className="f-list">
                                        <div className="f-item">
                                            <label className="re-label"></label>
                                            <div className="w-full relative mb-input">
                                                <input
                                                    className="re-input"
                                                    type="text"
                                                    name=""
                                                    required
                                                    placeholder="Họ và tên"
                                                    style={{ fontSize: '20px' }}
                                                />
                                            </div>
                                        </div>
                                        <div className="f-item">
                                            <label className="re-label"></label>
                                            <div className="w-full relative mb-input">
                                                <input
                                                    className="re-input"
                                                    type="email"
                                                    name=""
                                                    required
                                                    placeholder="Điền email"
                                                    style={{ fontSize: '20px' }}
                                                />
                                            </div>
                                        </div>
                                        <div className="f-item">
                                            <label className="re-label"></label>
                                            <textarea
                                                className="re-input"
                                                name=""
                                                cols={30}
                                                rows={10}
                                                required
                                                placeholder="Thông tin liên hệ hoặc phản ánh"
                                                style={{ fontSize: '20px', marginTop: '20px' }}
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center">

                                        <button className="btn btn--pri btn-pad-2" type="submit">
                                            <span className="txt">GỬI NGAY</span>
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                </section>
            </main>
        </div>
    );
};

export default HomePage;
