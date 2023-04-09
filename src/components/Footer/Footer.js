import React from "react";
import {Link} from "react-router-dom"
import logo from "../../assets/images/kasa-logo-white.png"
import "./Footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <Link to="/"><img src={logo} className="footer--logo" alt="Kasa logo." /></Link>
            <p className="footer--text">© 2023 Kasa. All rights reserved</p>
        </footer>
    )
}