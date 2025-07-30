import React from "react";
import EventCard from "./EventCard";

const EventList = ({ events }) => {
  return (
    <div>
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;