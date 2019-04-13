import React from 'react';
import "./style.css";

const Card = props => {
    return (
        <div className="card">
            <img className="card-img-top" data-id={props.id} onClick={props.cardClick} src={props.image} alt={props.name} />
        </div>
    )
}

export default Card;