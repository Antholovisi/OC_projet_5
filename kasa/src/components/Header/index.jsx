import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../Assets/logo_kasa_orange.png';
import './header.scss';

function Header() {
  return (
    <div className="navContainer">
      <img src={Logo} alt="Logo Kasa orange" />
      <nav className="navBar">
        <NavLink exact to="/" activeClassName="active">
          Accueil
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          A propos
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
