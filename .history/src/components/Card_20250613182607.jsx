import { useState } from 'react'
import './Card.css'


function Card(props) {



    return(
        <>
        <div className="card card-">
            <h2>{props.text}</h2>
            <img src={props.image} alt={props.title} />
            <p className="category">{props.category}</p>
        </div>
        </>
    )
}

export default Card;