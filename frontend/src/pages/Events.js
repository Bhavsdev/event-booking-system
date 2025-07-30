import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("/api/events")
      .then(res => setEvents(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Events</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <strong>{event.name}</strong> — {new Date(event.date).toLocaleDateString()}
            <Link to={`/booking/${event.id}`} style={{ marginLeft: "10px" }}>Book Now</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;