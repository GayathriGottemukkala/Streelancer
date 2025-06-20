
import "./formcard.css";

const Personalcard = () => {
  return (
    <div className="registration-form-container">
      <h2>Personal & Identity Details</h2>
      <form className="registration-form">
        <div className="form-row">
           
          <input type="text" id="firstname" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>

        <div className="form-row">
          <input type="email" placeholder="Email Address" />
          <input type="tel" placeholder="Phone Number" />
        </div>

        <div className="form-row">
          <select>
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

     
        <div className="form-row">
  <label className="switch">
    <input type="checkbox" />
    <span className="slider"></span>
  </label>
  <span>I’ve taken a career break of 6+ months</span>
</div>

        <div className="form-row">
          <select>
            <option value="">Country</option>
            <option value="IN">India</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            {/* Add more countries here */}
          </select>
          <input type="text" placeholder="" />
        </div>

        <div className="form-row dei-info">
          <label>DEI Identity (optional)</label>
          <small>Select all that apply. This information helps us connect you with inclusive opportunities.</small>
        </div>

        <div className="form-row checkbox-grid">
          <label><input type="checkbox" /> Woman</label>
          <label><input type="checkbox" /> BIPOC</label>
          <label><input type="checkbox" /> Person with disability</label>
          <label><input type="checkbox" /> Caregiver</label>
          <label><input type="checkbox" /> Veteran</label>
          <label><input type="checkbox" /> LGBTQ+</label>
        </div>
      </form>
    </div>
  );
};

export default Personalcard;
