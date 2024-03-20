// Card.js
import React from 'react';
import '../components/card.css'

function Card({ title, img, name }) {
    return (
        <div className="card_container">
            <div className="image">
                <img src={img} alt="" />
                
            </div>
            
            <div className="info">
            <hr />
                <div className="title">
                    <p>{title}</p>
                </div>
                <div className="name">
                    <h1>{name}</h1>
                </div>
            </div>
            <button className="learn_more">Learn more</button>
        </div>
    );
}

export default Card;