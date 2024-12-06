import "../../assets/css/promotion.prefixed.css";
import React from 'react';
import PromotionItem from '../../components/promotion/promotionItem';

const Promotions: React.FC = () => {
  return (
    <div className="promotion">
      <div className="container">
      <h2 className="promotionTitle text-center">Khuyến Mãi</h2>

      <PromotionItem
        title="CSTUDENT - 45K CHO HỌC SINH SINH VIÊN"
        conditions={[
          "HSSV xuất trình thẻ HSSV hoặc CCCD từ dưới 22 tuổi",
          "Giảng viên/ giáo viên xuất trình thẻ giảng viên."
        ]}
        notes={[
          "Mỗi thẻ mua được một vé.",
          "Không áp dụng cho các ngày Lễ, Tết, hoặc suất chiếu có phụ thu từ nhà phát hành phim."
        ]}
        buttonText="ĐẶT VÉ NGAY"
        imageSrc="https://api-website.cinestar.com.vn/media/.renditions/wysiwyg/CMSPage/Promotions/c_student.png"
        altText="Khuyến Mãi 45k"
      />

      <PromotionItem
        title="HAPPY WEDNESDAY – THỨ TƯ VUI VẺ – GIÁ VÉ HẠT DẺ"
        conditions={[
          "Đồng giá 55K/2D vào mỗi Thứ Tư hàng tuần",
          "Áp dụng toàn quốc",
          "Mỗi vé được áp dụng phụ thu định dạng rạp",
          "Không áp dụng đồng thời cùng các chương trình khác"
        ]}
        buttonText="ĐẶT VÉ NGAY"
        imageSrc="https://api-website.cinestar.com.vn/media/.renditions/wysiwyg/CMSPage/Promotions/C_TEN.png"
        altText="Khuyến Mãi Thứ Tư Vui Vẻ"
      />

      <PromotionItem
        title="KHÁCH HÀNG DƯỚI 22 TUỔI"
        conditions={[
          "Giá vé chỉ từ 55,000 đồng",
          "Suất chiếu nào, thời điểm nào cũng được áp dụng",
          "Dành cho thành viên dưới 22 tuổi",
          "Giá vé áp dụng trực tiếp tại quầy"
        ]}
        buttonText="ĐẶT VÉ NGAY"
        imageSrc="https://api-website.cinestar.com.vn/media/.renditions/wysiwyg/CMSPage/Member/monday_1_.jpg"
        altText="Khuyến Mãi Dưới 22 tuổi"
      />

      <PromotionItem
        title="C'TEN - HAPPY HOUR - 45K/2D MỐC 10H"
        conditions={[
          "Áp dụng giá 45K/ 2D và 55K/ 3D"
        ]}
        notes={[
          "Khách hàng là thành viên C’FRIEND hoặc C’VIP",
          "Áp dụng tại App/Web 7Cinema",
          "Không áp dụng cho các ngày lễ/tết"
        ]}
        buttonText="ĐẶT VÉ NGAY"
        imageSrc="https://api-website.cinestar.com.vn/media/.renditions/wysiwyg/CMSPage/Promotions/C_MEMBER.png"
        altText="Khuyến Mãi 45k"
      />
    </div>
    </div>
  );
};

export default Promotions;
