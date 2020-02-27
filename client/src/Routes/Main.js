import React, { useState, useEffect } from "react"
import Card from "../Accessories/Card"

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
        <div style={{padding:"16px"}}>
            <h1 style={{textAlign: "center"}}>ToDos</h1>
            {todo !== "" ?
                todo.map((todo) => 
                    <Card todo={todo} key={i++}/>
                ) :
                <p>Not yet</p>
                }
        </div>
    )
}

export default Main;