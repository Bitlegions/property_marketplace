import React, { useState } from "react";
import PropertyCard from "../components/Propertycard";
import Search from "../components/Search";
import useProperties from "../hooks/useProperties";
import { PuffLoader } from "react-spinners";
import { property } from "lodash";

const Properties = () => {
  const { data, isLoading, isError } = useProperties();
  const [filter, setFilter] = useState("");
  if (isError) {
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <span>Error while fetching data!</span>
    </div>;
  }
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "60vh",
          marginTop: "30vh",
        }}
      >
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#4066ff"
          aria-label="puff-loadingz"
        />
      </div>
    );
  }
  return (
    <>
      <Search filter={filter} setFilter={setFilter} />
      <div className="d-flex flex-wrap" style={{ margin: "0 5vh" }}>
        {
          // data?.map((card,i)=> (<PropertyCard card={card} key={i} />))
          data
            .filter((property) =>
              property.title.toLowerCase().includes(filter.toLowerCase()) ||
              property.city.toLowerCase().includes(filter.toLowerCase()) ||
              property.country.toLowerCase().includes(filter.toLowerCase()) 
            )
            .map((card, i) => (
              <PropertyCard card={card} key={i} />
            ))
        }
      </div>
    </>
  );
};

export default Properties;
