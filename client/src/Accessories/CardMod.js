import React, { useState } from "react";
import "./Card.css"
import Editable from './Editable'

const CardMod = (props) =>{

    // State for the input
    const [task, setTask] = useState("")
    
    return (
        <div className="Card" style={{width:"700px"}}>
            <input 
                type="text" 
                className="inputField" 
                onKeyPress={
                    (e) => {
                        if (e.key === 'Enter') {
                            console.log('do validate');
                        }
                    }
                }
            />
            <Editable 
                text={task}
                placeholder="Give me some todos"
                type="input"
                className="editable"
            >
                <input 
                    type="text"
                    name="task"
                    placeholder="Give me some another todos"
                    value={task}
                    onChange={e => setTask(e.target.value)}
                />
            </Editable>
            <button className="saveBtn">Save</button>
        </div>
    )
}

export default CardMod;