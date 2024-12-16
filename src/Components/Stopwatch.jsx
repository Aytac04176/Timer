import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  const handleStartStop = () => setRunning((prev) => !prev);

  useEffect(() => {
    if (running) {
      const interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [running]);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", fontSize: "50px" }}>{seconds}</div>
      <button onClick={handleStartStop}>{running ? "Dayandır" : "Başlat"}</button>
    </div>
  );
};

export default Stopwatch;
