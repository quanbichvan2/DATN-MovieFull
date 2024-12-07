import { SeatType } from "../../../models/seat"

interface ticketSelectSeatProps{
    seat: SeatType
    selectedSeatNumber:number
}
const TicketSelectSeat = ({seat,selectedSeatNumber}:ticketSelectSeatProps)=>{
    
    return (
            <div key={seat.id} className="ticket-box text-light p-3" style={{ minWidth: "400px" }}>
                <h4>{seat.name}</h4> {/* Tên loại ghế */}
                <p>{seat.price.toLocaleString()} VND</p> {/* Giá loại ghế */}
                {/* Điều chỉnh số lượng ghế */}
                <div className="d-flex align-items-center">
                    <span style={{ margin: "0 10px" }}>
                            {selectedSeatNumber}
                    </span>
                </div>
            </div>
        
    )
}

export {TicketSelectSeat}