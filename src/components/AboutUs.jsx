import React from "react";
import { FaDownload } from "react-icons/fa6";
const AboutUs = () => {
  return (
    <div className="custom-card container-fuild shadow-sm section">
      <h4 className="section-heading color-primary fw-600">Welcome to Sai World Empire</h4>
      <p style={{border:"2px solid red"}}>
        Inspired by the grandeur of the glorious kingdoms of old - the Sai World
        Empire in Kharghar is built along the lines of famous royal
        civilisations. Its exquisite 2, 3, and 4 BHK apartments with stylish
        interiors define lavishness & offer every imaginable comfort. The key
        hallmark of this residence is the amenities served indoors. Like a wave
        pool, tennis court, virtual gaming area, squash court, rock climbing,
        movie theatre, Olympic-size pool, library, kids fun pool, bowling alley,
        etc.
      </p>
      <p className="text-decoration-underline pb-1">Read more</p>
      <button className="btn  effetMoveGradient micro-form-btn"><FaDownload className="mi mi-download nav-icon d-inline-block animated slideInDown infinite"/><span className="ps-2">Download Brochure</span></button>
    </div>
  );
};

export default AboutUs;
