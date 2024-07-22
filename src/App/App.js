import './App.css';
import React, { useState, useEffect } from 'react';
import ReservationCard from '../ReservationCard/ReservationCard';


function App() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetchReservations();
  }, []);
  
  const fetchReservations = async () => {
    const response = await fetch('http://localhost:3001/api/v1/reservations');
    const data = await response.json();
    setReservations(data);
  };

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-container'>
        {reservations.map(reservation => (
          <ReservationCard key={reservation.id} {...reservation} />
        ))}
      </div>
    </div>
  );
}

export default App; 