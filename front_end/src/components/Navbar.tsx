import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="nav">
      <div className="brand">UN-FILTERED</div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">Browse All</Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="register-button">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
