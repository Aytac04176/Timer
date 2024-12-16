import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", fontSize: "50px" }}>
        <div>{time.getHours().toString().padStart(2, "0")}</div>:
        <div>{time.getMinutes().toString().padStart(2, "0")}</div>:
        <div>{time.getSeconds().toString().padStart(2, "0")}</div>
      </div>
    </div>
  );
};

export default Clock;

