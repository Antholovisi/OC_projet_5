import Logo from '../../Assets/img_banner1.png';
import './banner.scss';

function Banner () {
    return (
        <div className="banner">
            <img src={Logo} alt="paysage banner" />
            <div className="banner-text">
            Chez vous,<span className="second-line"> et partout ailleurs</span>
            </div>
        </div>
    );
}

export default Banner