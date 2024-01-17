import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const handleLogout = () =>{
        // localStorage.removeItem('token');
        // navigate('/login');
    }
    const {loginWithRedirect,isAuthenticated,user,logout} = useAuth0()
    return (
        <nav id='top' className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" style={{ fontSize: '30px' }} href="/">Property Marketplace</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/properties">Properties</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact-us">Contact Us</a> 
                    </li>
                    <li className="nav-item">
                        {/* <Link className="nav-link" to="#value">Add property</Link> */}
                    </li>
                    <div className="nav-item">
                        {!isAuthenticated ? 
                            <div className="d-flex">
                                <Link onClick={loginWithRedirect} className="btn btn-dark mx-1" role="button">Login</Link>
                            </div>
                         : 
                         <div>user profile</div>
                        }
                    </div>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
