import React from "react"
import Card from "../Accessories/Card"

function Main (props) {
    return (
        <div style={{padding:"16px"}}>
            <h1>ToDos</h1>
            <Card apiResponse={props.apiResponse} />
        </div>
    )
}

export default Main;