import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="logo">UFRU</div>
            <div className="nav-links">
                <Link to="/" className="nav-item">
                    Home
                </Link>
                <Link to="/products" className="nav-item">
                    Products
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
