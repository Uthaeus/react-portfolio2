import { NavLink } from "react-router-dom";

import navImage from '../../public/logo192.png';

function MainNavigation() {
    return (
        <div className="navigation-container">
            <div className="nav-image-wrapper">
                <img src={navImage} alt='' />
            </div>

            <div className="nav-links-wrapper">
                <NavLink to='/' end>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/projects'>Projects</NavLink>
            </div>
        </div>
    );
}

export default MainNavigation;