import React from "react";
import "./Collapsible.css"
import downArrow from "../../assets/images/down-arrow.svg"
import { paragraph, list } from "../../assets/utils/Constants";

// implement collapsible arrow function

export default function Collapsible(props) {

    const [isShown, setIsShown] = React.useState(false)

    function toggle() {
        setIsShown(prev => !prev)
    }

    // managing content of the collapsible depending on type: paragraph or list
    let content 
    if(props.type === paragraph) {
        content = (<p className="collapsible--description">{props.description}</p>)

    } else if (props.type === list){
        const amenities = props.equipments.map((item, index) => <li key={index} className="collapsible--li">{item}</li>)
        content = (<ul className="collapsible--description">{amenities}</ul>)
    } 
    
    return (
        <article key={props.id} className="collapsible">
            <div onClick={toggle} className="collapsible--title-container">
                <h3 className="collapsible--title">{props.title}</h3>
                <img src={downArrow} className={isShown ? "collapsible--icon rotate" : "collapsible--icon"} alt="icône d'ouverture ou fermeture."/>
            </div>
            {isShown && <div className="collapsible--text-container animate">{content}</div>}
        </article>
    )
    } 
