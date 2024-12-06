import React from 'react';

interface PromotionImageProps {
  src: string;
  altText: string;
  className?: string;
}

const PromotionImage: React.FC<PromotionImageProps> = ({ src, altText, className }) => {
  return (
    <div className="promotionRow-img col-md-6 text-center">
      <img src={src} alt={altText} className={className || "imagePromotion"} />
    </div>
  );
};

export default PromotionImage;
