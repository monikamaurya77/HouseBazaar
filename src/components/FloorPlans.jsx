import React from "react";
import floorplan1 from "../assets/floorplan1.webp";
import bhk2 from "../assets/2bhk.webp";
import bhk3 from "../assets/bhk3.webp";
import bhk31 from "../assets/bhk31.webp";
import bhk4 from "../assets/bhk4.webp";

const FloorPlans = () => (
  <div className="custom-card container-fuild shadow-sm section">
    <h2 className="head">Site & Floor Plan of Sai World Empire</h2>
    <h6 className="section-heading-sub">Master Plan</h6>
    <div className="master-plan">
    <div className="at-property-item shadow-sm border border-grey mt-1">
    <div className="at-property-img">
      <img src={floorplan1}  alt="floorplan1"  style={{maxWidth:'100%', height:"100%"}}/>
      <div className='at-property-overlayer'>   </div>
      <span className='btn btn-default at-property-btn' style={{border:"1px solid white"}}>View Master Plan</span>
      </div>
      </div>
    </div>
    <h6 className="section-heading-sub">Floor Plan</h6>
    <div className="row row-cols-1 row-cols-md-3">
      <div className="col-md-4">
        <div className="at-property-item shadow-sm border border-grey mt-1">
          <div className="at-property-img">
            <img src={bhk2} alt="2BHK image" className="floor-plan-img" />
            <div className='at-property-overlayer'>   </div>
            <span className='btn btn-default at-property-btn'>Enquire Now</span>
            </div>
            </div>
          <div className="at-property-dis effetGradient">
            2 BHK-791 - 924 Sq.ft.
          </div>
        
      </div>

      <div className="col-md-4">
        <div className="at-property-item shadow-sm border border-grey mt-1">
          <div className="at-property-img">
            <img src={bhk3}  alt="3BHK image" className="floor-plan-img"/>
            <div className='at-property-overlayer'>   </div>
            <span className='btn btn-default at-property-btn'>Enquire Now</span>
          </div>
          </div>
          <div className="at-property-dis effetGradient">
          3 BHK-1094-1373 Sq.ft.
        
        </div>
      </div>
      <div className="col-md-4">
        <div className="at-property-item shadow-sm border border-grey mt-1">
          <div className="at-property-img">
            <img src={bhk31}  alt="3BHK image" className="floor-plan-img"/>
            <div className='at-property-overlayer'>   </div>
            <span className='btn btn-default at-property-btn'>Enquire Now</span>
          </div>
          </div>
          <div className="at-property-dis effetGradient">
          3 BHK-1178-1407 Sq.ft.
          </div>
  
      </div>
      <div className="col-md-4">
        <div className="at-property-item shadow-sm border border-grey mt-1">
          <div className="at-property-img">
            <img src={bhk4} alt="4BHK image" className="floor-plan-img"/>
            <div className='at-property-overlayer'>   </div>
            <span className='btn btn-default at-property-btn'>Enquire Now</span>
          </div>
          </div>
          <div className="at-property-dis effetGradient">
          4 BHK-2093 Sq.ft.
          </div>
      
      </div>
    </div>
  </div>
);

export default FloorPlans;
