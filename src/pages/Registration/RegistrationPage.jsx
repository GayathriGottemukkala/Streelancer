import { useState } from "react";
import "./RegistrationPage.css";

const steps = [
  "Personal",
  "Background",
  "Work Track",
  "Availability",
  "Portfolio",
  "Complete",
];

function RegistrationPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    alert("Form submitted successfully!");
  };

  return (
    <div className="register-container">
      <h1 className="register-title">Join Streelancer</h1>
      <p className="register-subtitle">
        Complete this 6-step registration to find your perfect work opportunity
      </p>

      {/* Step Indicator with Line */}
   <div className="register-steps-container">
  <div className="register-step-line-full"></div>
  <div
    className="register-step-line-progress"
    style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
  ></div>

  <div className="register-steps">
    {steps.map((step, index) => (
      <div className="register-step" key={index}>
        <div
          className={`register-step-circle ${
            index < currentStep
              ? "completed"
              : index === currentStep
              ? "active"
              : ""
          }`}
        >
          {index < currentStep ? "✔" : index + 1}
        </div>
        <div className="register-step-label">{step}</div>
      </div>
    ))}
  </div>
</div>


      <div className="register-form-content">{renderStepContent(currentStep)}</div>

      <div className="register-button-group">
        {currentStep > 0 && (
          <button className="register-back-btn" onClick={handleBack}>
            Back
          </button>
        )}
        {currentStep === steps.length - 1 ? (
          <button className="register-submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        ) : (
          <button className="register-continue-btn" onClick={handleNext}>
            Continue
          </button>
        )}
      </div>
    </div>
  );
}

function renderStepContent(step) {
  switch (step) {
    case 0:
      return (
        <div className="register-form-grid">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email Address" />
          <input type="tel" placeholder="Phone Number" />
          <select>
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <label className="register-checkbox-group">
            <input type="checkbox" /> I've taken a career break of 6+ months
          </label>
          <input type="text" placeholder="Country" />
        </div>
      );
    case 1:
      return <div>Background Step Content...</div>;
    case 2:
      return <div>Work Track Step Content...</div>;
    case 3:
      return <div>Availability Step Content...</div>;
    case 4:
      return <div>Portfolio Step Content...</div>;
    case 5:
      return <div>✅ Complete! Please review your details and submit.</div>;
    default:
      return null;
  }
}

export default RegistrationPage;
