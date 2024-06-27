import React from 'react';
import './footer.scss';
import Logo from '../../Assets/logo_kasa_blanc.png';

function Footer() {
    return (
        <div className="footer">
            <div className="footerContent">
                <img src={Logo} alt="Logo Kasa orange" />
                <span>© 2020 Kasa. All <span className="second-line">rights reserved</span></span>
            </div>
        </div>
    );
}

export default Footer;
