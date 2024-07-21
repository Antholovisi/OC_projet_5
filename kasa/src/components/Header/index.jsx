import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../Assets/logo_kasa_orange.png';
import './header.scss';

// Définition du composant Header
function Header() {
  // Rendu du composant Header
  return (
    <div className="navContainer">
      <NavLink to="/">
        <img src={Logo} alt="Logo Kasa orange" />
      </NavLink>
      <nav className="navBar">
        <NavLink to="/" activeclassname="active">
          Accueil
        </NavLink>
        <NavLink to="/about" activeclassname="active">
          A propos
        </NavLink>
      </nav>
    </div>
  );
}

// Exportation du composant Header
export default Header;
