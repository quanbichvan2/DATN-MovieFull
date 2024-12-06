import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
// import { SeatDTO, sampleSeats } from '../../models/screeningRoomDto'; // Đảm bảo đường dẫn đúng với file DTO
import { SeatType } from '../../models/seatDto';
import { createSeatType, getAllSeatsType } from '../../services/seatService';
import { v4 as uuidv4 } from 'uuid';
import { useAddSeatMutation, useSeatsTypeQuerry, useUpdateSeatMutation } from '../../hooks/useSeat';

const SeatManagement: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    // const [seatData, setSeatData] = useState<SeatType | null>(null);
    const [seatForm, setSeatForm] = useState<SeatType>({ id: uuidv4(), name: '', price: 0 });
    // const [seats, setSeats] = useState<SeatDTO[]>(sampleSeats); // Dữ liệu mẫu
    const [errors, setErrors] = useState<{ id?: string; name?: string; price?: number }>({});
    const [alertVisible, setAlertVisible] = useState(false); // State cho thông báo
    const [seatList, setSeatList] = useState<SeatType[]>([]); /// show seat

    const { data, isLoading } = useSeatsTypeQuerry()

    const seatsMutation = useAddSeatMutation()
    const seatsEditMutation = useUpdateSeatMutation()
    // useEffect(() => {
    //     const fetchSeats = async () => {
    //       try {
    //         const allSeats = await getAllSeatsType();
    //         console.log(allSeats);
    //         setSeatList(allSeats); // Lưu danh sách ghế vào trạng thái
    //       } catch (error) {
    //         console.error("Lỗi khi lấy danh sách ghế:", error);
    //       }
    //     };

    //     fetchSeats();
    //   }, []);

    const openSeatModal = (seat: SeatType | null = null) => {
        if (seat) {
            setSeatForm(seat);
            // setSeatData(seat); // Lưu seatData để chỉnh sửa
        } else {
            // setSeatForm({ id: uuidv4(), name: '', price: 0 }); // Ghế mới
            setSeatForm({id:'', name: '', price: 0 });
            // setSeatData(null); // Đặt seatData là null cho thêm mới
        }
        setShowModal(true);
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors: { id?: string; name?: string; price?: number } = {};

        // Kiểm tra mã ghế
        // if (!seatForm.id) {
        //     newErrors.id = "Mã ghế không được để trống";
        // } else if (!/^[A-Z0-9]*$/.test(seatForm.id)) {
        //     newErrors.id = "Mã ghế phải ghi hoa và không được có ký tự đặc biệt";
        // }

        // Kiểm tra tên ghế
        if (!seatForm.name) {
            newErrors.name = "Tên ghế không được để trống";
        }
        else if (!/^[\p{L}\p{N} `~]*$/u.test(seatForm.name)) {
            newErrors.name = "Tên ghế không được có ký tự đặc biệt";
        }

        // Kiểm tra giá tiền
        if (seatForm.price <= 1000) {
            newErrors.price = -1;
            // "Giá tiền phải lớn hơn 1000";
        }

        // Thiết lập lỗi nếu có
        setErrors(newErrors);

        // Kiểm tra xem có lỗi nào không
        if (Object.keys(newErrors).length > 0) {
            return; // Ngừng hàm nếu có lỗi
        }

        // if (seatData) {
        //     // Chỉnh sửa ghế
        //     setSeats(seats.map((seat) => (seat.code === seatData.code ? seatForm : seat)));
        // } else {
        //     // Thêm ghế mới
        //     setSeats([...seats, seatForm]);
        // }
        console.log(seatForm);
        try {
            // Gọi API tạo loại ghế mới
            // const newSeat = await createSeatType(seatForm); // `createSeat` nhận dữ liệu từ `seatForm`
            // Cập nhật danh sách loại ghế
            if (seatForm.id == '') {
                await seatsMutation.mutateAsync(seatForm)
                setAlertVisible(true);
                setTimeout(() => setAlertVisible(false), 3000);
                // Đóng modal
                setShowModal(false);
            }
            else{
                
                await seatsEditMutation.mutateAsync({seatForm , id: seatForm.id})
                // setSeatList([...seatList, newSeat]);
                // await fetchSeats();
                // Hiển thị thông báo thành công
                setAlertVisible(true);
                setTimeout(() => setAlertVisible(false), 3000);
    
                // Đóng modal
                setShowModal(false);
            }
        } catch (error) {
            console.error("Lỗi khi tạo loại ghế:", error);
        }
    };

    return (
        <div className="page-content">
            {/* Section Quản lý Phòng Chiếu */}
            <section className="row">
                <div className="col-12 col-lg-12">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between">
                            <h4>Danh Sách Ghế</h4>
                            <Button variant="outline-success" onClick={() => openSeatModal()}>Thêm Ghế Mới</Button>
                        </div>

                        <div className="card-body">
                            {isLoading && 'Loading...'}
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Mã</th>
                                            <th>Tên Ghế</th>
                                            <th>Giá</th>
                                            <th>Hoạt Động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.map((seat, index) => (
                                            // <tr key={seat.id || index}>
                                            <tr>
                                                {/* <td>{seat.id}</td> */}
                                                <td>{`SeatType ${String(index + 1).padStart(2, '0')}`}</td>
                                                <td>{seat.name}</td>
                                                {/* <td>{seat?.price} VND</td> */}
                                                <td>{seat?.price?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} </td>
                                                {/* <td>{seat?.price ? seat.price.toLocaleString() : 'Chưa có giá'} VND</td> */}
                                                <td>
                                                    <Button
                                                        variant="outline-info"
                                                        onClick={() => openSeatModal(seat)}
                                                    >
                                                        Chỉnh Sửa Ghế
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal Thêm/Sửa Ghế */}
                <Modal show={showModal} onHide={() => setShowModal(false)} backdrop="static">
                    <Modal.Header closeButton>
                        <Modal.Title>{seatForm.id ? 'Chỉnh Sửa Ghế' : 'Thêm Ghế Mới'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form id="seatForm" onSubmit={handleFormSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Mã Ghế</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={seatForm.id}
                                    // onChange={(e) => setSeatForm({ ...seatForm, id: e.target.value })}
                                    placeholder="Mã ghế tự động tạo"
                                    required
                                    readOnly
                                />
                                {errors.id && <span style={{ color: 'red' }}>{errors.id}</span>} {/* Hiển thị thông báo lỗi */}
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Tên Ghế</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={seatForm.name}
                                    onChange={(e) => setSeatForm({ ...seatForm, name: e.target.value })}
                                    placeholder="Nhập tên ghế"
                                    required
                                />
                                {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>} {/* Hiển thị thông báo lỗi */}
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Giá Tiền (VND)</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={seatForm.price}
                                    onChange={(e) => setSeatForm({ ...seatForm, price: Number(e.target.value) })}
                                    placeholder="Nhập giá tiền"
                                    required
                                />
                                {/* {errors.price && <span style={{ color: 'red' }}>{errors.price}</span>} Hiển thị thông báo lỗi */}
                                {errors.price === -1 && <span style={{ color: 'red' }}>Giá tiền phải lớn hơn 1000</span>}
                            </Form.Group>

                            <Button variant="primary" type="submit">Lưu Thay Đổi</Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>Đóng</Button>
                    </Modal.Footer>
                </Modal>

                {/* Thông báo thành công */}
                {alertVisible && (
                    <Alert variant="success" style={{ width: "400px", position: "absolute", top: "10px", right: "10px", zIndex: 1000 }}>
                        Lưu thành công!
                    </Alert>
                )}
            </section>
        </div>
    );
};

export default SeatManagement;
function fetchSeats() {
    throw new Error('Function not implemented.');
}

