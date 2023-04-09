import React from "react";
import "./Tag.css"

// implement dropdown arrow function

// props are passed on from MainLogement
export default function Tag(props) {
    const tags = props.tags.map((item, index) => {
        return <div key={index} className="tag--wrapper">
            <span className="tag--title">{item}</span>
                </div>
    })
    return (
        <div className="tag--container">
            {tags}
        </div>
    )
}