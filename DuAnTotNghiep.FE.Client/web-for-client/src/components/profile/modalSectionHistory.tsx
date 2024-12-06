import React from 'react';
import { Order } from './order';


interface OrderDetailModalProps {
  show: boolean;
  onClose: () => void;
  order: Order | null; // Allow for null if no order is selected
}

const OrderDetailModal: React.FC<OrderDetailModalProps> = ({ show, onClose, order }) => {
  if (!order) return null; // Return null nếu không có đơn hàng nào được chọn

  return (
    <div className={`modal fade ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }} tabIndex={-1} aria-labelledby="orderDetailLabel" aria-hidden={!show}>
      <div className="modal-dialog" style={{ color: 'black' }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="orderDetailLabel">Chi tiết đơn hàng</h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p><strong>Tên phim:</strong> {order.movieTitle}</p>
            <p><strong>Thời gian:</strong> {order.time}</p>
            <p><strong>Phòng chiếu:</strong> {order.hall}</p>
            <p><strong>Số vé:</strong> {order.tickets}</p>
            <p><strong>Số ghế:</strong> {order.seats}</p>
            <p><strong>Combo:</strong> {order.comboFood}</p>
            <p><strong>Tổng tiền:</strong> {order.total.toLocaleString('vi-VN')} VNĐ</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-custom" onClick={onClose}>Tải vé về</button>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Export component
 */
export default OrderDetailModal;

