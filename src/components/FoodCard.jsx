import React from "react";

const FoodCard = (props) => {
    return(
        <div className="food-card">
        <img src={props.image} alt={props.name} className="food-card-image"/>    
        <h1 className="food-title">{props.name}</h1>
        <h2>{props.cuisine} Cuisine</h2>
        <h2>{props.location}</h2>
        <a className="visit-btn" href={props.link} target="_blank" rel="noopener noreferrer">VISIT</a>
        </div>
    )
}

export default FoodCard