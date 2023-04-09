import React from "react";
import logo from "../../assets/images/loader-icon.svg";
import "./Loader.css"


export default function Loader() {
        return <div className="loader--wrapper">
                    <img className="loader--image" src={logo} alt="Kasa logo."/>
                    <h2 className="loader--text">Chargement...</h2>
                </div>
}

