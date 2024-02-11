import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuthCheck from '../hooks/useAuthCheck';
import AddPropertyModal from './AddPropertyModal';
import ProfileMenu from './ProfileMenu';

const Navbar = () => {
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0()
    const [modalOpened, setModalOpened] = useState(false)
    const { validateLogin } = useAuthCheck();


    const handleAddPropertyClick = () => {
        if (validateLogin()) {
            setModalOpened(true);
        }

    }

    return (
        <nav id='top' className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" style={{ fontSize: '30px' }} to='/' >Property Marketplace</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/properties">Properties</Link>
                    </li>

                    {/* Add proprerty button */}
                    <li className="nav-item">
                        <Link onClick={handleAddPropertyClick} className="nav-link" >Add property</Link>
                        <AddPropertyModal opened={modalOpened} setOpened={setModalOpened} />
                    </li>
                    {isAuthenticated ?
                        <li>
                            <li className="nav-item">
                                <Link to="/favourites" className="nav-link">
                                    Favourites
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/bookings" className="nav-link">
                                    Booking
                                </Link>
                            </li>
                        </li> :
                        null}

                    {/* login button */}
                </ul>
            </div>
            <div className="nav-item">
                {!isAuthenticated ?
                    <div className="d-flex" style={{ marginLeft: '5vh' }}>
                        <button onClick={() => loginWithRedirect()} className="btn btn-dark mx-1" role="button">Login</button>
                    </div>
                    :
                    <ProfileMenu user={user} logout={logout} />
                }
            </div>
        </nav>
    );
}

export default Navbar;
