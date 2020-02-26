import React from "react";
import "./Card.css"

const Card = (props) =>{
    console.log("Card:")
    console.log(props.apiResponse)
    /*let todos = [];
    props.apiResponse.todos.forEach(element => {
        todos.push(
            <label className="container">{element.content}
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
        )
    });*/
    return (
        <div className="Card">
            <h4>Title</h4>
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
            <button className="modButton">Modify</button>
        </div>
    )
}

export default Card;