import React from 'react';
import PromotionImage from './promotionImage';
import PromotionList from './promotionList';
import { Link } from 'react-router-dom';

interface PromotionProps {
  title: string;
  conditions: string[];
  notes?: string[];
  buttonText: string;
  imageSrc: string;
  altText: string;
  imageClassName?: string;
}

const PromotionItem: React.FC<PromotionProps> = ({ title, conditions, notes, buttonText, imageSrc, altText, imageClassName }) => {
  return (
    <div className="promotionRow row">
      {/* Thông tin khuyến mãi */}
      <div className="promotionRow-infor col-md-6">
        <h3 className="text-light">{title}</h3>
        <PromotionList conditions={conditions} notes={notes} />
        <Link to='/schedule-movie' className="btn btnBooking btn-hoverEffect">{buttonText}</Link>
      </div>
      {/* Hình ảnh khuyến mãi */}
      <PromotionImage src={imageSrc} altText={altText} className={imageClassName} />
    </div>
  );
};

export default PromotionItem;
