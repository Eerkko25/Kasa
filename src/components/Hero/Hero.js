import React from "react";
import "./Hero.css"

export default function Hero(props) {
    return (
        <section className="hero">
            <img src={props.image} className="hero--image" alt="Paysage en plan large" />
            {props.title && <h1 className="hero--title">{props.title}</h1>}
        </section>
    )
}