import React, { useState, useEffect } from "react";
import seatDiagramData from "../../assets/seatDiagram.json";

import seatService from "../../services/seatService";
import productService from "../../services/productService";
import categoryService from "../../services/categoryService";
import { Product } from "../../models/product";
import { Category } from "../../models/category";
import { ListTime, Show } from '../../models/show';

import { SnackComponent } from "./snack";

import { Link } from "react-router-dom";
import { SeatTypeDTO } from "../../models/seat";
import hallService from "../../services/hallService";
// import { useSeatsTypeQuerry } from "../../hooks/useSeatType";
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


interface BookingComponentProps {
    shows: Show | undefined;
    // movie: Movie

}

const BookingComponent: React.FC<BookingComponentProps> = (shows) => {
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [seatDiagram, setSeatDiagram] = useState<any[]>([]);
    const [selectedSeats, setSelectedSeats] = useState<{ regular: number; vip: number; couple: number }>({ regular: 0, vip: 0, couple: 0 });
    const [countdown,] = useState<number>(300); // Giá trị ban đầu là 300 giây (5 phút)
    const totalPrice = 675000; // Giá trị tạm tính

    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const [selectedDay, setSelectedDay] = useState<ListTime | null>();
    const [availableTimes, setAvailableTimes] = useState<string[]>([]);

    const [seatTypes, setSeatTypes] = useState<SeatTypeDTO[]>([]);
    const [maxSeats, setMaxSeats] = useState<{ regular: number; vip: number; couple: number }>({ regular: 0, vip: 0, couple: 0 });

    const [hallId, setHallId] = useState<string>("");

    const loadSeatDiagam = async () => {
        if (hallId == "") return;
        const hallData = await hallService.getHallById(hallId);
        
        updateMaxSeatByDiagramSeat(hallData.seats);

        const rowMapping = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J' ];
        let diagram : any[] = [];
        rowMapping.forEach(x => {
            const rowSeats = hallData.seats.filter(y => y.row === x);
            const orderedSeat : any[] = [];

            for(let i = 1; i < 11; i++) {
                const seat = rowSeats.find(x => x.seatNumber.includes(i));
                orderedSeat.push(seat);
            }

            diagram.push({
                row: x,
                seats: orderedSeat
            })
        });

        console.log('#9', diagram);
        setSeatDiagram(diagram);
    }

    const updateMaxSeatByDiagramSeat = (seats: any) => {
        const total = seats.length;
        console.log('#6', seats);
        const regularTotal = seats.filter((x: any) => x.type === "regular").length;
        const coupleTotal = seats.filter((x: any) => x.type === "couple").length;
        const vipTotal = total - regularTotal - coupleTotal;

        const totalSeat = {
            regular: regularTotal,
            vip: vipTotal,
            couple: coupleTotal
        };

        setMaxSeats(totalSeat);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsData = await productService.getProducts();
                const categoriesData = await categoryService.getCategories();
                const seatTypeData = await seatService.getAllSeatsType();
                
                setProducts(productsData);
                setCategories(categoriesData); // Chuyển đổi thành instance của Category
                setSeatTypes(seatTypeData);

            } catch (err) {
                setError("Failed to fetch data");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        loadSeatDiagam();
    }, [hallId])

    const filterProductsByCategory = (categoryName: string) => {
        const category = categories.find(cate => cate.name.toLowerCase() === categoryName.toLowerCase());
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

    const handleSelectDay = (day: ListTime, hallId: string) => {
        setSelectedDay(day);
        setAvailableTimes(day.showTimes.map((showTime) => showTime.time));
        setHallId(hallId);
        setSeatDiagram([]);
    };

    const handleSelectTime = (time: string) => {
        setSelectedTime(time);
    };

    const handleSelectSeat = (seat: Seat, rowIndex: number, seatIndex: number) => {
        const seatType = seat.type;
        const isSeatSelected = seat.isSelected;

        // Cập nhật số ghế đã chọn
        setSelectedSeats((prev) => {
            const updatedSeats = { ...prev };

            // Nếu ghế chưa được chọn và số ghế chưa đạt tối đa
            if (!isSeatSelected && selectedSeats[seatType] < maxSeats[seatType]) {
                // Nếu ghế đôi, cộng 2 ghế vào, nếu không thì cộng 1 ghế
                updatedSeats[seatType] += (seatType === "couple" ? 2 : 1);
            } else if (isSeatSelected) {
                // Nếu ghế đã được chọn, giảm số ghế đã chọn
                updatedSeats[seatType] -= (seatType === "couple" ? 2 : 1);
            }

            return updatedSeats;
        });

        // Cập nhật trạng thái ghế trong sơ đồ ghế
        setSeatDiagram((prev) => {
            const updatedDiagram = [...prev];
            const selectedSeat = updatedDiagram[rowIndex].seats[seatIndex];

            // Nếu là ghế đôi, chọn cả 2 ghế liền kề
            if (seatType === "couple" && seatIndex < updatedDiagram[rowIndex].seats.length - 1) {
                updatedDiagram[rowIndex].seats[seatIndex].isSelected = !isSeatSelected;
                updatedDiagram[rowIndex].seats[seatIndex + 1].isSelected = !isSeatSelected;
            } else {
                selectedSeat.isSelected = !isSeatSelected;
            }

            return updatedDiagram;
        });
    };

    const handleTicketSelection = (type: "regular" | "vip" | "couple", increment: number) => {
        const updatedSeats = { ...selectedSeats };

        if (type === "couple") {
            if (updatedSeats[type] + increment * 2 >= 0) {
                updatedSeats[type] += increment * 2;
            }
        } else {
            if (updatedSeats[type] + increment >= 0) {
                updatedSeats[type] += increment;
            }
        }

        setSelectedSeats(updatedSeats);
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

    return (
        <div className="container" style={{ paddingTop: "80px" }}>
            <h1 style={{ marginBottom: "32px", textTransform: "uppercase", fontWeight: "1000", textAlign: "center" }}>
                Lịch Chiếu Phim
            </h1>
            <div className="d-flex flex-column align-items-center mb-4">
                <h3>Suất Chiếu</h3>
                {/* <div className="d-flex justify-content-center"> */}
                <div>
                    {shows.shows?.listHall.map((hall, index) => (
                        <div
                            key={hall.hallId}

                            id={`show${index + 1}`}
                        // onClick={() => handleSelectShow(show)}
                        >
                            {
                                hall.listTime.map((time, index) => (
                                    <button
                                        className="btn btn-outline-warning date-btn mb-2"
                                        key={index}
                                        onClick={() => handleSelectDay(time, hall.hallId)}
                                    >
                                        {time.startTime}
                                    </button>
                                ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Chọn suất chiếu */}
            <div className="d-flex justify-content-center mb-4">
                {availableTimes.map((time, index) => (
                    <button
                        key={index}
                        className={`btn ${selectedTime === time ? "btn-warning" : "btn-outline-primary"} time-btn mx-2 mb-2`}
                        onClick={() => handleSelectTime(time)}
                    >
                        {time}
                    </button>
                ))}
            </div>

            {/* Chọn loại vé */}
            {selectedTime && (
                <div>
                    <h2>Chọn Loại Vé</h2>
                    <div className="d-flex justify-content-around mb-4">
                        {seatTypes.map((seatType) =>
                            (
                                <div key={seatType.id} className="ticket-box text-light p-3" style={{ minWidth: "400px" }}>
                                    <h4>{seatType.name}</h4> {/* Tên loại ghế */}
                                    <p style={{ color: "yellow", textTransform: "uppercase", fontWeight: "bold" }}>
                                        {seatType.type === "regular" ? "Đơn" : seatType.type === "vip" ? "Đơn" : "Đôi"}
                                    </p>

                                    <p>{seatType.price.toLocaleString()} VND</p> {/* Giá loại ghế */}

                                    {/* Điều chỉnh số lượng ghế */}
                                    <div className="d-flex align-items-center">
                                        <button
                                            className="btn btn-outline-secondary"
                                            onClick={() => handleTicketSelection(seatType.type, -1)} // Giảm số lượng ghế
                                        >
                                            -
                                        </button>
                                        <span style={{ margin: "0 10px" }}>

                                            {seatType.name === "Ghế đôi"
                                                ? selectedSeats[seatType.type] / 2 // Hiển thị số lượng ghế đôi đã chọn
                                                : selectedSeats[seatType.type]}  {/* Hiển thị số ghế đã chọn */}
                                        </span>
                                        <button
                                            className="btn btn-outline-secondary"
                                            onClick={() => handleTicketSelection(seatType.type, 1)} // Tăng số lượng ghế
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            )
                        )}
                    </div>

                    {/* Sơ đồ ghế */}
                    <h2>Sơ Đồ Rạp</h2>
                    <div>
                        <div className="screen" style={{ width: "100%", height: "50px", backgroundColor: "", margin: "20px 0" }}>Màn Hình Chiếu Phim</div>

                        {seatDiagram.map((row, rowIndex) => (

                            <div key={rowIndex} className="d-flex justify-content-center mb-2">
                                {row.seats.map((seat: any, seatIndex: any) => {
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
                        <h4 className="text-center" style={{ color: "yellow", fontSize: '2rem', marginBottom: '3rem' }}>Thức ăn</h4>
                        <div className="row d-flex justify-content-center">
                            {filterProductsByCategory('Bắp').map((product, index) => (
                                <div className="col-md-4" key={index}>
                                    <SnackComponent product={product} />
                                </div>
                            ))}
                        </div>
                        {/* Hiển thị sản phẩm Nước */}
                        <h4 className="snack text-center" style={{ color: "yellow", fontSize: '2rem', marginBottom: '3rem' }}>Nước</h4>
                        <div className="row d-flex justify-content-center">
                            {filterProductsByCategory('Nước').map((product, index) => (
                                <div className="col-md-4" key={index}>
                                    <SnackComponent product={product} />
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="row text-start">
                        <div className="col-md-6">
                            <h5 style={{ fontWeight: 900 }}>
                                {shows.shows?.movieTitle}
                            </h5>

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
                            {/* <button onClick={handleSubmit} className="btn btn-warning" id="reserveBtn">
                                Đặt Vé
                            </button> */}
                            <Link className="btn btn-warning" to={"/payment"}>Đặt Vé</Link>
                        </div>
                    </div>

                </div>
            )
            }
        </div >
    );
};

export default BookingComponent;
