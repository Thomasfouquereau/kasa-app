import React from "react";
import { Link } from "react-router-dom";
import "./NavBarStyle.css";
import Logo from "./LOGO.png";

export default function NavBar() {
    return (
        // bar de navigation
        <div className="navbar">
            <Link to="/"><img className="navbar-logo" src={Logo} alt="logo" /></Link>
            <div className="navbar-links">
                {/* lien des pages home et a propos */}
                <Link to="/"><span className="name-links">Home</span></Link>
                <Link to="/A-Propos"><span className="name-links">A Propos</span></Link>
            </div>
        </div>
    );
}