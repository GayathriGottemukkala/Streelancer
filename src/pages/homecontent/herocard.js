

import React from 'react';

function ServiceCard({ title, subtitle, points, mainImage, altText, className  ,customStyle}) {
  return (
    <div className={`service-card ${className || ''}`}>
      <h3>{title} –</h3>
      <h4>{subtitle}</h4>
      <ul>
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
     
       
        <button className="learn-button" style={customStyle||{}}>Learn More</button>
        <img src={mainImage} className="card-img img-fluid" alt={altText} />
      </div>
      
   
  );
}

export default ServiceCard;
