import React, { useState } from 'react';
import './ReservationForm.css';

function ReservationForm({ addReservation }) {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [number, setNumber] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const newReservation = {
        id: Date.now(),
        name,
        date,
        time,
        number: parseInt(number),
      };

      addReservation(newReservation);
  
      setName('');
      setDate('');
      setTime('');
      setNumber('');
    };
  
    return (
      <form className='resy-form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Date (mm/dd)'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type='text'
          placeholder='Time'
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <input
          type='number'
          placeholder='Number of guests'
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type='submit'>Make Reservation</button>
      </form>
    );
}

export default ReservationForm;