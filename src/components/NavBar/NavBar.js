import React from "react";
import { Link } from "react-router-dom";
import "./NavBarStyle.css";

export default function NavBar() {
    return (
        <div className="navbar">
            <img className="navbar-logo" src={process.env.PUBLIC_URL + '/LOGO.png'} alt="logo" />
            <div className="navbar-links">
                <Link to="/"><span className="name-links">Home</span></Link>
                <Link to="/A-Propos"><span className="name-links">A Propos</span></Link>
            </div>
        </div>
    );
}
