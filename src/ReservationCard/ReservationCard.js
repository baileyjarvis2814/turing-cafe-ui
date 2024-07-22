import React from 'react';
import './ReservationCard.css';

function ReservationCard({ name, date, time, number }) {
  return (
    <div className='resy-card'>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {number}</p>
    </div>
  );
}

export default ReservationCard;