import React from "react";
import homebazaarLogo from "../assets/homebazaar_logo.svg"

const AboutHouseBazaar= () => {
  return (
    <div className="custom-card container-fuild shadow-sm section" id="about">
      <div className="container">
        <div className="row align-items-center">   
     <div className="col-md-8">
     <h4 className="section-heading-sub text-capitalize">About HouseBazaar</h4>
     </div>
         
            <div className="col-md-4 text-end">
        <img
              src={homebazaarLogo}
              alt="home bazaar Logo"
              className="img-fluid rounded"
            />
        </div>
       
            <p className="mobile-p">
              Housebazaar, an esteemed initiative of HomeBazaar.com, operates as
              a dedicated platform exclusively designed to promote our esteemed
              partner brands. With a commitment to facilitating effective and
              transparent promotion, our platform empowers brands to efficiently
              reach their target audience. Through a comprehensive range of
              tools, including targeted advertising campaigns and data-driven
              analytics, Housebazaar equips brands with the essential resources
              needed to optimize their promotional endeavours and drive
              substantial growth.
            </p>
         
        
        </div>
      </div>
    </div>
  );
};

export default AboutHouseBazaar;
