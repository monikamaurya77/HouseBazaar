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
    <div className='d-block d-xs-block d-sm-block d-md-none d-lg-none'>
    <img src={bgImage} alt="bg-logo" className='img-responsive w-100'/>
    </div>
    <span className='text-center d-block d-lg-none content-clr mt-2'>Virtual Site visit</span>
    <div className='vsv-text-bk'>
      <div className='vsv-text-bg'>
<div className='vsv-icon'></div>
<p className='text-uppercase h1 font-weight-bold mb-0 d-none d-lg-block text-white text-center'>Virtual Site Visit</p>
<span className='text-capitalize text-center d-none d-lg-block text-white '> Sai World Empire </span>

      </div>
    </div>
        </div>

    </div>
  )
}

export default VirtualTourRequest