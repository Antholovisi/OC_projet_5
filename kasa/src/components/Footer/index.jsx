import React from 'react';
import './footer.scss';
import Logo from '../../Assets/logo_kasa_blanc.png';

// Définition du composant Footer
function Footer() {
  // Rendu du composant Footer
  return (
    <div className="footer">
      <div className="footerContent">
        <img src={Logo} alt="Logo Kasa orange" />
        <span>
          © 2020 Kasa. All <span className="second-line">rights reserved</span>
        </span>
      </div>
    </div>
  );
}

// Exportation du composant Footer
export default Footer;
