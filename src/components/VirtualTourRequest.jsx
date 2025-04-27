import React from 'react';
import bgImage from "../assets/desktopbanner2.webp";
import { FaCirclePlay } from "react-icons/fa6";

const VirtualTourRequest = () => {
  return (
    <div className="custom-card container-fuild shadow-sm section">
      <p className='head '>Virtual Tour Request</p>
    <div className='at-property-img vsv-img '>
      <div className='d-none d-xs-none d-sm-none d-md-block d-lg-block'>
    <img src={bgImage} alt="bg-logo" className='img-responsive w-100'/>
    </div>
    <div>
      
    </div>
        </div>
  <div>
  <FaCirclePlay />
    <p>Virtual Site Visit</p>
    <p> Sai World Empire </p>
  </div>
    </div>
  )
}

export default VirtualTourRequest