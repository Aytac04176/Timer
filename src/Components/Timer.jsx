import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  const handleIncrement = () => setSeconds((prev) => prev + 1);

  const handleStartPause = () => setRunning((prev) => !prev);

  useEffect(() => {
    if (running) {
      const interval = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 0) {
            clearInterval(interval);
            alert("Taymer bitdi!");
            setRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [running]);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", fontSize: "50px" }}>{seconds}</div>
      <div>
        {!running && <button onClick={handleIncrement}>Vaxtı artır</button>}
        <button onClick={handleStartPause}>{running ? "Pauza" : "Başlat"}</button>
      </div>
    </div>
  );
};

export default Timer;
