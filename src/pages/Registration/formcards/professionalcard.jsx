import React from "react";
import "./formcard.css"

const ProfessionalBackgroundCard = () => {
  return (
    <div className="registration-form-container">
      <h2 className="form-title">Professional Background</h2>
<form className="registration-form">
      {/* Education Level */}
     
       <div className="form-row">
        
         <select id="education" className="form-select">
          <option value="">Select highest education</option>
          <option value="highschool">High School</option>
          <option value="bachelor">Bachelor's Degree</option>
          <option value="master">Master's Degree</option>
          <option value="phd">PhD</option>
        </select>
         
        </div>

      {/* Past Roles */}
      <div className="dei-info" >
           <p>Past Roles</p>
        
        <small className="sm-dei">List your most recent roles (up to 3)</small>
     <div className="form-row dei-info">
          <input
            type="text"
            id="role1"
          
            placeholder=""
          />
       
         
          <input type="text" id="role2" className="form-input" placeholder="" />
        </div>
      </div>


      {/* Industries */}
      <div className="dei-info">
         <p className="form-label-link" htmlFor="industries">
        Industries
        </p>
          <small className="sm-dei">  Select all industries you have experience in (up to 3)</small>
        </div>
        <div className="checkbox-grid form-row">
          {[
            "Technology",
            "Healthcare",
            "Retail & E-commerce",
            "Manufacturing",
            "Finance & Banking",
            "Education",
            "Marketing & Advertising",
            "Consulting",
          ].map((industry) => (
            <label key={industry} className="form-checkbox">
              <input type="checkbox" />
              {industry}
            </label>
          ))}
        </div>
     
      {/* Tools & Skills */}
      <div className="dei-info">
         <p className="form-label-link" htmlFor="industries">
        Tools & Skills
        </p>
          <small className="sm-dei">  Select tools and platforms you’re familiar with</small>
        </div>
        <div className="checkbox-grid form-row">
          {[
            "Microsoft Office",
            "Google Workspace",
            "Figma",
            "Adobe Creative Suite",
            "WordPress",
            "Slack",
            "Jira",
            "Salesforce",
            "Programming",
          ].map((skill) => (
            <label key={skill} className="form-checkbox">
              <input type="checkbox" />
              {skill}
            </label>
          ))}
        </div>
     

     
     
      </form>
    </div>
  );
};

export default ProfessionalBackgroundCard;
