import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProfileMenu = ({ user, logout }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '20px', overflow: 'hidden', cursor: 'pointer', marginLeft: '7vh' }} onClick={toggleDropdown} >
                <img src={user?.picture} alt="User Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ display: isDropdownOpen ? 'block' : 'none', borderRadius: '10px', position: 'absolute', top: '50px', right: '0', backgroundColor: '#f9f9f9', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', padding: '10px', zIndex: '1', width: '200px' }}>
                <ul style={{ listStyle: 'none', padding: '0', fontSize: '20px' }} >
                    <li>
                        <Link to="/favourites" style={{ display: 'block', padding: '5px', textDecoration: 'none', color: '#333' }}>
                            Favourites
                        </Link>
                    </li>
                    <li>
                        <Link to="/bookings" style={{ display: 'block', padding: '5px', textDecoration: 'none', color: '#333' }}>
                            Booking
                        </Link>
                    </li>
                    <li>
                        <a style={{ cursor: 'pointer', display: 'block', padding: '5px', textDecoration: 'none', color: '#333' }}
                            onClick={() => {
                                localStorage.clear();
                                logout()
                            }}>
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProfileMenu;


