import React from "react";
import "./FooterStyle.css";
import Logo from "./LOGO.svg";

export default function Footer() {
    return (
        // footer des pages
        <div className="footer">
            <img className="navbar-logo" src={Logo} alt="logo" />
            <span className="footer-copyright">© 2020 Kasa. All rights reserved</span>
        </div>
    );
}