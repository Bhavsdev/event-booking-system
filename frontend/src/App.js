import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Events from "./pages/Events";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/events" />} />
        <Route path="/events" element={<Events />} />
        {/* Add more routes here later */}
      </Routes>
    </Router>
  );
}

export default App;