import { useState } from "react";


export default function AvailabilityResources() {
  const [workAvailability, setWorkAvailability] = useState("");
  const [startTime, setStartTime] = useState("");
  const [internet, setInternet] = useState("");

  const deviceOptions = [
    "Laptop/Desktop Computer",
    "Tablet",
    "Smartphone",
    "Headset with Microphone",
  ];

  const trainingNeeds = [
    "Technical skills",
    "Tools & platforms",
    "Soft skills",
    "Industry knowledge",
  ];

  return (
    <div className="availability-container">
      <h2>Availability & Resources</h2>

      <div className="section">
        <p>Work Availability</p>
        <div className="options-grid">
          <label className={`option ${workAvailability === "full" ? "selected" : ""}`}>
            <input
              type="radio"
              name="work"
              value="full"
              onChange={() => setWorkAvailability("full")}
            />
            Full-time (40+ hrs/week)
          </label>
          <label className={`option ${workAvailability === "part" ? "selected" : ""}`}>
            <input
              type="radio"
              name="work"
              value="part"
              onChange={() => setWorkAvailability("part")}
            />
            Part-time (20-30 hrs/week)
          </label>
          <label className={`option ${workAvailability === "contract" ? "selected" : ""}`}>
            <input
              type="radio"
              name="work"
              value="contract"
              onChange={() => setWorkAvailability("contract")}
            />
            Contract/Project-based
          </label>
          <label className={`option ${workAvailability === "flexible" ? "selected" : ""}`}>
            <input
              type="radio"
              name="work"
              value="flexible"
              onChange={() => setWorkAvailability("flexible")}
            />
            Flexible hours
          </label>
        </div>
      </div>

      <div className="section">
        <h3>When can you start?</h3>
        <div className="start-options">
          {["Immediately", "Within 2 weeks", "Within 1 month", "Custom date"].map((time) => (
            <button
              key={time}
              className={`start-btn ${startTime === time ? "active" : ""}`}
              onClick={() => setStartTime(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <div className="section">
        <h3>Device Access</h3>
        <div className="checkbox-grid">
          {deviceOptions.map((device) => (
            <label key={device} className="checkbox-option">
              <input type="checkbox" /> {device}
            </label>
          ))}
        </div>
      </div>

      <div className="section">
        <h3>Internet Connectivity</h3>
        <div className="options-grid">
          <label className={`option ${internet === "high" ? "selected" : ""}`}>
            <input
              type="radio"
              name="internet"
              value="high"
              onChange={() => setInternet("high")}
            />
            High-speed reliable connection
          </label>
          <label className={`option ${internet === "moderate" ? "selected" : ""}`}>
            <input
              type="radio"
              name="internet"
              value="moderate"
              onChange={() => setInternet("moderate")}
            />
            Moderate connection
          </label>
          <label className={`option ${internet === "limited" ? "selected" : ""}`}>
            <input
              type="radio"
              name="internet"
              value="limited"
              onChange={() => setInternet("limited")}
            />
            Limited/Unreliable connection
          </label>
        </div>
      </div>

      <div className="section">
        <h3>Training Needs</h3>
        <div className="checkbox-grid">
          {trainingNeeds.map((need) => (
            <label key={need} className="checkbox-option">
              <input type="checkbox" /> {need}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
