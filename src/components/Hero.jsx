import React from "react";
import bg1 from "../assets/desktopbanner1.webp";
import bg2 from "../assets/desktopbanner2.webp";
import "../styles/carousel.css"; // Ensure smooth transition

const Hero = () => {
  return (
    <div
      id="heroCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000" // Change image every 3 seconds
      data-bs-wrap="true" // Ensures infinite loop
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>

      {/* Carousel Inner */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={bg1} className="d-block w-100 carousel-img" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src={bg2} className="d-block w-100 carousel-img" alt="Slide 2" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
