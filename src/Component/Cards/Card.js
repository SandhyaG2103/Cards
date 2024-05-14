import React from 'react';
import './Card.css';

function Card({ imgSrc, title }) {
  return (
    <div className="card">
      <img src={imgSrc} alt="" />
      <h2>{title}</h2>
      <input type="button" value="Button" />
    </div>
  );
}

export default Card;
