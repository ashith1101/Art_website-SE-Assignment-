import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/artist-profile">Artist Profile</Link>
        </li>
        <li className="nav-item">
          <Link to="/events-management">Events & Programs</Link>
        </li>
        <li className="nav-item">
          <Link to="/ticketing-system">Ticketing</Link>
        </li>
        <li className="nav-item">
          <Link to="/digital-art-gallery">Art Gallery</Link>
        </li>
        <li className="nav-item">
          <Link to="/marketplace">Marketplace</Link>
        </li>
        <li className="nav-item">
          <Link to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
