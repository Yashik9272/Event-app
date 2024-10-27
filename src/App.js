import React, { useState } from 'react';
import './App.css';
import EventModal from './EventModal';  // Event Modal component

const eventsData = [
  { id: 1, name: "Music Concert", location: "New York", description: "A live music event in NYC.", date: "2024-11-01", image: "concert.jpg" },
  { id: 2, name: "Art Exhibition", location: "Paris", description: "Modern art exhibition.", date: "2024-11-05", image: "art.jpg" },
  { id: 3, name: "Tech Conference", location: "San Francisco", description: "Latest tech innovations.", date: "2024-12-10", image: "tech.jpg" },
  { id: 4, name: "Food Festival", location: "Los Angeles", description: "Taste world cuisines.", date: "2024-11-15", image: "food.jpg" },
  { id: 5, name: "Film Screening", location: "London", description: "A screening of classic films.", date: "2024-12-20", image: "film.jpg" },
  { id: 6, name: "Startup Pitch", location: "Berlin", description: "Pitch your startup ideas.", date: "2024-12-02", image: "startup.jpg" },
  { id: 7, name: "Yoga Retreat", location: "Bali", description: "A week of relaxation and yoga.", date: "2024-11-25", image: "yoga.jpg" },
  { id: 8, name: "Fashion Show", location: "Milan", description: "Showcasing top fashion designers.", date: "2024-11-30", image: "fashion.jpg" },
  { id: 9, name: "Book Fair", location: "Tokyo", description: "Annual book fair with author signings.", date: "2024-12-05", image: "bookfair.jpg" },
  { id: 10, name: "Gaming Expo", location: "Seoul", description: "Explore the latest in gaming technology.", date: "2024-11-12", image: "gaming.jpg" },
  { id: 11, name: "Marathon", location: "Boston", description: "Annual marathon event.", date: "2024-11-18", image: "marathon.jpg" },
  { id: 12, name: "Science Fair", location: "Houston", description: "Students showcase science projects.", date: "2024-11-22", image: "sciencefair.jpg" }
];


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);  // Selected event for modal

  const filteredEvents = eventsData.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Event Search</h1>
      <input 
        type="text" 
        placeholder="Search by event name or location..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        className="search-bar"
      />
      
      <div className="event-list">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <div key={event.id} className="event-item" onClick={() => setSelectedEvent(event)}>
              <h2>{event.name}</h2>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Location:</strong> {event.location}</p>
            </div>
          ))
        ) : (
          <p>No events found.</p>
        )}
      </div>

      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
}

export default App;
