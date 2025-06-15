import { useState } from 'react'

function Card(props) {
    


    return(
        <>
        <div id="card">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <img src={props.image} alt={props.title} />
            <button onClick={props.onClick}>Click Me</button>
        </div>
        </>
    )
}

export default Card;