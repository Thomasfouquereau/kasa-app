import React from "react";
import "./FooterStyle.css";

export default function Footer() {
    return (
        <div className="footer">
            <img className="navbar-logo" src={process.env.PUBLIC_URL + '/LOGO.svg'} alt="logo" />
            <span className="footer-copyright">© 2020 Kasa. All rights reserved</span>
        </div>
    );
}