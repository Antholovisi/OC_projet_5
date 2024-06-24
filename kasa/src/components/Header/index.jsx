import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/logo_kasa_orange.png';
import './header.scss';
function Header() {

  return (
    <div className='navContainer'>
      <img src={Logo} alt="Logo Kasa orange" />
      <div className='navBar'>
      <Link to="/">Accueil</Link>
      <Link to="/a-propos">A propos</Link>
      </div>
    </div>
  );
}

export default Header;
