import React from 'react'

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" style={{ fontSize: '30px' }} href="/">Porperty Marketplace</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" aria-current="page" href="#residencies">Residencies</a>
                        <a className="nav-link" href="#value">Our Value</a>
                        <a className="nav-link" href="#contact-us">Contact Us</a>
                    </div> 
                </div>
            </div>
        </nav>
    )
}

export default Navbar