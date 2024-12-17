
import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    const [menuStatus, setMenuStatus] = useState(false);

    return (
        <>
            <div className='navDiv'>
                <h3>HealthCare</h3>


                <nav>
                    <ul className={`menuDiv ${menuStatus ? 'showMenu' : ''}`}>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/about-us'}>About</Link></li>
                        <li><Link to={'/doctor'}>Doctors</Link></li>
                        <li><Link to={'/contact-us'}>Contact Us</Link></li>
                        <li><Link to={'/appointment'} target="_blank"  rel="noopener noreferrer">Appointment</Link></li>
                    </ul>

                    <button
                        className="menuIcon"
                        onClick={() => setMenuStatus(!menuStatus)}
                    >
                        {menuStatus ? <span>&times;</span> : <span>&#9776;</span>}
                    </button>
                </nav>
            </div>
        </>
    );
}

