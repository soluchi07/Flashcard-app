import { useState } from 'react'
import './Card.css'


function Card(props) {



    return(
        <>
        <div id="card">
            <h2>{props.}</h2>
            <p>{props.description}</p>
            <img src={props.image} alt={props.title} />
            <button onClick={props.onClick}>Click Me</button>
        </div>
        </>
    )
}

export default Card;