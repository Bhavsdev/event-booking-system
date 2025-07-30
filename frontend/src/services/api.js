import axios from "axios";

const api = axios.create({
  baseURL: "/api",  // proxy set to backend localhost:8080 in package.json
  timeout: 5000,
});

// Fetch all events
export const fetchEvents = () => api.get("/events");

// Fetch event by ID
export const fetchEventById = (id) => api.get(`/events/${id}`);

// Add more API calls here as needed

export default api;