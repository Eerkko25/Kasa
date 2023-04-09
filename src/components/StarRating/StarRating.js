import React from "react";
import pinkVector from "../../assets/images/pink-star-vector.svg"
import greyVector from "../../assets/images/grey-star-vector.svg"
import "./StarRating.css"

export default function StarRating(props) {
    const ratingRange = [1, 2, 3, 4, 5]
    const stars = ratingRange.map((item, index) => {
      return props.rating >= item ? 
        <img key={index} src={pinkVector} className="star" alt="icône étoile pour note du logement"/> : 
        <img key={index} src={greyVector} className="star" alt="icône étoile pour note du logement"/>
    })
    return (
      <div className="star-rating">
        {stars}
      </div>
    );
  };