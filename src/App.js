import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Clock from "./Components/Clock";
import Timer from "./Components/Timer";
import Stopwatch from "./Components/Stopwatch";
import "./App.css";
const App = () => {
  return (
    <Router>
      <div>
        <nav style={{  color:"black",display: "flex", justifyContent: "center", gap: "20px", margin: "20px 0" }}>
          <Link to="/">Saat</Link>
          <Link to="/stopwatch">Saniyəölçən</Link>
          <Link to="/timer">Taymer</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Clock />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;