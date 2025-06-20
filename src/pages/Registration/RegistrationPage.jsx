import { useState } from "react";
import "./RegistrationPage.css";
import Personalcard from "./formcards/personalcard";
import ProfessionalBackgroundCard from "./formcards/professionalcard";
import WorkTrackPreferences from "./formcards/trackcard";
import AvailabilityResources from "./formcards/Aviliablecard";
import PortfolioWorkSamples from "./formcards/portfolio";
import AlmostDone from "./formcards/Almost";

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
    <div className="register-bg-container">
     
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
            Complete Registration
          </button>
        ) : (
          <button className="register-continue-btn" onClick={handleNext}>
            Continue
          </button>
        )}
      </div>
    </div>
    
    </div>
  );
}

function renderStepContent(step) {
  switch (step) {
    case 0:
      return (
       <div><Personalcard/></div>
      );
    case 1:
      return <div><ProfessionalBackgroundCard/></div>;
    case 2:
      return <div><WorkTrackPreferences/></div>;
    case 3:
      return <div><AvailabilityResources/></div>;
    case 4:
      return <div><PortfolioWorkSamples/></div>;
    case 5:
      return <div><AlmostDone/></div>;
    default:
      return null;
  }
}

export default RegistrationPage;
