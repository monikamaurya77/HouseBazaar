import React, { useState } from "react";
import logo1 from "../assets/logo1.svg";
import logo2 from "../assets/logo2.svg";
import { IoHome, IoWifi } from "react-icons/io5";
import { GrMoney, GrGallery } from "react-icons/gr";
import { GiPackedPlanks } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import "../styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light position-relative">
      <div className="container-fluid d-flex align-items-center">
        <a href="#">
          <img src={logo1} alt="Logo 1" height="40" className="logo-1" />
        </a>
        <img src={logo2} alt="Logo 2" height="40" className="logo-2 me-3 ms-1" />

        {/* Hamburger button */}
        <button className="navbar-toggler ms-auto" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto text-center" onClick={closeMenu}>
            <li className="nav-item">
              <a className="nav-link px-2" href="#home">
                <IoHome className="nav-icon" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing">
                <GrMoney className="nav-icon" />
                <span className="ps-2 mt-1">Price</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#sitefloorplan">
                <GiPackedPlanks className="nav-icon text-white" />
                <span className="text-white ps-2 mt-1">Site Floor & Plan</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#amenities">
                <IoWifi className="nav-icon" />
                <span className="ps-2 mt-1">Amenities</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallery">
                <GrGallery className="nav-icon" />
                <span className="ps-2 mt-1">Gallery</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#address_section">
                <MdLocationOn className="nav-icon" />
                <span className="ps-2 mt-1">Location</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#sitevisit">
                <FaYoutube className="nav-icon" />
                <span className="ps-2 mt-1">Virtual Site Visit</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                <FaDownload className="mi mi-download nav-icon d-inline-block animated slideInDown infinite" />
                <span className="ps-2 mt-1">Download Brochure</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
