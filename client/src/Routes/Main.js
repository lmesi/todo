import React, { useState, useEffect } from "react"
import Card from "../Accessories/Card"
import "../Accessories/Card.css"
import "./Main.css"

function Main (props) {
    const [todo, setTodo] = useState("");
    let i = 0;
    console.log(todo)

    useEffect(() => {
        console.log(props.data);
        props.data ? setTodo(props.data) : setTodo("");
    }, [props.data]);
    
    console.log("Main:")
    console.log(props.data)
    return (
        <div style={{padding:"16px", columnWidth: "30%"}}>
            <h1 style={{textAlign: "center"}}>ToDos</h1>
            {todo !== "" ?
                todo.map((todo) => 
                    <Card todo={todo} key={i++}/>
                ) :
                <p>Not yet</p>
                }
            <div className="Card">
                <button className="createBtn">+</button>
                <p>Add new todo</p>
            </div>
        </div>
    )
}

export default Main;