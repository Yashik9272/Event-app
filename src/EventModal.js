import React from 'react';
import './EventModal.css';

function EventModal({ event, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{event.name}</h2>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p>{event.description}</p>
        <img src={event.image} alt={event.name} className="event-image"/>
      </div>
    </div>
  );
}

export default EventModal;
