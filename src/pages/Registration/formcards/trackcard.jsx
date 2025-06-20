import { useState } from "react";


export default function WorkTrackPreferences() {
  const [experience, setExperience] = useState("");

  const workTracks = [
    {
      id: "dei",
      title: "DEI Hiring Track",
      description:
        "Connect with companies committed to diversity, equity, and inclusion initiatives.",
    },
    {
      id: "remote",
      title: "Full-time Remote Opportunities",
      description:
        "Permanent remote positions with established companies worldwide.",
    },
    {
      id: "freelance",
      title: "Global Freelance Network",
      description:
        "Project-based work with flexible hours and competitive rates.",
    },
    {
      id: "leadership",
      title: "CXO & Leadership Roles",
      description:
        "Executive positions and leadership opportunities for experienced professionals.",
    },
  ];

  const experienceLevels = [
    { value: "entry", label: "Entry Level (0-2 years)" },
    { value: "mid", label: "Mid Level (3-5 years)" },
    { value: "senior", label: "Senior (6+ years)" },
    { value: "executive", label: "Executive (10+ years)" },
  ];

  return (
    <div className="preferences-container">
      <h2>Work Track Preferences</h2>
      <p>
        Based on your experience and preferences, select the work tracks you're interested in:
      </p>

      <div className="work-tracks">
        {workTracks.map((track) => (
          <label key={track.id} className="work-track">
            <input type="checkbox" />
            <div>
              <strong>{track.title}</strong>
              <p>{track.description}</p>
            </div>
          </label>
        ))}
      </div>

      <h3>Experience Level</h3>
      <div className="experience-levels">
        {experienceLevels.map((exp) => (
          <label
            key={exp.value}
            className={`experience-option ${
              experience === exp.value ? "selected" : ""
            }`}
          >
            <input
              type="radio"
              name="experience"
              value={exp.value}
              onChange={() => setExperience(exp.value)}
            />
            {exp.label}
          </label>
        ))}
      </div>
    </div>
  );
}
