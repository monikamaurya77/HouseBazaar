import React from "react";

const Aside = () => {
  return (
    <div className="custom-card bg-white info-box">
      <p className="pro-status">Booking Open: Limited Time Only</p>

      <h2 className="pro-title">
        Sai World Empire -<p className="mb-0">OC Received</p>{" "}
      </h2>
      <p className="text-grey pro-add mb-2">
        At Kharghar
        <span className="pro-dev ps-1">By Paradise Group</span>
      </p>
      <div className="d-flex justify-content-center">
        <div className="custom-card bg-grey aside-grey-card mb-3">
          <div className="d-flex w-100">
            <p className="heading2 " style={{width:"40%"}}>Land Parcel</p>{" "}
            <p className="heading1 " style={{width:"60%"}}>18 Acres</p>
          </div>
          <div className="d-flex w-100">
            <p className="heading2 " style={{width:"40%"}}>Floors </p>
            <p className="heading1 " style={{width:"60%"}}>G+40 Storeys</p>
          </div>
          <div className="d-flex w-100">
            <p className="heading2 " style={{width:"40%"}}>Possession </p>
            <p className="heading1 " style={{width:"60%"}}>Ready Possession</p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="aside-blue-container offer-bg-animation text-center">
          <div className="offer-text text-center">
            <p>- Spot Booking Offer</p>
            <p>- Early Buy Discount</p>
            <p>- Guaranteed Best Rate</p>
          </div>
        </div>
      </div>

      <p className="pro-tag-line mb-0">
        Luxurious <span className="fw-700">2, 3 & 4 BHK </span>Starting at
      </p>
      <p className="pro-price">
        <span className="aside-price">₹ 1.81 Cr</span> Onwards
      </p>
      <button className='btn effetMoveGradient '>Download Brochure</button>
    </div>
  );
};

export default Aside;
