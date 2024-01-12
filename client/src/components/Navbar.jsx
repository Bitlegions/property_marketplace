import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav id='top' className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" style={{ fontSize: '30px' }} href="/">Porperty Marketplace</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" aria-current="page" to="/properties">Properties</Link>
                        <a className="nav-link" to="#contact-us" >Contact Us</a>
                        {/* <Link className="nav-link" to="#value">Add property</Link> */}
                        <div>
                            {!localStorage.getItem('token') ? <div className="d-flex">
                                <Link className="btn btn-dark mx-1 " to="/login" role="button">Login</Link>
                                <Link className="btn btn-dark mx-1" to="/signup" role="button">Signup</Link>
                            </div> : <button onClick={handleLogout} className="btn btn-light">Logout</button>}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar