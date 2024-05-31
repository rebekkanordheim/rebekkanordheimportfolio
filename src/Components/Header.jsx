// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Logo from '../images/FullLogoTransparent.png';

const Header = () => {
    return (
        <header>
            <nav className='nav'>
                <div className="logo">
                    <Link to='/'>
                        <img src={Logo} alt="Logo" />
                    </Link>
                </div>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
