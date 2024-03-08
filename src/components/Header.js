import React from "react";
import Logo from "./Logo";
import "../assets/styles/Header.css"

const Header = () => {
    return (
        <header>
            
            <nav>
                <Logo />
                <ul>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Skills</a>
                    </li>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
            
        </header>
    )
}

export default Header;