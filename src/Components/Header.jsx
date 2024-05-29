// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src="../../images/RNLogo" alt="Logo" />
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
