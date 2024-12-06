import "../../assets/css/showSchedulePage.prefixed.css";
import MovieCarousel from "../../components/movie/movieCarousel";
import logo_calendar from '../../assets/Img/icon-calendar-1.svg'
import logo_movie from '../../assets/Img/icon-movie-1.svg'
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Movie } from "../../models/movieDetail";

export interface PaginationRes {
    items: Movie[];
    pageIndex: number;
    totalPages: number;
    totalCount: number;
    pageSize: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
}
interface MovieCarouselProps {
    movies: Movie[];
    showMoreButton?: boolean;
    // type: 'current' | 'upcoming';
}
const fetchMovie = async () => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://localhost:7022/movie-management-module/Movies',
        headers: {
            'accept': '*/*'
        }
    };
    const movieData: AxiosResponse<PaginationRes> = await axios.request(config)
    return movieData.data;
}

const ShowScheduleMovie = () => {
    const [displayedMovies, setDisplayedMovies] = useState<Movie[]>([]);
    const [selectedMovieId, setSelectedMovieId] = useState<string>("");

    const getNext7Days = () => {
        const dates = [];
        const today = new Date();
        for (let i = 0; i < 7; i++) {
            const nextDate = new Date(today);
            nextDate.setDate(today.getDate() + i);
            dates.push(nextDate.toLocaleDateString("vi-VN")); // Convert to dd/mm/yyyy format
        }
        return dates;
    };
    const handleMovieSelect = (event: any) => {
        const movieTitle = event.target.value;
        if (movieTitle === "all") {
            setDisplayedMovies(movies); // Reset to show all movies
        } else {
            const filteredMovies = movies.filter((movie) => movie.title === movieTitle);
            setDisplayedMovies(filteredMovies);
        }
        // Cập nhật id của phim thay vì title
        const selectedMovie = movies.find(movie => movie.title === movieTitle);
        setSelectedMovieId(selectedMovie ? selectedMovie.id : ""); // Set ID of selected movie
    };
    const [movies, setMoviess] = useState<Movie[]>([]);
    useEffect(() => {
        const fetch = async () => {
            const response: PaginationRes = await fetchMovie()
            setMoviess(response.items)
        }
        fetch()
    }, [])
    console.log('test: ' + JSON.stringify(movies))
    return (
        <div className="showSchedulePage">
            <main>
                <section>
                    <div className="container py-5">
                        {/* Filters Row */}
                        <div className="row mb-4 pt-5 show-time">
                            <div className="col-sm-6 mt-2">
                                <div className="show-time-date">
                                    <label className="form-label">1.Chọn Ngày
                                        <span><img src={logo_calendar} className="show-time-icon" alt="" /></span>
                                    </label>
                                    <select className="form-select">
                                        {getNext7Days().map((date, index) => (
                                            <option key={index}>{date}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6 mt-2">
                                <div className="show-movie">
                                    <div>
                                        <label className="form-label">2.Chọn Phim</label>
                                        <span><img src={logo_movie} className="show-time-icon" alt="" /></span>
                                    </div>
                                    <select className="form-select" onChange={handleMovieSelect}>
                                        {/* <option selected disabled>Chọn Phim</option> */}
                                        <option value="all">Tất cả phim</option>
                                        {movies.map((movie, index) => (
                                            <option key={index} value={movie.title}>
                                                {movie.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <hr className="mt-5" />

                        {/* Movie Info and Showtimes */}
                        <div className="row mt-5" style={{ display: 'flex', alignItems: 'center', margin: '0 auto' }}>
                            {displayedMovies.map((movie, index) => (
                                <div className="row movieList-item" key={index}>
                                    <div className="col-md-3">
                                        <img src={movie.posterImage} className="movie-poster" alt={movie.title} />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="row">
                                            <div className="mb-5">
                                                <a className="card-title">{movie.title}</a>
                                                <p>
                                                    {/* {movie.genres} | {movie.runtimeMinutes}  */}
                                                    {movie.genres.map((genre) => genre.name).join(", ")} | {movie.runtimeMinutes} phút
                                                </p>
                                                <p>
                                                    <span
                                                    className={`badge info-badge ${movie.ageRating === 1
                                                        ? "badge-warning" // Màu vàng cho "Below 13+"
                                                        : movie.ageRating === 2
                                                        ? "badge-success" // Màu xanh lá cho "13+"
                                                        : movie.ageRating === 3
                                                        ? "badge-primary" // Màu xanh dương cho "16+"
                                                        : movie.ageRating === 4
                                                        ? "badge-danger" // Màu đỏ cho "18+"
                                                        : "badge-secondary" // Màu xám cho giá trị không xác định
                                                        }`}
                                                    >
                                                        {movie.ageRating === 1
                                                        ? "Below 13+"
                                                        : movie.ageRating === 2
                                                        ? "13+"
                                                        : movie.ageRating === 3
                                                        ? "16+"
                                                        : movie.ageRating === 4
                                                        ? "18+"
                                                        : "N/A"}
                                                    </span>
                                                </p>
                                            </div>
                                            <hr />
                                            <div className="mb-5">
                                                <h5>Seven Cinestar</h5>
                                                <p>Quận 12, Tp.Hồ Chí Minh</p>
                                                <button className="schedule-btn btn-date btn-yellow-border" >21:40</button>
                                                <button className="schedule-btn btn-date">22:35</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <hr />
                <div className="homepage">
                    <div className="current-movieList">
                        <h1>Phim Đang Chiếu</h1>
                    </div>
                    <MovieCarousel movies={movies} variant="current" />
                </div>
            </main>
        </div>
    )
}
export default ShowScheduleMovie;
