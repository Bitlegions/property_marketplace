import React from "react";
import data from "../utils/slider.json";

const Residencies = () => {
  return (
    <div >
      <div id="residencies"  style={{ width: '85%', margin: '0 auto', marginBottom:'100px' }}>
        <div >
          <span style={{ color: "orange" }}>Best Choices</span>
          <div style={{ color: '#1f3e72' }}>Popular Residencies</div>
        </div>
        {/* slider */}
        <div className="d-flex"  >
          {data.map((card, i) => (
            <div key={i} style={{ width: "200px", marginRight: "20px" }}>
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
    </div>
  );
};

export default Residencies;
