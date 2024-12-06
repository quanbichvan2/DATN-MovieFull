import React from 'react';

interface PromotionListProps {
  conditions: string[];
  notes?: string[];
}

const PromotionList: React.FC<PromotionListProps> = ({ conditions, notes }) => {
  return (
    <ul className="promotionList">
      <strong>Điều kiện</strong>
      {conditions.map((condition, index) => (
        <li key={index}>{condition}</li>
      ))}
      {notes && (
        <>
          <strong>Lưu ý</strong>
          {notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </>
      )}
    </ul>
  );
};

export default PromotionList;
