import React from "react";
import data from "../utils/slider.json";
import Propertiescard from "./Propertycard";

const Residencies = () => {
  return (
    <div >
      <div id="residencies"  style={{ width: '85%', margin: '0 auto', marginBottom:'100px' }}>
        <div >
          <span style={{ color: "orange" }}>Best Choices</span>
          <div style={{ color: '#1f3e72' }}>Popular Residencies</div>
        </div>
        {/* slider */}
        <Propertiescard/>
      </div>
    </div>
  );
};

export default Residencies;
