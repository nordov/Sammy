import LogoIcon from '../app-assets/images/logo-icon.png';
import LogoText from '../app-assets/images/logo-text.png';

export const NavHeaderComponent = () => {

    return(
        <div className="nav-header">
            <a href="index.html" className="brand-logo">
                <img className="logo-abbr" src={ LogoIcon } alt="Sammy Icon" />
                <div className="brand-title">
                    <h2 className="">
                        <img src={ LogoText } alt="Sammy" />
                    </h2>
                </div>
            </a> 
            <div className="nav-control">
                <div className="hamburger">
                    <span className="line"></span><span className="line"></span><span className="line"></span>
                </div>
            </div>
        </div>
    );
}