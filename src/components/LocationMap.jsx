import React from "react";
import { ImLocation } from "react-icons/im";
import locationMap from "../assets/locationmap2.webp";
import { FaMapLocationDot } from "react-icons/fa6";
const LocationMap = () => (
  <div className="custom-card container-fuild shadow-sm section">
    <h4>Address of Sai World Empire</h4>
    <div className="row">
      <div className="col-md-7 col-sm-12 map-view">
        <h6 className="section-heading-sub">Map View</h6>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.6154940256806!2d73.07176481490127!3d19.08063598708525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1e481558401%3A0x3341d35838af7844!2sSAI%20WORLD%20EMPIRE!5e0!3m2!1sen!2sin!4v1626267161728!5m2!1sen!2sin"
          width="100%"
          height="100px"
          style={{ border: "1px solid rgb(229, 227, 223)" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sai World Empire Map"
        ></iframe>
      </div>
      <div className="col-md-5 col-sm-12 lmap-div text-center location">
        <h6 className="section-heading-sub">Location Map</h6>
        <div className="at-property-item mb-2">
          <div className="at-property-img master-plan lazyloaded">
            <img
              src={locationMap}
              alt="Location Map"
              className="rounded shadow"
              style={{maxWidth:"100%", height:"100%"}}
            />
             <div className='at-property-overlayer'>   </div>
             <span className='btn btn-default at-property-btn text-uppercase' style={{border:"1px solid white"}}>Download Location Map</span>
          </div>
        </div>
      </div>
    </div>

    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-2">
      <div className="col my-2">
        <i className="mi mi-loc-list-2 color-primary loc-icon"></i>
        <div className="d-flex align-item-center">
        <FaMapLocationDot className="nav-icon"/>
          <p  className="ps-1 mb-0">Kharghar Sector 34 Metro Station is just 5 minutes away</p>
        </div>
        
     </div>
   

    <div className="col my-2">
        <div className="d-flex align-item-center">
        <FaMapLocationDot className="nav-icon"/>
          <p  className="ps-1 mb-0">Just 6 minutes drive to Empyrean School</p>
        </div>
        </div>
        <div className="col my-2">
        <div className="d-flex align-item-center">
        <FaMapLocationDot className="nav-icon"/>
          <p  className="ps-1 mb-0">Reach Kharghar Railway Station in 18 minutes.</p>
        </div>
        </div>
        <div className="col my-2">
        <div className="d-flex align-item-center">
        <FaMapLocationDot className="nav-icon"/>
          <p  className="ps-1 mb-0">Ornate Hospitals is within 15 minutes.</p>
        </div>
    </div>
        <div className="col my-2">
        <div className="d-flex align-item-center">
        <FaMapLocationDot className="nav-icon"/>
          <p  className="ps-1 mb-0">The Executive Inn is just at the distance of 8 minutes</p>
        </div>
     </div>

    
        <div className="col my-2">
        <div className="d-flex align-item-center">
        <FaMapLocationDot className="nav-icon"/>
          <p className="ps-1 mb-0">Just 20 minutes drive to Mumbai-Pune Expressway</p>
        </div>
      </div>
    </div>
  </div>
);

export default LocationMap;
