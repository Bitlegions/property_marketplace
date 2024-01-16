import React from "react";
import useProperties from "../hooks/useProperties";
import PropertyCard from "./Propertycard";
import {PuffLoader} from 'react-spinners'



const Residencies = () => {
  const {data, isLoading, isError } = useProperties()
  if(isError){
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <span>Error while fetching data!</span>
    </div>
  }
  if(isLoading){
    return(
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height:'60vh', marginTop:'30vh'}}>
        <PuffLoader height="80" width="80" radius={1} color="#4066ff" aria-label='puff-loadingz' />
      </div>
    )
  }
  return (
    <div >
      <div id="residencies"  style={{ width: '85%', margin: '0 auto', marginBottom:'100px' }}>
        <div >
          <span style={{ color: "orange" }}>Best Choices</span>
          <div style={{ color: '#1f3e72' }}>Popular Residencies</div>
        </div>
        {/* slider */}
        {data.slice(0, 4).map((card, i) => (
          <PropertyCard card={card} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Residencies;
