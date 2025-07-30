import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "6px",
      padding: "10px",
      marginBottom: "10px",
      maxWidth: "400px"
    }}>
      <h3>{event.name}</h3>
      <p>Date: {new Date(event.date).toLocaleDateString()}</p>
      <p>Available Seats: {event.availableSeats}</p>
      <p>Price: ${event.price}</p>
      <Link to={`/booking/${event.id}`}>Book Now</Link>
    </div>
  );
};

export default EventCard;