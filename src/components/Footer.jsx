import React from "react";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="custom-card container-fuild shadow-sm section" id="about">
  
        <small>
          <b>Disclaimer:</b> We are an authorised marketing partner for this project.
          Provided content is given by respective owners and this website and
          content is for information purpose only and it does not constitute any
          offer to avail for any services. Prices mentioned are subject to
          change without prior notice and properties mentioned are subject to
          availability. You can expect a call, SMS or emails on details
          registered with us.
        </small>
        <hr/>
        <div className="d-flex justify-content-between">
          <small>Contact Us at - #2304, Cyber One, Sector 30(A), Vashi, Navi Mumbai - 400703</small>
          <small>© Copyright</small>
          <small>
            <Link to="privacy-policy.php" className="text-decoration-none hover-underline">Terms & Conditions</Link> | 
            <Link to="privacy-policy.php" className="text-decoration-none hover-underline">Privacy Policy</Link> | 
            <Link to="privacy-policy.php" className="text-decoration-none hover-underline">Cookies Policy</Link></small>
        </div>
      
    
        </div>
  );
};

export default Footer;
