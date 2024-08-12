/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const Banner = ({ description, timer, link, isVisible, refreshKey }) => {
  const [timeLeft, setTimeLeft] = useState(timer);

  // Reset timeLeft whenever refreshKey changes (i.e., when the update button is clicked)
  useEffect(() => {
    setTimeLeft(timer);
  }, [timer, refreshKey]);

  useEffect(() => {
    if (isVisible) {
      const countdown = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime > 0) return prevTime - 1;
          clearInterval(countdown);
          return 0;
        });
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [isVisible, refreshKey]);

  if (!isVisible || timeLeft <= 0) return null;

  return (
    <div
      className="banner"
      style={{ padding: "20px", background: "#f4f4f4", textAlign: "center" }}
    >
      <p>{description}</p>
      <p>Time remaining: {timeLeft} seconds</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Click here
      </a>
    </div>
  );
};

export default Banner;
