import React from "react";
import './nav_bar.css';
import CV from './Regi_Loshi_CV.pdf';
const NavBar = () => {
    return(
        <nav>
            <ul>
                <li className="Options grow">
                <a href="#aboutme">
                About me
                </a>
                </li>
                <li className="Options grow">
                <a href="#projects">
                Projects
                </a>
                </li>
                <li className="Options grow">
                 <a href={CV} download='Regi_Loshi_CV'>
                 CV
                  </a>
                </li>
                <li  className="Contact grow"> 
                <a href='#contact'>Contact me 
                </a>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;