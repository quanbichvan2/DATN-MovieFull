import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Movie } from '../../models/movieDetail';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getFormattedDate, shortMoviesUpComingOrCurrent } from '../booking/ulti';

// interface Movie {
//     src: string;
//     title: string;
//     genre: string;
//     runtime: string;
//     language: string;
//     subtitles: string;
//     rating: string;
// }

interface MovieCarouselProps {
    movies: Movie[];
    showMoreButton?: boolean;
    variant: 'current' | 'upcoming';
    
}


const MovieCarousel: React.FC<MovieCarouselProps> = ({ movies, showMoreButton = true, variant }) => {
    const [showMovies, setShowMovie] = useState(movies)


    useEffect(() => {
        shortMoviesUpComingOrCurrent(variant, movies, setShowMovie)
        console.log(showMovies)
    }, [])
    const settings = {
        infinite: true,            // Cho phép carousel lặp lại vô tận
        speed: 690,                // Tốc độ chuyển slide (ms)
        slidesToShow: 4,           // Số lượng mục hiển thị cùng một lúc
        slidesToScroll: 4,         // Số lượng mục sẽ cuộn khi nhấn điều hướng
        nextArrow: <NextArrow />,  // Nút điều hướng "Next"
        prevArrow: <PrevArrow />,  // Nút điều hướng "Prev"
        responsive: [
            {
                breakpoint: 1024,  // Khi kích thước màn hình nhỏ hơn 1024px
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,   // Khi kích thước màn hình nhỏ hơn 600px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,   // Khi kích thước màn hình nhỏ hơn 480px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const navigate = useNavigate();
    return (
        <Container fluid className="py-5" style={{ paddingLeft: "4%", paddingRight: "4%" }}>
            <Slider {...settings}>
                {movies.map((movie) => (
                    <div key={movie.id} className="movie-item text-center" >
                        <div className="movie-img-container">
                            <img src={movie.posterImage} width={340} height={510} alt={movie.title} />
                            <div className="movie-info">
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ fontWeight: '900' }}>{movie.title}</li>
                                    <li><i className="fas fa-user-tie"></i> Directed by: {movie.directorName}</li>
                                    <li><i className="fas fa-clock"></i> {movie.runtimeMinutes} mins</li>
                                    <li><i className="fas fa-calendar-alt"></i> Release:{getFormattedDate(movie.releaseDate)}</li>
                                    <li><i className="fas fa-user-shield"></i> Rating: {movie.ageRating}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="btn-movie-item">
                            <Button variant="outline-warning" className="m-2" href={movie.trailerLink} target="_blank">Watch Trailer</Button>
                            <Button variant="outline-warning" className="m-2" href={'/movie/' + movie.id}>Book Now</Button>
                        </div>
                    </div>
                ))}
            </Slider>

            {showMoreButton && (
                <div className="text-center mt-4">
                    <Button
                        variant="outline-warning"
                        onClick={() => navigate(`/movie-list/${variant}`)}
                    >
                        Xem Thêm
                    </Button>
                </div>
            )}
        </Container>
    );
};

const NextArrow: React.FC<{ onClick?: React.MouseEventHandler<HTMLDivElement> }> = ({ onClick }) => {
    return (
        <div className="slick-next" style={{ fontSize: "36px" }} onClick={onClick}>
            <i className="fa-solid fa-chevron-right"></i>
        </div>
    );
};

const PrevArrow: React.FC<{ onClick?: React.MouseEventHandler<HTMLDivElement> }> = ({ onClick }) => {
    return (
        <div className="slick-prev" onClick={onClick}>
            <i className="fa-solid fa-chevron-left"></i>
        </div>
    );
};

export default MovieCarousel;
