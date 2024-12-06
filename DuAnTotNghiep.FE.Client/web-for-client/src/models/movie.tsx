export interface Movie {
    src: string;
    title: string;
    genre: string;
    runtime: string;
    language: string;
    subtitles: string;
    rating: string;
    ratingIcon: string;
    origin: string
}


// Dữ liệu mẫu chứa thông tin về các bộ phim
export const movies : Movie[] = [
    {
        src: 'https://cinestar.com.vn/_next/image/?url=https%3A%2F%2Fapi-website.cinestar.com.vn%2Fmedia%2Fwysiwyg%2FPosters%2F02_2025%2Fcaptain-america.png&w=1920&q=75',
        title: 'Cáp tần',
        genre: 'Hành Động',
        runtime: '120 phút',
        language: 'Anh (N/A)',
        subtitles: 'Phụ đề Tiếng Việt',
        rating: 'T18 (Dành cho người trên 18 tuổi)',
        ratingIcon: '18+',
        origin: 'Mỹ'
    },
    {
        src: 'https://cinestar.com.vn/_next/image/?url=https%3A%2F%2Fapi-website.cinestar.com.vn%2Fmedia%2Fwysiwyg%2FPosters%2F12-2024%2Fchua-te-cua-nhung-chiec-nhan.png&w=1920&q=75',
        title: 'Chúa tể của những chiếc sừng',
        genre: 'Hài Kịch',
        runtime: '90 phút',
        language: 'Anh',
        subtitles: 'Phụ đề Tiếng Việt',
        rating: 'T13 (Dành cho trẻ em trên 13 tuổi)',
        ratingIcon: '13+',
        origin: 'Anh'

    },
    {
        src: 'https://cinestar.com.vn/_next/image/?url=https%3A%2F%2Fapi-website.cinestar.com.vn%2Fmedia%2Fwysiwyg%2FPosters%2F12-2024%2Fmufasa-vua-su-tu.jpg&w=1920&q=75',
        title: 'Vua sơn lâm',
        genre: 'Hành Động',
        runtime: '120 phút',
        language: 'Anh (N/A)',
        subtitles: 'Phụ đề Tiếng Việt',
        rating: 'T18 (Dành cho người trên 18 tuổi)',
        ratingIcon: '18+',
        origin: 'Mỹ'
    },
    {
        src: 'https://cinestar.com.vn/_next/image/?url=https%3A%2F%2Fapi-website.cinestar.com.vn%2Fmedia%2Fwysiwyg%2FPosters%2F10-2024%2Fvenom.jpg&w=1920&q=75',
        title: 'Vê lom',
        genre: 'Hài Kịch',
        runtime: '90 phút',
        language: 'Anh',
        subtitles: 'Phụ đề Tiếng Việt',
        rating: 'T13 (Dành cho trẻ em trên 13 tuổi)',
        ratingIcon: '13+',
        origin: 'Mỹ'
    },
    {
        src: 'https://cinestar.com.vn/_next/image/?url=https%3A%2F%2Fapi-website.cinestar.com.vn%2Fmedia%2Fwysiwyg%2FPosters%2F02_2025%2Fcaptain-america.png&w=1920&q=75',
        title: 'Phim 1',
        genre: 'Hành Động',
        runtime: '120 phút',
        language: 'Anh (N/A)',
        subtitles: 'Phụ đề Tiếng Việt',
        rating: 'T18 (Dành cho người trên 18 tuổi)',
        ratingIcon: '18+',
        origin: 'Mỹ'
    },
    {
        src: 'https://cinestar.com.vn/_next/image/?url=https%3A%2F%2Fapi-website.cinestar.com.vn%2Fmedia%2Fwysiwyg%2FPosters%2F12-2024%2Fchua-te-cua-nhung-chiec-nhan.png&w=1920&q=75',
        title: 'Phim 2',
        genre: 'Hài Kịch',
        runtime: '90 phút',
        language: 'Anh',
        subtitles: 'Phụ đề Tiếng Việt',
        rating: 'T13 (Dành cho trẻ em trên 13 tuổi)',
        ratingIcon: '13+',
        origin: 'Anh'
    },
    {
        src: 'https://cinestar.com.vn/_next/image/?url=https%3A%2F%2Fapi-website.cinestar.com.vn%2Fmedia%2Fwysiwyg%2FPosters%2F12-2024%2Fmufasa-vua-su-tu.jpg&w=1920&q=75',
        title: 'Phim 1',
        genre: 'Hành Động',
        runtime: '120 phút',
        language: 'Anh (N/A)',
        subtitles: 'Phụ đề Tiếng Việt',
        rating: 'T18 (Dành cho người trên 18 tuổi)',
        ratingIcon: '18+',
        origin: 'Mỹ'
    },
    {
        src: 'https://m.media-amazon.com/images/M/MV5BZjM2M2E3YzAtZDJjYy00MDhkLThiYmItOGZhNzQ3NTgyZmI0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
        title: 'The Wild Robot',
        genre: 'Hài Kịch',
        runtime: '102 phút',
        language: 'Anh',
        subtitles: 'Phụ đề Tiếng Việt',
        rating: 'T13 (Dành cho trẻ em trên 13 tuổi)',
        ratingIcon: '13+',
        origin: 'Mỹ'
    }, {
        src: 'https://cinestar.com.vn/_next/image/?url=https%3A%2F%2Fapi-website.cinestar.com.vn%2Fmedia%2Fwysiwyg%2FPosters%2F02_2025%2Fcaptain-america.png&w=1920&q=75',
        title: 'Phim 1',
        genre: 'Hành Động',
        runtime: '120 phút',
        language: 'Anh (N/A)',
        subtitles: 'Phụ đề Tiếng Việt',
        rating: 'T18 (Dành cho người trên 18 tuổi)',
        ratingIcon: '18+',
        origin: 'Mỹ'
    },
    {
        src: 'https://cinestar.com.vn/_next/image/?url=https%3A%2F%2Fapi-website.cinestar.com.vn%2Fmedia%2Fwysiwyg%2FPosters%2F12-2024%2Fchua-te-cua-nhung-chiec-nhan.png&w=1920&q=75',
        title: 'Phim 2',
        genre: 'Hài Kịch',
        runtime: '90 phút',
        language: 'Anh',
        subtitles: 'Phụ đề Tiếng Việt',
        rating: 'T13 (Dành cho trẻ em trên 13 tuổi)',
        ratingIcon: '13+',
        origin: 'Mỹ'
    },
    {
        src: 'https://cinestar.com.vn/_next/image/?url=https%3A%2F%2Fapi-website.cinestar.com.vn%2Fmedia%2Fwysiwyg%2FPosters%2F12-2024%2Fmufasa-vua-su-tu.jpg&w=1920&q=75',
        title: 'Phim 1',
        genre: 'Hành Động',
        runtime: '120 phút',
        language: 'Anh (N/A)',
        subtitles: 'Phụ đề Tiếng Việt',
        rating: 'T18 (Dành cho người trên 18 tuổi)',
        ratingIcon: '18+',
        origin: 'Mỹ'
    },
    {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgOh11IbwU70qhms-cgbAjt2CEa1h4v0gbGA&s',
        title: 'Elli And The Ghostly Ghost Train',
        genre: 'Hài Kịch',
        runtime: '87 phút',
        language: 'Anh',
        subtitles: 'Phụ đề Tiếng Việt',
        rating: 'T13 (Dành cho trẻ em trên 13 tuổi)',
        ratingIcon: '13+',
        origin: 'Mỹ'
    },
    {
        src: 'https://cinestar.com.vn/_next/image/?url=https%3A%2F%2Fapi-website.cinestar.com.vn%2Fmedia%2Fwysiwyg%2FPosters%2F02_2025%2Fcaptain-america.png&w=1920&q=75',
        title: 'Cáp tần',
        genre: 'Hành Động',
        runtime: '120 phút',
        language: 'Anh (N/A)',
        subtitles: 'Phụ đề Tiếng Việt',
        rating: 'T18 (Dành cho người trên 18 tuổi)',
        ratingIcon: '18+',
        origin: 'Mỹ'
    },
    {
        src: 'https://cinestar.com.vn/_next/image/?url=https%3A%2F%2Fapi-website.cinestar.com.vn%2Fmedia%2Fwysiwyg%2FPosters%2F12-2024%2Fchua-te-cua-nhung-chiec-nhan.png&w=1920&q=75',
        title: 'Chúa tể của những chiếc sừng',
        genre: 'Hài Kịch',
        runtime: '90 phút',
        language: 'Anh',
        subtitles: 'Phụ đề Tiếng Việt',
        rating: 'T13 (Dành cho trẻ em trên 13 tuổi)',
        ratingIcon: '13+',
        origin: 'Anh'

    },
    {
        src: 'https://cinestar.com.vn/_next/image/?url=https%3A%2F%2Fapi-website.cinestar.com.vn%2Fmedia%2Fwysiwyg%2FPosters%2F12-2024%2Fmufasa-vua-su-tu.jpg&w=1920&q=75',
        title: 'Vua sơn lâm',
        genre: 'Hành Động',
        runtime: '120 phút',
        language: 'Anh (N/A)',
        subtitles: 'Phụ đề Tiếng Việt',
        rating: 'T18 (Dành cho người trên 18 tuổi)',
        ratingIcon: '18+',
        origin: 'Mỹ'
    },
    {
        src: 'https://cinestar.com.vn/_next/image/?url=https%3A%2F%2Fapi-website.cinestar.com.vn%2Fmedia%2Fwysiwyg%2FPosters%2F10-2024%2Fvenom.jpg&w=1920&q=75',
        title: 'Vê lom',
        genre: 'Hài Kịch',
        runtime: '90 phút',
        language: 'Anh',
        subtitles: 'Phụ đề Tiếng Việt',
        rating: 'T13 (Dành cho trẻ em trên 13 tuổi)',
        ratingIcon: '13+',
        origin: 'Mỹ'
    },
    {
        src: 'https://cinestar.com.vn/_next/image/?url=https%3A%2F%2Fapi-website.cinestar.com.vn%2Fmedia%2Fwysiwyg%2FPosters%2F02_2025%2Fcaptain-america.png&w=1920&q=75',
        title: 'Phim 1',
        genre: 'Hành Động',
        runtime: '120 phút',
        language: 'Anh (N/A)',
        subtitles: 'Phụ đề Tiếng Việt',
        rating: 'T18 (Dành cho người trên 18 tuổi)',
        ratingIcon: '18+',
        origin: 'Mỹ'
    },
    {
        src: 'https://cinestar.com.vn/_next/image/?url=https%3A%2F%2Fapi-website.cinestar.com.vn%2Fmedia%2Fwysiwyg%2FPosters%2F12-2024%2Fchua-te-cua-nhung-chiec-nhan.png&w=1920&q=75',
        title: 'Phim 2',
        genre: 'Hài Kịch',
        runtime: '90 phút',
        language: 'Anh',
        subtitles: 'Phụ đề Tiếng Việt',
        rating: 'T13 (Dành cho trẻ em trên 13 tuổi)',
        ratingIcon: '13+',
        origin: 'Anh'
    }
]; // Dữ liệu mẫu chứa thông tin về các bộ phim
export const moviesUpcomming :Movie[] = [
    {
        src: 'https://www.elle.vn/wp-content/uploads/2019/10/poster-joker.jpg',
        title: 'Thằng Hề',
        genre: 'Hành Động',
        runtime: '120 phút',
        language: 'Anh (N/A)',
        subtitles: 'Phụ đề Tiếng Việt',
        rating: 'T18 (Dành cho người trên 18 tuổi)',
        ratingIcon: '18+',
        origin: 'Mỹ'
    },
    {
        src: 'https://m.media-amazon.com/images/I/818hyvdVfvL._AC_UF894,1000_QL80_.jpg',
        title: 'Người rơi',
        genre: 'Hài Kịch',
        runtime: '90 phút',
        language: 'Anh',
        subtitles: 'Phụ đề Tiếng Việt',
        rating: 'T13 (Dành cho trẻ em trên 13 tuổi)',
        ratingIcon: '13+',
        origin: 'Mỹ'
    },
    {
        src: 'https://img.posterstore.com/zoom/wb0039-8batman-redrain50x70_colorcorrectedonlyforweb.jpg',
        title: 'Bát man',
        genre: 'Hành Động',
        runtime: '120 phút',
        language: 'Anh (N/A)',
        subtitles: 'Phụ đề Tiếng Việt',
        rating: 'T18 (Dành cho người trên 18 tuổi)',
        ratingIcon: '18+',
        origin: 'Mỹ'
    },
    {
        src: 'https://m.media-amazon.com/images/I/615PoSEdJaL._AC_UF894,1000_QL80_.jpg',
        title: 'Tám người đàn ông giận dữ',
        genre: 'Hài Kịch',
        runtime: '90 phút',
        language: 'Anh',
        subtitles: 'Phụ đề Tiếng Việt',
        rating: 'T13 (Dành cho trẻ em trên 13 tuổi)',
        ratingIcon: '13+',
        origin: 'Mỹ'
    },
    {
        src: 'https://www.elle.vn/wp-content/uploads/2019/10/poster-joker.jpg',
        title: 'Thằng Hề',
        genre: 'Hành Động',
        runtime: '120 phút',
        language: 'Anh (N/A)',
        subtitles: 'Phụ đề Tiếng Việt',
        rating: 'T18 (Dành cho người trên 18 tuổi)',
        ratingIcon: '18+',
        origin: 'Mỹ'
    },
    {
        src: 'https://m.media-amazon.com/images/I/818hyvdVfvL._AC_UF894,1000_QL80_.jpg',
        title: 'Người rơi',
        genre: 'Hài Kịch',
        runtime: '90 phút',
        language: 'Anh',
        subtitles: 'Phụ đề Tiếng Việt',
        rating: 'T13 (Dành cho trẻ em trên 13 tuổi)',
        ratingIcon: '13+',
        origin: 'Mỹ'
    },
    {
        src: 'https://img.posterstore.com/zoom/wb0039-8batman-redrain50x70_colorcorrectedonlyforweb.jpg',
        title: 'Bát man',
        genre: 'Hành Động',
        runtime: '120 phút',
        language: 'Anh (N/A)',
        subtitles: 'Phụ đề Tiếng Việt',
        rating: 'T18 (Dành cho người trên 18 tuổi)',
        ratingIcon: '18+',
        origin: 'Mỹ'
    },
    {
        src: 'https://m.media-amazon.com/images/I/615PoSEdJaL._AC_UF894,1000_QL80_.jpg',
        title: 'Tám người đàn ông giận dữ',
        genre: 'Hài Kịch',
        runtime: '90 phút',
        language: 'Anh',
        subtitles: 'Phụ đề Tiếng Việt',
        rating: 'T13 (Dành cho trẻ em trên 13 tuổi)',
        ratingIcon: '13+',
        origin: 'Mỹ'
    }, {
        src: 'https://www.elle.vn/wp-content/uploads/2019/10/poster-joker.jpg',
        title: 'Thằng Hề',
        genre: 'Hành Động',
        runtime: '120 phút',
        language: 'Anh (N/A)',
        subtitles: 'Phụ đề Tiếng Việt',
        rating: 'T18 (Dành cho người trên 18 tuổi)',
        ratingIcon: '18+',
        origin: 'Mỹ'
    },
    {
        src: 'https://m.media-amazon.com/images/I/818hyvdVfvL._AC_UF894,1000_QL80_.jpg',
        title: 'Người rơi',
        genre: 'Hài Kịch',
        runtime: '90 phút',
        language: 'Anh',
        subtitles: 'Phụ đề Tiếng Việt',
        rating: 'T13 (Dành cho trẻ em trên 13 tuổi)',
        ratingIcon: '13+',
        origin: 'Mỹ'
    },
    {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh14Jnxt5S6tLQ9rmyVG_w9aXCMckHYKGigA&s',
        title: 'Lilo & Stitch',
        genre: 'Hoạt Hình',
        runtime: '120 phút',
        language: 'Anh (N/A)',
        subtitles: 'Phụ đề Tiếng Việt',
        rating: 'T13 (Dành cho trẻ em trên 13 tuổi)',
        ratingIcon: '13+',
        origin: 'Mỹ'
    },
    {
        src: 'https://i.ytimg.com/vi/e0g_ApQY3vE/hqdefault.jpg',
        title: 'Zootopia 2',
        genre: 'Hoạt Hình',
        runtime: '120 phút',
        language: 'Anh',
        subtitles: 'Phụ đề Tiếng Việt',
        rating: 'T13 (Dành cho trẻ em trên 13 tuổi)',
        ratingIcon: '13+',
        origin: 'Mỹ'
    },
];

