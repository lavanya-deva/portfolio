import React from 'react';
import '../navbar.css';
const Navbar = () => {
    return (
        <nav className="navbar">
             <div className="navbar-logo">Lavanya Devarajan</div>
             <ul className="navbar-links">
                {/* <li><a href="/"></a></li> */}
                <li><a href="/">About</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/roles">RolesAndResponsibilities</a></li>
                <li><a href="/skills">Skill</a></li>
            </ul>      
        </nav>
    );
};
export default Navbar;