import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchEventById } from "../services/api";

const EventDetails = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEventById(eventId)
      .then(res => setEvent(res.data))
      .catch(console.error);
  }, [eventId]);

  const handleBook = () => {
    navigate(`/checkout/${eventId}`);
  };

  if (!event) return <p>Loading event details...</p>;

  return (
    <div>
      <h2>{event.name}</h2>
      <p>Date: {new Date(event.date).toLocaleDateString()}</p>
      <p>Seats: {event.availableSeats}</p>
      <p>Price: ${event.price}</p>
      <button onClick={handleBook}>Book Now</button>
    </div>
  );
};

export default EventDetails;