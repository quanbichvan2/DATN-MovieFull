import React, { useState, useEffect } from "react";
// import seatDiagramData from "../../assets/seatDiagram.json";
import seatService from "../../services/seatService";
import productService from "../../services/productService";
import categoryService from "../../services/categoryService";
import { Product } from "../../models/product";
import { Category } from "../../models/category";
interface Seat {
    seatNumber: string;
    type: "regular" | "vip" | "couple";
    isSelected?: boolean;
    isFirstCouple?: boolean;
    isSecCouple?: boolean;
    className: string;

}
interface Row {
    row: string;
    seats: Seat[];
}

interface Day {
    date: string;
    times: string[];
}

const BookingComponent: React.FC = () => {
    const [selectedDay, setSelectedDay] = useState<Day | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [seatDiagram, setSeatDiagram] = useState<Row[]>([]);
    // const [selectedSeats, setSelectedSeats] = useState({ regular: 0, vip: 0, couple: 0 });
    const [selectedSeats, setSelectedSeats] = useState<{ regular: number; vip: number; couple: number }>({ regular: 0, vip: 0, couple: 0 });
    const [maxSeats, setMaxSeats] = useState({ regular: 0, vip: 0, couple: 0 });
    const [countdown,] = useState<number>(300); // Giá trị ban đầu là 300 giây (5 phút)
    const totalPrice = 675000; // Giá trị tạm tính

    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    // useEffect(() => {
    //     if (selectedTime) {
    //         const processedSeatDiagram = seatDiagramData.map((row) => ({
    //             ...row,
    //             seats: row.seats.map((seat) => ({
    //                 ...seat,
    //                 type: seat.type as "regular" | "vip" | "couple",
    //                 isSelected: false,
    //                 className: ""
    //             })),
    //         }));
    //         setSeatDiagram(processedSeatDiagram);
    //     }
    // }, [selectedTime]);
    useEffect(() => {
        const fetchSeats = async () => {
            if (!selectedTime) return;
    
            try {
                const fetchedSeats = await seatService.getSeats(); // Lấy dữ liệu ghế từ API với thời gian chiếu đã chọn
                const processedSeatDiagram = fetchedSeats.map((row: { seats: any[]; }) => ({
                    ...row,
                    seats: row.seats.map((seat) => ({
                        ...seat,
                        type: seat.type as "regular" | "vip" | "couple",
                        isSelected: false,
                        className: ""
                    })),
                }));
                setSeatDiagram(processedSeatDiagram);
            } catch (error) {
                console.error("Failed to fetch seats:", error);
            }
        };
    
        fetchSeats();
    }, [selectedTime]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsData = await productService.getProducts();
                const categoriesData = await categoryService.getCategories();
                setProducts(productsData);
                setCategories(categoriesData); // Chuyển đổi thành instance của Category
            } catch (err) {
                setError("Failed to fetch data");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filterProductsByCategory = (categoryName: string) => {
        const category = categories.find(cat => cat.name.toLowerCase() === categoryName.toLowerCase());
        return category ? products.filter(product => product.categoryId === category.id) : [];
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
    const formatTime = (seconds: number): string => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    const movieSchedule: Day[] = [
        {
            date: "2024-10-21",
            times: ["09:00 AM", "11:00 AM", "14:00 PM", "17:00 PM", "20:00 PM"],
        },
        {
            date: "2024-10-22",
            times: ["09:00 AM", "12:00 PM", "15:00 PM", "18:00 PM", "21:00 PM"],
        },
        {
            date: "2024-10-23",
            times: ["09:00 AM", "11:00 AM", "14:00 PM", "17:00 PM", "20:00 PM"],
        },
        {
            date: "2024-10-24",
            times: ["09:00 AM", "12:00 PM", "15:00 PM", "18:00 PM", "21:00 PM"],
        }
    ];


    const handleSelectDay = (day: Day) => {
        setSelectedDay(day);
        setSelectedTime(null);
        setSeatDiagram([]);
    };

    const handleSelectTime = (time: string) => {
        setSelectedTime(time);
    };

    const handleSelectSeat = (seat: Seat, rowIndex: number, seatIndex: number) => {
        if (selectedSeats[seat.type] < maxSeats[seat.type] && !seat.isSelected) {
            setSelectedSeats((prev) => ({
                ...prev,
                [seat.type]: prev[seat.type] + (seat.type === "couple" ? 2 : 1),
            }));

            setSeatDiagram((prev) => {
                const updatedDiagram = [...prev];
                updatedDiagram[rowIndex].seats[seatIndex].isSelected = true;

                // Nếu là ghế đôi, chọn cả 2 ghế liền kề
                if (seat.type === "couple" && seatIndex < updatedDiagram[rowIndex].seats.length - 1) {
                    updatedDiagram[rowIndex].seats[seatIndex + 1].isSelected = true;
                }

                return updatedDiagram;
            });
        } else if (seat.isSelected) {
            setSelectedSeats((prev) => ({
                ...prev,
                [seat.type]: prev[seat.type] - (seat.type === "couple" ? 2 : 1),
            }));

            setSeatDiagram((prev) => {
                const updatedDiagram = [...prev];
                updatedDiagram[rowIndex].seats[seatIndex].isSelected = false;

                // Nếu là ghế đôi, bỏ chọn cả 2 ghế liền kề
                if (seat.type === "couple" && seatIndex < updatedDiagram[rowIndex].seats.length - 1) {
                    updatedDiagram[rowIndex].seats[seatIndex + 1].isSelected = false;
                }

                return updatedDiagram;
            });
        }
    };

    const handleTicketSelection = (type: "regular" | "vip" | "couple", increment: number) => {
        setMaxSeats((prev) => {
            const newMax = Math.max(prev[type] + increment * (type === "couple" ? 2 : 1), 0); // Thêm 2 ghế nếu là ghế đôi

            setSeatDiagram((prevDiagram) => {
                const updatedDiagram = prevDiagram.map((row) => {
                    // Duyệt qua từng ghế trong sơ đồ để điều chỉnh việc chọn/bỏ chọn
                    const updatedSeats = [...row.seats];

                    if (increment < 0) {
                        // Khi giảm ghế, bỏ chọn ghế đã chọn cuối cùng
                        for (let i = updatedSeats.length - 1; i >= 0; i--) {
                            if (updatedSeats[i].type === type && updatedSeats[i].isSelected) {
                                updatedSeats[i].isSelected = false;
                                if (type === "couple" && i > 0 && updatedSeats[i - 1].type === "couple") {
                                    updatedSeats[i - 1].isSelected = false; // Bỏ cả cặp ghế đôi
                                }
                                break; // Bỏ chọn chỉ một ghế (hoặc một cặp nếu là couple), sau đó dừng
                            }
                        }
                    }

                    return { ...row, seats: updatedSeats };
                });

                // Cập nhật số lượng ghế đã chọn
                setSelectedSeats((prevSelected) => ({
                    ...prevSelected,
                    [type]: Math.min(prevSelected[type], newMax),
                }));

                return updatedDiagram;
            });

            return { ...prev, [type]: newMax };
        });
    };

    const handleSubmit = () => {
        const totalSeats = selectedSeats.regular + selectedSeats.vip + selectedSeats.couple * 2;
        const totalMaxSeats = maxSeats.regular + maxSeats.vip + maxSeats.couple * 2;

        if (totalSeats === totalMaxSeats) {
            alert("Đặt vé thành công!");
        } else {
            alert("Bạn chưa mua đủ loại ghế.");
        }
    };

    const getDayOfWeek = (dateString: string) => {
        const daysOfWeek = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
        const date = new Date(dateString);
        return daysOfWeek[date.getDay()];
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        return `${day}/${month}`;
    };
    const formatCurrency = (amount: number | string) => {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ";
    };
    
    return (
        <div className="container" style={{ paddingTop: "80px" }}>
            <h1 style={{ marginBottom: "32px", textTransform: "uppercase", fontWeight: "1000", textAlign: "center" }}>
                Lịch Chiếu Phim
            </h1>

            {/* Chọn ngày chiếu */}
            <div className="d-flex justify-content-center mb-4">
                {movieSchedule.slice(0, 3).map((day, index) => (
                    <button
                        key={index}
                        className="btn btn-outline-warning date-btn"
                        id={`date${index + 1}`}
                        onClick={() => handleSelectDay(day)}
                    >
                        {formatDate(day.date)}<br />{getDayOfWeek(day.date)}
                    </button>
                ))}
            </div>

            {/* Chọn suất chiếu */}
            {selectedDay && (
                <div className="d-flex justify-content-center mb-4">
                    {selectedDay.times.map((time) => (
                        <button
                            key={time}
                            onClick={() => handleSelectTime(time)}
                            className={`btn ${selectedTime === time ? "btn btn-warning mx-2" : "btn btn-outline-warning mx-2"}`}
                        >
                            {time}
                        </button>
                    ))}
                </div>
            )}

            {/* Chọn loại vé */}
            {selectedTime && (
                <div>
                    <h2>Chọn Loại Vé</h2>
                    <div className="d-flex justify-content-around mb-4">
                        {["regular", "vip", "couple"].map((type) => (
                            <div className="ticket-box text-light p-3" style={{ minWidth: "400px" }} key={type}>
                                <h4>{type === "regular" ? "Ghế Thường" : type === "vip" ? "Ghế VIP" : "Ghế Đôi"}</h4>
                                <p style={{ color: "yellow", textTransform: "uppercase", fontWeight: "bold" }}>
                                    {type === "regular" ? "Đơn" : type === "vip" ? "Đơn" : "Đôi"}
                                </p>
                                <p style={{ textTransform: "uppercase", fontWeight: "bold" }}>
                                    {type === "regular" ? "45,000 VNĐ" : type === "vip" ? "70,000 VNĐ" : "100,000 VNĐ"}
                                </p>
                                <div className="d-flex align-items-center">
                                    <button
                                        className="btn btn-outline-secondary"
                                        onClick={() => handleTicketSelection(type as "regular" | "vip" | "couple", -1)}
                                    >
                                        -
                                    </button>
                                    <span style={{ margin: "0 10px" }}>
                                        {type === "couple" ? maxSeats[type as "couple"] / 2 : maxSeats[type as "regular" | "vip" | "couple"]}
                                    </span>
                                    <button
                                        className="btn btn-outline-secondary"
                                        onClick={() => handleTicketSelection(type as "regular" | "vip" | "couple", 1)}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Sơ đồ ghế */}
                    <h2>Sơ Đồ Rạp</h2>
                    <div>
                        <div className="screen" style={{ width: "100%", height: "50px", backgroundColor: "", margin: "20px 0" }}>Màn Hình Chiếu Phim</div>

                        {seatDiagram.map((row, rowIndex) => (

                            <div key={rowIndex} className="d-flex justify-content-center mb-2">
                                {row.seats.map((seat, seatIndex) => {
                                    // Xác định className cho ghế
                                    let seatClass = `seat ${seat.type} ${seat.isSelected ? "selected" : ""}`;
                                    seat.className = seatClass;
                                    let seatContent = seat.seatNumber; // Nội dung mặc định là số ghế hiện tại

                                    // Thêm class "coupled" cho ghế đầu tiên trong cặp
                                    if (seat.type === "couple") {
                                        if (seatIndex === 0 || (seatIndex !== 0 && row.seats[seatIndex - 1].type !== "couple")) {
                                            seatClass += " coupled";
                                            seat.className += " coupled";
                                            if (seatIndex + 1 < row.seats.length && row.seats[seatIndex + 1].type === "couple") {
                                                seatContent += `, ${row.seats[seatIndex + 1].seatNumber}`; // Hiển thị cả 2 ghế
                                            }
                                        } else if (seatIndex !== 0 && row.seats[seatIndex - 1].type === "couple" && row.seats[seatIndex - 1].className.includes("coupled")) {
                                            seatClass += " couples";
                                            seat.className += " couples";
                                            if (seatIndex + 1 < row.seats.length && row.seats[seatIndex + 1].type === "couple") {
                                                seatContent += `, ${row.seats[seatIndex + 1].seatNumber}`; // Hiển thị cả 2 ghế
                                            }
                                        } else if (seatIndex !== 0 && row.seats[seatIndex - 1].type === "couple" && row.seats[seatIndex - 1].className.includes("couples")) {
                                            seatClass += " coupled";
                                            seat.className += " coupled";
                                            if (seatIndex + 1 < row.seats.length && row.seats[seatIndex + 1].type === "couple") {
                                                seatContent += `, ${row.seats[seatIndex + 1].seatNumber}`; // Hiển thị cả 2 ghế
                                            }
                                        }
                                    }

                                    return (
                                        <span
                                            key={seatIndex}
                                            className={seatClass}
                                            title={seatClass.includes("coupled") ? seatContent : seat.seatNumber} // Thêm tiêu đề
                                            onClick={() => handleSelectSeat(seat, rowIndex, seatIndex)}
                                        >
                                            {seatClass.includes("coupled") ? seatContent : seat.seatNumber} {/* Hiển thị nội dung */}
                                        </span>
                                    );
                                })}
                            </div>
                        ))}

                    </div>
                    <div className="container-product" style={{ padding: "50px 0" }}>
                        <h2 className="text-center">CHỌN BẮP NƯỚC</h2>

                        {/* Hiển thị sản phẩm Thức ăn */}
                        <h4 className="text-center">Thức ăn</h4>
                        <div className="row d-flex justify-content-center">
                            {filterProductsByCategory('Bắp').map((product, index) => (
                                <div className="col-md-4" key={index}>
                                    <div className="item-box">
                                        <div className="item-image">
                                            <img src={product.image} alt={product.name} className="img-fluid" />
                                        </div>
                                        <div className="item-details">
                                            <div className="item-title">{product.name}</div>
                                            <p>{product.description}</p>
                                            <span className="item-price">{formatCurrency(product.price)}</span>
                                            <div className="mt-3">
                                                <button className="btn-quantity" onClick={() => console.log('Giảm số lượng')}>-</button>
                                                <input type="number" min="0" className="quantity-input mx-2" style={{ border: 'none' }} />
                                                <button className="btn-quantity" onClick={() => console.log('Tăng số lượng')}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Hiển thị sản phẩm Nước */}
                        <h4 className="text-center">Nước</h4>
                        <div className="row d-flex justify-content-center">
                            {filterProductsByCategory('Nước').map((product, index) => (
                                <div className="col-md-4" key={index}>
                                    <div className="item-box">
                                        <div className="item-image">
                                            <img src={product.image} alt={product.name} className="img-fluid" />
                                        </div>
                                        <div className="item-details">
                                            <div className="item-title">{product.name}</div>
                                            <p>{product.description}</p>
                                            <span className="item-price">{formatCurrency(product.price)}</span>
                                            <div className="mt-3">
                                                <button className="btn-quantity" onClick={() => console.log('Giảm số lượng')}>-</button>
                                                <input type="number" min="0" className="quantity-input mx-2" style={{ border: 'none' }} />
                                                <button className="btn-quantity" onClick={() => console.log('Tăng số lượng')}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="row text-start">
                        <div className="col-md-6">
                            <h5 style={{ fontWeight: 900 }}>Peaky Blinders - Bóng ma Anh Quốc</h5>

                            <h6>Rạp 7Cinema - P01 | 3 HSSV-Người Cao Tuổi, 1 Người Lớn</h6>
                            <p>2 Fanta 32oz, 1 Poca Wavy 54gr, 1 Combo Solo, 1 Combo Couple</p>
                        </div>
                        <div className="col-md-6 text-end">
                            <h5>
                                Thời gian giữ vé: <span>{formatTime(countdown)}</span>
                            </h5>
                            <h5>
                                Tạm tính: <span>{totalPrice.toLocaleString()} VNĐ</span>
                            </h5>
                            <button onClick={handleSubmit} className="btn btn-warning" id="reserveBtn">
                                Đặt Vé
                            </button>
                        </div>
                    </div>

                </div>
            )
            }
        </div >
    );
};

export default BookingComponent;
