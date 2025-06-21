import React, { useState } from "react";
import "./formcard.css";

export default function AlmostDone() {
  const [joinCommunity, setJoinCommunity] = useState(false);
  const [preferences, setPreferences] = useState({
    jobMatches: false,
    training: false,
    events: false,
    news: false,
  });
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handlePreferenceChange = (e) => {
    const { name, checked } = e.target;
    setPreferences((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <div className="almost-done-container">
      <h2><a href="#">Almost Done!</a></h2>

      {/* Join Our Community */}
      <div className="field-block toggle-block">
        <label className="field-label">Join Our Community</label>
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={joinCommunity}
            onChange={() => setJoinCommunity(!joinCommunity)}
          />
          <span className="slider round"></span>
        </label>
        <span className="toggle-text">
          I'd like to join the Streelancer community for networking and resources
        </span>
      </div>

      {/* Notification Preferences */}
      <div className="field-block">
        <label className="field-label">Notification Preferences</label>
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="jobMatches"
              checked={preferences.jobMatches}
              onChange={handlePreferenceChange}
            />
            Job matches based on my profile
          </label>
          <label>
            <input
              type="checkbox"
              name="training"
              checked={preferences.training}
              onChange={handlePreferenceChange}
            />
            Training opportunities and skill development
          </label>
          <label>
            <input
              type="checkbox"
              name="events"
              checked={preferences.events}
              onChange={handlePreferenceChange}
            />
            Community events and networking
          </label>
          <label>
            <input
              type="checkbox"
              name="news"
              checked={preferences.news}
              onChange={handlePreferenceChange}
            />
            Industry news and updates
          </label>
        </div>
      </div>

      {/* Notification Info Box */}
      <div className="info-box">
        <strong>Notification Preferences</strong>
        <p>Based on your profile, you'll be automatically matched with:</p>
        <ul className="checkbox-group">
          <li>Job opportunities that match your skills and preferences</li>
          <li>Relevant training courses in our Academy if needed</li>
          <li>Community resources and networking events</li>
        </ul>
      </div>

      {/* Terms and Privacy */}
      <div className="terms-block">
        <label>
          <input
            type="checkbox"
            checked={agreeTerms}
            onChange={() => setAgreeTerms(!agreeTerms)}
          />
          I agree to the <a href="#">Teams and services</a> and <a href="#">Privacy Policy</a>
        </label>
      </div>
    </div>
  );
}
