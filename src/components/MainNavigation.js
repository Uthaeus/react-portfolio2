import { NavLink } from "react-router-dom";

import navImage from '../assets/images/logo192.png';

function MainNavigation() {
    return (
        <div className="navigation-container">
            <h1>Homer J. Simpson</h1>

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