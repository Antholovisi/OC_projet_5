import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../Assets/logo_kasa_orange.png';
import './header.scss';

function Header() {
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

export default Header;
