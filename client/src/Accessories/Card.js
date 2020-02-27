import React from "react";
import "./Card.css"

const Card = (props) =>{
    console.log("Card:")
    console.log(props.todo)
    let list = [];
    let i = 0;
    const uploadList = ( todo ) => {
        todo.todos.map(element => {
            list.push(
                <label className="container" key={i++}>{element.content}
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
            )
        });
        return list;
    }
    return (
        <div className="Card">
            <h4>{ props.todo.title }</h4>
            {uploadList( props.todo )}
            <button className="modButton">Modify</button>
        </div>
    )
}

export default Card;