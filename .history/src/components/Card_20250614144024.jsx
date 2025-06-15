import { useState } from 'react'
import './Card.css'

function Card(props) {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    return (
        <div className={`card${flipped ? " flipped" : ""}`} onClick={handleFlip}>
            <div className="card-inner">
                <div className="card-front">
                    <h2>{props.text}</h2>
                    <img src={props.image} />
                    <p className="category">{props.category}</p>
                </div>
                {/* <div className="card-back">
                    <h2>{props.text}</h2>
                    <p className="category">{props.category}</p>
                </div> */
            </div>
        </div>
    );
}

export default Card;