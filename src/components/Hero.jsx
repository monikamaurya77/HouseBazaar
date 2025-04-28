import React, { useState, useEffect } from "react";
import bg1 from "../assets/desktopbanner1.webp";
import bg2 from "../assets/desktopbanner2.webp";
import "../styles/carousel.css"; // Ensure smooth transition

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active slide index

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 2); // Cycle through 2 slides
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div
      id="heroCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="false" // Disable the default auto-slide so we control it manually
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="0"
          className={activeIndex === 0 ? "active" : ""}
          aria-current={activeIndex === 0 ? "true" : "false"}
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="1"
          className={activeIndex === 1 ? "active" : ""}
          aria-current={activeIndex === 1 ? "true" : "false"}
          aria-label="Slide 2"
        ></button>
      </div>

      {/* Carousel Inner */}
      <div className="carousel-inner">
        <div className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}>
          <img src={bg1} className="d-block w-100 carousel-img" alt="Slide 1" />
        </div>
        <div className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}>
          <img src={bg2} className="d-block w-100 carousel-img" alt="Slide 2" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
