import React, { useState } from "react";
import "./formcard.css";

export default function PortfolioWorkSamples() {
  const [resume, setResume] = useState(null);
  const [portfolio, setPortfolio] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const handleResumeUpload = (e) => {
    setResume(e.target.files[0]);
  };

  return (
    <div className="portfolio-container">
      <h2>Portfolio & Work Samples</h2>

      {/* Resume Upload */}
      <div className="upload-box">
        <label htmlFor="resume-upload" className="upload-label">
          <div className="upload-icon">⬆️</div>
          <p><strong>Drag and drop your resume here</strong></p>
          <p className="hint">(or click to browse PDF, DOCX, max 5MB)</p>
        </label>
        <input
          id="resume-upload"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleResumeUpload}
        />
        {resume && <p className="filename">Selected: {resume.name}</p>}
      </div>

      {/* Portfolio Link */}
      <div className="input-group">
        <label>
          <span className="icon">📎</span>
          <input
            type="url"
            placeholder="https://your-portfolio-site.com"
            value={portfolio}
            onChange={(e) => setPortfolio(e.target.value)}
          />
        </label>
      </div>

      {/* LinkedIn Link */}
      <div className="input-group">
        <label>
          <span className="icon">🔗</span>
          <input
            type="url"
            placeholder="https://linkedin.com/in/your-profile"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />
        </label>
      </div>

      {/* Work Samples */}
      <div className="section">
        <h3>
          Work Samples <span className="optional">(optional)</span>
        </h3>
        <p className="hint">Upload examples of your work to showcase your skills</p>
        <div className="work-samples">
          <div className="sample-box">
            <span className="plus">+</span>
            <p>Add work sample</p>
          </div>
          <div className="sample-box">
            <span className="plus">+</span>
            <p>Add work sample</p>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="section">
        <textarea
          placeholder="Share anything else that might help us match you with the right opportunities"
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
        />
      </div>
    </div>
  );
}
