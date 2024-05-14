import React from 'react';
import './Arrow.css';

function Arrow({ direction = "horizontal" }) {
  const arrowSrc = "https://cdn-icons-png.flaticon.com/512/66/66831.png";
  const verticalArrowSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9oKasoUyF44t1NpCH4ObdyeDMlKDLFY0kjWKCufqGCA&s";
  
  return (
    <div className={`arrow ${direction === "vertical" ? "vertical" : ""}`}>
      <img className='Arrows' src={direction === "vertical" ? verticalArrowSrc : arrowSrc} alt="arrow" />
    </div>
  );
}

export default Arrow;