export const movieSchedule = [
    {
        date: "2024-10-21",
        times: [
            { time: "09:00 AM", seatDiagram: "seatDiagram.json" },
            { time: "11:00 AM", seatDiagram: "seatDiagram.json" },
            { time: "14:00 PM", seatDiagram: "seatDiagram.json" },
            { time: "17:00 PM", seatDiagram: "seatDiagram.json" },
            { time: "20:00 PM", seatDiagram: "seatDiagram.json" }
        ]
    },
    {
        date: "2024-10-22",
        times: [
            { time: "09:00 AM", seatDiagram: "seatDiagram.json" },
            { time: "12:00 PM", seatDiagram: "seatDiagram.json" },
            { time: "15:00 PM", seatDiagram: "seatDiagram.json" },
            { time: "18:00 PM", seatDiagram: "seatDiagram.json" },
            { time: "21:00 PM", seatDiagram: "seatDiagram.json" }
        ]
    }, {
        date: "2024-10-23",
        times: [
            { time: "09:00 AM", seatDiagram: "seatDiagram.json" },
            { time: "11:00 AM", seatDiagram: "seatDiagram.json" },
            { time: "14:00 PM", seatDiagram: "seatDiagram.json" },
            { time: "17:00 PM", seatDiagram: "seatDiagram.json" },
            { time: "20:00 PM", seatDiagram: "seatDiagram.json" }
        ]
    },
    {
        date: "2024-10-23",
        times: [
            { time: "09:00 AM", seatDiagram: "seatDiagram.json" },
            { time: "12:00 PM", seatDiagram: "seatDiagram.json" },
            { time: "15:00 PM", seatDiagram: "seatDiagram.json" },
            { time: "18:00 PM", seatDiagram: "seatDiagram.json" },
            { time: "21:00 PM", seatDiagram: "seatDiagram.json" }
        ]
    },
    {
        date: "2024-10-25",
        times: [
            { time: "09:00 AM", seatDiagram: "seatDiagram.json" },
            { time: "11:00 AM", seatDiagram: "seatDiagram.json" },
            { time: "14:00 PM", seatDiagram: "seatDiagram.json" },
            { time: "17:00 PM", seatDiagram: "seatDiagram.json" },
            { time: "20:00 PM", seatDiagram: "seatDiagram.json" }
        ]
    },
    {
        date: "2024-10-26",
        times: [
            { time: "09:00 AM", seatDiagram: "seatDiagram.json" },
            { time: "12:00 PM", seatDiagram: "seatDiagram.json" },
            { time: "15:00 PM", seatDiagram: "seatDiagram.json" },
            { time: "18:00 PM", seatDiagram: "seatDiagram.json" },
            { time: "21:00 PM", seatDiagram: "seatDiagram.json" }
        ]
    },
    {
        date: "2024-10-27",
        times: [
            { time: "09:00 AM", seatDiagram: "seatDiagram.json" },
            { time: "11:00 AM", seatDiagram: "seatDiagram.json" },
            { time: "14:00 PM", seatDiagram: "seatDiagram.json" },
            { time: "17:00 PM", seatDiagram: "seatDiagram.json" },
            { time: "20:00 PM", seatDiagram: "seatDiagram.json" }
        ]
    },
    {
        date: "2024-10-28",
        times: [
            { time: "09:00 AM", seatDiagram: "seatDiagram.json" },
            { time: "12:00 PM", seatDiagram: "seatDiagram.json" },
            { time: "15:00 PM", seatDiagram: "seatDiagram.json" },
            { time: "18:00 PM", seatDiagram: "seatDiagram.json" },
            { time: "21:00 PM", seatDiagram: "seatDiagram.json" }
        ]
    },
    // Thêm tương tự cho các ngày khác...
];
