import React from "react"
import Card from "../Accessories/Card"

function Main (props) {
    /*let cards = [];
    cards.push(Card({
        apiResponse: props.apiResponse
    }));*/
    console.log("Main:")
    console.log(props.apiResponse)
    return (
        <div style={{padding:"16px"}}>
            <h1 style={{textAlign: "center"}}>ToDos</h1>
            <Card apiResponse={props.apiResponse} />
        </div>
    )
}

export default Main;