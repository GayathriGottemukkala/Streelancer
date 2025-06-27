import React from "react";
import "./globalflex.css";

import GlobalFlexNetwork from "./cards/globalflexbanner";
import GlobalFlexFeatures from "./cards/globalflexfeatures";
import IndustrySolutions from "./cards/industrysolutions";
import HowItWorks from "./cards/howitworks";
import ContactForm from "./cards/contactus";


const GlobalFlex = () => {
  return (
    <div>
   <GlobalFlexNetwork/>
   <GlobalFlexFeatures/>
   <IndustrySolutions/>
   <HowItWorks/>
   <ContactForm/>
   </div>
  );
};

export default GlobalFlex;
