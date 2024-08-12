/* eslint-disable react/prop-types */
import { useState } from "react";

const Dashboard = ({ onUpdateBanner }) => {
  const [description, setDescription] = useState("This is a banner!");
  const [timer, setTimer] = useState(10);
  const [link, setLink] = useState("https://example.com");
  const [isVisible, setIsVisible] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log("New Settings:", { description, timer, link, isVisible });

    onUpdateBanner({ description, timer, link, isVisible });
  };

  return (
    <div
      className="dashboard"
      style={{ padding: "20px", background: "#e4e4e4", textAlign: "center" }}
    >
      <h2>Banner Settings</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Timer (seconds):</label>
          <input
            type="number"
            value={timer}
            onChange={(e) => setTimer(e.target.value)}
          />
        </div>
        <div>
          <label>Link:</label>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <div>
          <label>Visible:</label>
          <input
            type="checkbox"
            checked={isVisible}
            onChange={(e) => setIsVisible(e.target.checked)}
          />
        </div>
        <button type="submit">Update Banner</button>
      </form>
    </div>
  );
};

export default Dashboard;
