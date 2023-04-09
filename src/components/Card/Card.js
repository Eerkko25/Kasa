import React from "react";
import {Link} from "react-router-dom"
import "./Card.css"

export default function Card(props) {
    return (
        <Link to={`/fiche-logement/${props.item.id}`} className="card--link">
            <article id={props.item.id} className="card">
                    <img className="card--image" src={`${props.item.cover}`} alt={props.item.title}/>
                    <h2 className="card--title">{props.item.title}</h2>
            </article>
        </Link>
    )
}