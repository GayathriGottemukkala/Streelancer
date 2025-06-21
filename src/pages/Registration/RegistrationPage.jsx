


import { useState } from "react";
import "./RegistrationPage.css";
 // Add this line to import Popup styles
import Personalcard from "./formcards/personalcard";
import ProfessionalBackgroundCard from "./formcards/professionalcard";
import WorkTrackPreferences from "./formcards/trackcard";
import AvailabilityResources from "./formcards/Aviliablecard";
import PortfolioWorkSamples from "./formcards/portfolio";
import AlmostDone from "./formcards/Almost";
import { useNavigate } from "react-router-dom";

const steps = [
  "Personal",
  "Background",
  "Work Track",
  "Availability",
  "Portfolio",
  "Complete",
];

function RegistrationPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const handleNext = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit=()=>{
setShowPopup(true)
  }
  const handleClose=()=>{
setShowPopup(false)
navigate("/")
  }

  return (
    <div className="register-bg-container">
      <div className="register-container">
        <h1 className="register-title">Join Streelancer</h1>
        <p className="register-subtitle">
          Complete this 6-step registration to find your perfect work opportunity
        </p>

        {/* Step Indicator */}
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
            <button
              className="register-submit-btn"
              onClick={handleSubmit}
            >
              Complete Registration
            </button>
          ) : (
            <button className="register-continue-btn" onClick={handleNext}>
              Continue
            </button>
          )}
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <p>
              Registration completed successfully! We will review your profile and
              be in touch soon.
            </p>
            <button className="close-btn" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function renderStepContent(step) {
  switch (step) {
    case 0:
      return <Personalcard />;
    case 1:
      return <ProfessionalBackgroundCard />;
    case 2:
      return <WorkTrackPreferences />;
    case 3:
      return <AvailabilityResources />;
    case 4:
      return <PortfolioWorkSamples />;
    case 5:
      return <AlmostDone />;
    default:
      return null;
  }
}

export default RegistrationPage;
