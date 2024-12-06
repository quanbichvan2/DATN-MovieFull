import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "../../assets/css/movielist.prefixed.css";
import axios, { AxiosResponse } from "axios";
import { getFormattedDate, shortMoviesUpComingOrCurrent } from "../../components/booking/ulti";
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

// export interface Item {
//     id: string;
//     directorName: string;
//     title: string;
//     ageRating: number;
//     runtimeMinutes: number;
//     releaseDate: string;
//     trailerLink: string;
//     bannerText: string;
//     headerImage: string;
//     posterImage: string;
//     description: string;
//     directorId: string;
// }
const fetchMovie = async (pageIndex: number, pageSize: number, IsDescending: boolean = true) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://localhost:7022/movie-management-module/Movies?PageIndex=${pageIndex}&PageSize=${pageSize}&IsDescending=${IsDescending}`,
        headers: {
            'accept': '*/*'
        }
    };
    const movieData: AxiosResponse<PaginationRes> = await axios.request(config)
    return movieData.data;
}
const MovieList = () => {
    const { type } = useParams<{ type: string }>();
    const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
    const [moviess, setMoviess] = useState<Movie[]>([]);
    const itemsPerPage = 4; // Số phim hiển thị trên mỗi trang
    const [totalPage, setTotalPage] = useState(1)


    // Lấy dữ liệu từ API và cập nhật `moviess`
    useEffect(() => {
        const fetch = async () => {
            const response: PaginationRes = await fetchMovie(currentPage, itemsPerPage);
            shortMoviesUpComingOrCurrent(type ?? "current", response.items, setMoviess)
            setTotalPage(response.totalPages)
        };
        fetch();
    }, [currentPage]); // để 1 đối tượng vào mảng [] thì nó sẽ dependence, useEffect sẽ chạy lại 1 lần khi đối tượng đó thay đổi

    // Scroll lên đầu khi thay đổi trang
    useEffect(() => {
        const scrollToTop = () => {
            window.scrollTo(0, 0);
        };
        const timeoutId = setTimeout(scrollToTop, 0);
        return () => clearTimeout(timeoutId);
    }, [currentPage]);



    const title = type === 'current' ? "Phim Đang Chiếu" : "Phim Sắp Chiếu";

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };


    return (
        <div className="movielist">
            <main>
                <div className="container">
                    <div className="movieList-header d-flex justify-content-center">
                        {/* <h1 className="movieList-title" onClick={() => handleTitleClick('current')}>Phim Đang Chiếu</h1>
                        <h1 className="movieList-title" onClick={() => handleTitleClick('upcoming')}>Phim Sắp Chiếu</h1> */}
                        {/* <h1 className="movieList-title">Suất Chiếu Đặt Biệt</h1> */}
                        <h1 className="movieList-title">{title}</h1> {/* Hiển thị tiêu đề động */}
                    </div>
                    <div className="movieList-content" id="movieList">
                        {moviess.map((movie, index) => (
                            <div className="col-sm-6 movieList-item" key={index}>
                                <div className="movieList-item-wrapper">
                                    <img src={movie.posterImage} alt={movie.title} className="movieList-item-image" />
                                    <div className="movieList-overlay">
                                        <ul className="movieList-info">
                                            <li className="movieList-item-title" style={{ fontSize: '1.5rem' }}>{movie.title}</li>
                                            {/* <li><i className="fas fa-film me-2"></i> {movie.genre}</li> */}
                                            <li><i className="fas fa-clock me-2"></i> {getFormattedDate(movie.releaseDate)}</li>
                                            <li><i className="fas fa-language me-2"></i> Tiếng Anh </li>
                                            <li><i className="fas fa-closed-captioning me-2"></i> Phụ Đề</li>
                                            <li><i className="fas fa-user-shield me-2"></i> {movie.ageRating}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <h3 className="movieList-item-footer">{movie.title}</h3>
                                </div>
                                <div className="movieList-item-actions d-flex justify-content-between align-items-center">
                                    <a href="#" className="movieList-item-trailer" style={{ color: 'white' }}>
                                        <i className="fa-regular fa-circle-play"></i> Xem Trailer
                                    </a>
                                    <button className="btn btn-outline-warning movieList-item-btn">Đặt Vé</button>
                                </div>
                            </div>
                        ))}
                        {/* Phân trang */}
                    </div>
                    <div className="movieList-pagination d-flex justify-content-center" style={{paddingBottom: '2rem' }}>
                        <button
                            className="custom-btn-prev"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            &#10094; {/* Biểu tượng mũi tên trái */}
                        </button>
                        <span className="align-self-center">
                            Page {currentPage} of {totalPage}
                        </span>
                        <button
                            className="custom-btn-next"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPage}
                        >
                            &#10095; {/* Biểu tượng mũi tên phải */}
                        </button>
                    </div>

                </div>
            </main>
        </div>
    )
}
export default MovieList;