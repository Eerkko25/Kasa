import React from "react";
import {NavLink } from "react-router-dom"
import logo from "../../assets/images/kasa-logo-pink.png";

import "./Navbar.css"

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/"><img src={logo} className="logo" alt="Kasa logo." /></NavLink>
                </li>
                <li className="align-right">
                    <NavLink to="/" className={(navData) => (navData.isActive ? "active" : 'none')}>Accueil</NavLink>
                </li>
                <li>
                    <NavLink to="/a-propos" className={(navData) => (navData.isActive ? "active" : 'none')} >À Propos</NavLink>
                </li>
            </ul>
        </nav>
    )
}