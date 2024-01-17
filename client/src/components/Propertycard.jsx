import { truncate } from 'lodash';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Heart from './Heart';

const PropertyCard = ({ card, i }) => {
  const navigate = useNavigate();

  return (
    <div className="flexColStart r-card" style={{ gap: '0.5rem', padding: '1rem', borderRadius: '10px', maxWidth: 'max-content', margin: 'auto', transition: 'all-300ms-ease-in', position: 'relative', zIndex: 0, }}
      onClick={() => navigate(`../properties/${card.id}`)}

    >
      <div className="d-flex flex-wrap">
        <div key={i} style={{ width: '250px', marginRight: '0px', cursor: 'pointer' }} onClick={() => navigate(`../properties/${card.id}`)} >
          <Heart id={card.id} isFavorite={card.isFavorite} />
          <img src={card.image} alt="home" style={{ width: '250px', height: '10rem', borderRadius: '10px' }} />
          <div>
            <span style={{ color: 'orange', fontSize: '1.3rem' }}>$</span>
            <span style={{ fontSize: '1.3rem', fontWeight: 600, }}>{card.price}</span>
          </div>
          <div style={{ fontSize: '1.5rem' }} >{truncate(card.title, { length: 20 })}</div>
          <span style={{ fontSize: '0.9rem', fontWeight: 500, }} >{truncate(card.description, { length: 65 })}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;