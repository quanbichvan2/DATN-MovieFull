// BookingPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../../assets/css/bookingPage.prefixed.css";
import BookingComponent from '../../components/booking/booking';
import movieDetailService from '../../services/movieDetailService';
import { Movie, Genre, CastMember } from '../../models/movieDetail';
import { Show } from '../../models/show';
import showService from '../../services/showService';

interface CommentType {
  id: number;
  name: string;
  avatar: string;
  date: string;
  content: string;
}

const BookingPage: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [castMembers, setCastMembers] = useState<CastMember[]>([]);
  const [shows, setShows] = useState<Show | undefined>();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [showMore, setShowMore] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);
  const [comments, setComments] = useState<CommentType[]>([
    { id: 1, name: "Nguyễn Văn A", avatar: "https://via.placeholder.com/50", date: "30/09/2024", content: "Phim rất hấp dẫn và kịch tính. Diễn xuất của Cillian Murphy quá đỉnh!" },
    { id: 2, name: "Lê Thị B", avatar: "https://via.placeholder.com/50", date: "01/10/2024", content: "Cốt truyện sâu sắc và cảnh quay đẹp. Nhất định phải xem!" },
    { id: 3, name: "Trần Quốc C", avatar: "https://via.placeholder.com/50", date: "02/10/2024", content: "Bộ phim tuyệt vời, nhưng một số đoạn hơi dài dòng." },
  ]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchMovieData = async () => {
      if (movieId) {
        try {
          const movieData = await movieDetailService.getMovieById(movieId);
          setMovie(movieData);

          // Fetch genres and cast members for the movie
          const genresData = await movieDetailService.getGenres();
          setGenres(genresData.items);

          const castMembersData = await movieDetailService.getCastMembers();
          setCastMembers(castMembersData.items);

          console.log(movieId)
          // Fetch shows (suất chiếu) for the movie
          const showsData = await showService.getShowsByMovieId(movieId);
          console.log('#1', showsData);
          setShows(showsData);
          console.log(showsData)
        } catch (error) {
          console.error("Failed to fetch movie details:", error);
          alert("Error fetching movie details. Please try again later.");
        }
      }
    };

    fetchMovieData();
  }, [movieId]);

  //Phần xử lý ngày và thời gian


  const handleToggleMore = () => setShowMore(!showMore);
  const handleVideoToggle = () => setVideoVisible(!videoVisible);

  const handleAddComment = () => {
    const trimmedComment = newComment.trim();
    if (trimmedComment) {
      const newCommentData = {
        id: comments.length + 1,
        name: "User mới",
        avatar: "https://via.placeholder.com/50",
        date: new Date().toLocaleDateString("vi-VN"),
        content: trimmedComment,
      };
      setComments([newCommentData, ...comments]);
      setNewComment("");
    }
  };

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="bookingPage">
      <main>
        <section
          className="movie-details py-5 text-light img-gr"
          style={{
            backgroundImage: `url('${movie.headerImage}')`,
            minHeight: "800px",
            zIndex: '100px'
          }}
        >
          <div className="container"
            style={{
              backgroundColor: 'black',
              paddingTop: '1rem',
            }}
          >
            <div className="row">
              <div className="col-4 d-flex flex-column align-items-center position-relative">
                <img
                  src={movie.posterImage}
                  alt={`${movie.title} Poster`}
                  className="img-fluid rounded mb-3"
                  style={{ cursor: 'pointer' }}
                  onClick={handleVideoToggle}
                />
                <div
                  className="play-button position-absolute"
                  style={{ top: '40%', left: '50%', transform: 'translate(-50%, -50%)' }}
                >
                  <i className="fa-regular fa-circle-play" style={{ fontSize: '1.6rem', fontWeight: '40', color: 'white' }}></i>
                </div>
              </div>

              <div className="col-8">
                <p className="mb-4 text-uppercase moviedetails-title">
                  {movie.title}
                </p>
                <ul className="list-unstyled">
                  <li><i className="fas fa-film me-2"></i>
                    {genres.map((genre) => genre.name).join(", ")}
                  </li>
                  <li><i className="fas fa-clock me-2"></i> {movie.runtimeMinutes} phút</li>
                  <li><i className="fas fa-language me-2"></i> Anh (N/A)</li>
                  <li><i className="fas fa-closed-captioning me-2"></i> Phụ đề Tiếng Việt</li>
                  <li><i className="fas fa-user-shield me-2"></i> T{movie.ageRating} (Dành cho người trên 18 tuổi)</li>
                </ul>
                <div className="mt-4 movie-details-desktop">
                  <p style={{ fontSize: '28px', fontWeight: 1000 }}>MÔ TẢ</p>
                  <ul className="list-unstyled">
                    <li><strong>Đạo Diễn:</strong> {movie.directorName}</li>
                    <li><strong>Diễn viên:</strong> {castMembers.map((member) => member.name).join(", ")}</li>
                    <li><strong>Ngày Phát Hành:</strong> {new Date(movie.releaseDate).toLocaleDateString("vi-VN")}</li>
                  </ul>
                  <div className="mt-4">
                    <p style={{ fontSize: '28px', fontWeight: 1000 }}>NỘI DUNG PHIM</p>
                    <p>
                      {movie.bannerText}
                      <span id="dots">{!showMore && '...'}</span>
                      <span id="more" style={{ display: showMore ? 'inline' : 'none' }}>
                        {movie.description}
                      </span>
                      <i
                        id="myBtn"
                        style={{ textDecoration: 'underline', color: 'yellow', cursor: 'pointer' }}
                        onClick={handleToggleMore}
                      >
                        {showMore ? 'Ẩn bớt' : 'Xem thêm'}
                      </i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Overlay */}
          {videoVisible && movie.trailerLink && (
            <div
              id="videoOverlay"
              className="overlay"
              style={{ display: 'block', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.9)', zIndex: 9999 }}
            >
              <span
                className="close"
                style={{ position: 'absolute', top: '20px', right: '40px', fontSize: '40px', color: 'white', cursor: 'pointer' }}
                onClick={handleVideoToggle}
              >
                &times;
              </span>
              <iframe
                id="youtubeVideo"
                width="80%"
                height="80%"
                style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                src={movie.trailerLink}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </section>

        {/* <BookingComponent shows={shows} movie={movie} /> */}
        <BookingComponent shows={shows} />
        {/* <BookingComponent /> */}




        {/* Comments Section */}
        <div className="container mt-5" style={{ backgroundColor: "#101E4B", marginBottom: "-16px" }}>
          <div className="container" style={{ backgroundColor: "#101526", padding: "24px", borderRadius: "16px" }}>
            <h2 className="mb-4 text-center">Bình Luận</h2>
            <div className="comment-box mb-4">
              <h5>Viết bình luận của bạn</h5>
              <textarea
                className="form-control mb-3"
                rows={3}
                style={{ height: "110px" }}
                placeholder="Nhập bình luận của bạn..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              ></textarea>
              <button className="btn btn-warning" onClick={handleAddComment}>
                Gửi Bình Luận
              </button>
            </div>
            <div className="comment-list">
              <h5 className="mb-4">Các bình luận gần đây</h5>
              {comments.map((comment) => (
                <div className="comment-item mb-3" key={comment.id}>
                  <div className="d-flex align-items-start" style={{ backgroundColor: "#101E4B", borderRadius: "25px", padding: "24px" }}>
                    <img src={comment.avatar} alt="User Avatar" className="rounded-circle me-3" style={{ width: "50px", height: "50px" }} />
                    <div>
                      <h6 className="mb-0">{comment.name}</h6>
                      <small className="text-light">{comment.date}</small>
                      <p className="mt-2">{comment.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookingPage;
