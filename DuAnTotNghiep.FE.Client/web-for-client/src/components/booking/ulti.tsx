import { Movie } from "../../models/movieDetail";
import { Show } from "../../models/show";

export const getFormattedDate = (date: string): string => {
    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    };

    // Sử dụng 'vi-VN' để đảm bảo ngôn ngữ và định dạng tiếng Việt
    return new Date(date).toLocaleDateString('vi-VN', options);
};

export const getDayOfWeek = (date: string): string => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
    return new Date(date).toLocaleDateString('vi-VN', options);
};

// Hàm để định dạng giờ từ 24h sang AM/PM
export function formatTimeToAMPM(timeString: string) {
    const date = new Date(timeString);
    let hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, '0');
    return `${hours}:${formattedMinutes} ${ampm}`;
}

// Hàm chuyển đổi dữ liệu
// export function convertShowsToDay(shows: Show[]) {
//     if (!shows.length) return null;

//     // Lấy ngày từ startTime của show đầu tiên
//     const date = new Date(shows[0].startTime).toISOString().split('T')[0];

//     // Tạo mảng times với các giờ đã chuyển sang AM/PM
//     const times = shows.map(show => formatTimeToAMPM(show.startTime));

//     return {
//         date: date,
//         times: times
//     };
// }

export const formatCurrency = (amount: number | string) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ";
};


export const shortMoviesUpComingOrCurrent = (
    type: string, 
    movies: Movie[], 
    setShowMovie: (movies: Movie[]) => void
) => {
    const today = new Date();
    if (type === "upcoming") {
        const showMovie = movies.filter(p => new Date(p.releaseDate) > today)
        setShowMovie(showMovie)
    } else {
        const showMovie = movies.filter(p => new Date(p.releaseDate) <= today)
        setShowMovie(showMovie)
    }
}
