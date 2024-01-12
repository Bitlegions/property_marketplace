import React from 'react'
import { HiLocationMarker } from "react-icons/hi";

const Search = () => {
    return (
        <>
            <div className="d-flex align-items-center justify-content-center" style={{margin:'20px 20px', maxHeight:'10px'}}>
                <HiLocationMarker color="var(--blue)" size={35} />
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{ width: "100%",maxWidth: "360px" }}  />
            <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
            </div>
        </>
    )
}

export default Search