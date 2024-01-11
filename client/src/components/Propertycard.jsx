import React from 'react'
import data from "../utils/slider.json";
// import './PropertyCard.css'
// import { truncate } from 'lodash'
import { useNavigate } from "react-router-dom";
import Heart from "./Heart";

const PropertyCard = () => {

  const navigate = useNavigate();
  return (
    <div className="flexColStart r-card" style={{ position: 'relative',  marginTop: '50px' }} onClick={() => navigate(`../properties/${card.id}`)}>
      <div className="d-flex">
        {data.map((card, i) => (
          <div key={i} style={{ width: "300px", marginRight: "20px" }}>
            <Heart id={card?.id} />
            <img src={card.image} alt="home" style={{ width: "100%", height: '200px', objectFit: 'cover' }} />
            <span >
              <span style={{ color: "orange" }}>$</span>
              <span>{card.price}</span>
            </span>
            <div >{card.name}</div>
            <span >{card.detail}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PropertyCard;