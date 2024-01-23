import React from 'react'
import { HiLocationMarker } from "react-icons/hi";

const Search = ({filter, setFilter}) => {
    return (
        <div>
            <div className="d-flex align-items-center justify-content-center" style={{margin:'20px 20px', maxHeight:'10px'}}>
                <HiLocationMarker color="var(--blue)" size={35} />
                <input
                 placeholder="Search by title/city/country..."
                 value={filter} onChange={(e)=> setFilter(e.target.value)} 
                 className="form-control mr-sm-2" type="search"  aria-label="Search" style={{ width: "100%",maxWidth: "360px" }}  />
            <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
            </div>
        </div>
    )
}

export default Search