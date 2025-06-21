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
      <div className="section">
       <p >
          Resume/CV
        </p>
      <div className="upload-box">
        <label htmlFor="resume-upload" className="upload-label">
          <div className="upload-icon"><img src={require("../../../images/upload.png")}/></div>
          <p><strong className="side-head">Drag and drop your resume here</strong></p>
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
      </div>

      {/* Portfolio Link */}
       <div className="section">
        <p >
          Portfolio Link <span className="optional">(optional)</span>
        </p>
      <div className="input-group">
        <label>
          <span className="icon"><img src={require("../../../images/link.png")}/></span>
          <input
            type="url"
            placeholder="https://your-portfolio-site.com"
            value={portfolio}
            onChange={(e) => setPortfolio(e.target.value)}
          />
        </label>
      </div>
      </div>

      {/* LinkedIn Link */}
       <div className="section">
        <p >
          Linkedin Profile <span className="optional">(optional)</span>
        </p>
      <div className="input-group">
        <label>
          <span className="icon"> <i className="fab fa-linkedin"></i></span>
          <input
            type="url"
            placeholder="https://linkedin.com/in/your-profile"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />
        </label>
      </div>
      </div>

      {/* Work Samples */}
      <div className="section">
        <p>
          Work Samples <span className="optional">(optional)</span>
        </p>
        <p className="hint">Upload examples of your work to showcase your skills</p>
        <div className="work-samples">
          <div className="sample-box">
          
             <div className="upload-icon"> <span className="plus">+</span></div>
            <p className="hint">Add work sample</p>
          </div>
          <div className="sample-box">
                <div className="upload-icon"> <span className="plus">+</span></div>
            <p className="hint">Add work sample</p>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="section">
         <p>
          Additional Information <span className="optional">(optional)</span>
        </p>
        <textarea
          placeholder="Share anything else that might help us match you with the right opportunities"
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
        />
      </div>
    </div>
  );
}
