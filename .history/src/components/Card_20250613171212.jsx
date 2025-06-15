import { useState } from 'react'
import './Card.css'


function Card(props) {



    return(
        <>
        <div id="card" on>
            <h2>{props.title}</h2>
            <img src={props.image} alt={props.title} />
        </div>
        </>
    )
}

export default Card;