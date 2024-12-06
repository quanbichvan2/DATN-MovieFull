// Order.ts
export interface Order {
    id: number;
    date: string;
    activity: string;
    total: number;
    points: number;
    movieTitle?: string; // Không bắt buộc nếu không phải tất cả các đơn hàng đều có tiêu đề phim
    time?: string;       // Thuộc tính tùy chọn cho chi tiết đơn hàng
    hall?: string;
    comboFood?: string;
    tickets?: number;
    seats?: string;
  }
  

