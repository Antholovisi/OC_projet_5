import Logo from '../../Assets/img_banner1.png';
import './banner.scss';

function Banner () {
    return (
        <div className="banner">
            <img src={Logo} alt="paysage banner" />
            <div className="banner-text">
                Chez vous, et partout ailleurs
            </div>
        </div>
    );
}

export default Banner