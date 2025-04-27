import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Amenities from "./components/Amenities";
import FloorPlans from "./components/FloorPlans";
import LocationMap from "./components/LocationMap";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import AboutParadiseGroup from "./components/AboutParadiseGroup";
import AboutHouseBazaar from "./components/AboutHouseBazaar";
import VirtualTourRequest from "./components/VirtualTourRequest";
import Gallery from "./components/Gallery";
import AboutUs from "./components/AboutUs";
import PopUp from "./components/PopUp";
import RightSideBar from "./components/RightSideBar";
import Aside from "./components/Aside";

function App() {
  return (
    <div className="d-flex justify-content-between">
    <div className="left-container">
    <Navbar />
      <Hero />
   <PopUp/>
   <Aside/>
   <AboutUs/>
      <Services />
      <FloorPlans />
      <Amenities />
      <Gallery/>
      <LocationMap/>
      <VirtualTourRequest/>
      <AboutParadiseGroup/>
      <AboutHouseBazaar />
      <Footer />
          {/* <Contact /> */}
    </div>
     <div className="right-container">
     <RightSideBar/>
     </div>
    </div>
  );
}

export default App;
