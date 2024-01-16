import { truncate } from 'lodash';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Heart from './Heart';

const PropertyCard = ({ card, i }) => {
  const navigate = useNavigate();
  console.log(card);

  return (
    <div className="flexColStart r-card" style={{ gap: '0.6rem', padding: '1rem', borderRadius: '10px', maxWidth: 'max-content', margin: 'auto', transition: 'all-300ms-ease-in', position: 'relative', zIndex: 0, }} >
      <div className="d-flex flex-wrap">
        <div key={i} style={{ width: '300px', marginRight: '20px', cursor: 'pointer' }} onClick={() => navigate(`../properties/${card.id}`)} >
          <Heart id={card.id} isFavorite={card.isFavorite} />
          <img src={card.image} alt="home" style={{ width: '15rem', height: '10rem', borderRadius: '10px' }} />
          <span>
            <span style={{ color: 'orange' }}>$</span>
            <span>{card.price}</span>
          </span>
          <div>{truncate(card.title, { length: 15 })}</div>
          <span>{truncate(card.description, { length: 18 })}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
