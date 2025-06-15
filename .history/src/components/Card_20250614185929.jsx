import { useState } from 'react'
import './Card.css'

function Card(props) {
    
    return (
        <div className={`card${props.flipped ? " flipped" : ""}`}>
                <div className="card-front">
                    <h2>{props.text}</h2>
                    <p className="category">{props.category}</p>
                </div>
                <div className="card-back">
                    <h2>{props.text}</h2>
                    <img src={props.image} />
                    <p className="category">{props.category}</p>
            </div>
        </div>
    );
}

export default Card;