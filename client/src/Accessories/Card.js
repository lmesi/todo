import React from "react";
import "./Card.css"

const Card = (props) =>{
    return (
        <div className="Card">
            <h4>{props.apiResponse}</h4>
            <label className="container">One
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
            <label className="container">Two
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
            <label className="container">Three
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
            <button className="modButton">Create</button>
        </div>
    )
}

export default Card;