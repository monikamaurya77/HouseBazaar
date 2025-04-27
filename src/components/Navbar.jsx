import React from "react";
import logo1 from "../assets/logo1.svg";
import logo2 from "../assets/logo2.svg";
import { IoHome } from "react-icons/io5";
import { GrMoney } from "react-icons/gr";
import { GiPackedPlanks } from "react-icons/gi";
import { IoWifi } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
import { MdLocationOn } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="" href="#">
        <img src={logo1} alt="Logo 1" height="40" className="logo-1" />
      </a>
      {/* Vertical Line */}
     
      <img src={logo2} alt="Logo 2" height="40" className="logo-2 me-3 ms-1" />
      {/* <i className='mi mi-siteplan nav-icon'></i> */}

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav nav-fill">
          <li className="nav-item  ">
            <a className="nav-link" href="#home">
              <IoHome className="nav-icon" />
            </a>
          </li> 
          <li className="nav-item  ">
            <a className="nav-link" href="#pricing">
              <GrMoney className="nav-icon" />
              <span className="ps-2 mt-1">Price</span>
            </a>
          </li>
       
          <li className="nav-item  ">
            <a className="nav-link active" href="#sitefloorplan">
              <GiPackedPlanks className="nav-icon text-white" />
              <span className="text-white ps-2 mt-1">Site Floor & Plan</span>
            </a>
          </li>
        
          <li className="nav-item  ">
            <a className="nav-link" href="#amenities">
              <IoWifi className="nav-icon" />
             
              <span className="ps-2 mt-1">Amenities</span>
            </a>
          </li>
       
          <li className="nav-item  ">
            <a className="nav-link" href="#gallery">
              <GrGallery className="nav-icon" />
              <span className="ps-2 mt-1">Gallery</span>
            </a>
          </li>
        
          <li className="nav-item  ">
            <a className="nav-link" href="#address_section">
              <i class="mi mi-location nav-icon"></i>
              <span className="ps-2 mt-1">Location</span>
            </a>
          </li>
         
          <li className="nav-item  ">
            <a className="nav-link" href="#sitevisit">
              <FaYoutube className="nav-icon" />
              <span className="ps-2 mt-1">Virtual Site Visit</span>
            </a>
          </li>
         
          <li className="nav-item  ">
            <a className="nav-link" href="#services">
              <FaDownload />
              <span className="ps-2 mt-1">Download brochure</span>
            </a>
          </li>
         
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
