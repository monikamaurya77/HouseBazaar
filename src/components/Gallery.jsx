import React from 'react';
import image1 from "../assets/g1.webp";
import image2 from "../assets/g2.webp";
import image3 from "../assets/g3.webp";
import image4 from "../assets/g4.webp";

const Gallery = () => {
  return (
    <div className="custom-card container-fuild shadow-sm section">
       <div className="row mb-4 align-items-center">
       <div className="col-md-8">
        <h4 className="head">Gallery of Sai World Empire</h4>
        </div>
        <div className="col-md-4 text-end">
        <button>Download Gallery</button>
        </div>
        </div>
    <div className='row'>
      <div className='col-lg-3 col-md-4 col-sm-6 col-6 mb-2'>
      <img src={image1} alt="gallery image" height="149.6px" className='rounded-4 gallery-thumb'/>
      </div>
      <div className='col-lg-3 col-md-4 col-sm-6 col-6 mb-2'>
      <img src={image2} alt="gallery image" height="149.6px" className='rounded-4 gallery-thumb'/> 
      </div>
       
        <div className='col-lg-3 col-md-4 col-sm-6 col-6 mb-2'>
        <img src={image3} alt="gallery image" height="149.6px" className='rounded-4 gallery-thumb' />
        </div>
        <div className='col-lg-3 col-md-4 col-sm-6 col-6 mb-2'>
        <img src={image4} alt="gallery image" height="149.6px" className='rounded-4 gallery-thumb'/>
        </div>
        </div>
    </div>
  )
}

export default Gallery;