import React from 'react'
import bg1 from "../assets/desktopbanner1.webp"
import bg2 from "../assets/desktopbanner2.webp";
import "../styles/carousel.css"

const Hero = () => {
  return (

  <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={bg1} className="d-block w-100 carousel-img" alt="Slide 1" height="400" width="1200"/>
    </div>
    <div className="carousel-item">
      <img src={bg2} className="d-block w-100 carousel-img" alt="Slide 2" height="400" width="1200"/>
    </div>
  </div>
</div> 
  )
}

export default Hero