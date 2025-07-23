// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Optionnel, si tu veux ajouter du style

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Voyage au Maroc</h2>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/a-propos">À propos</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
