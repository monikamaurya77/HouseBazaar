import React from "react";
import logo from "../assets/logo3.svg"
import qrcode1 from "../assets/qrcode1.webp";
import qrcode2 from "../assets/qrcode2.webp";
import qrcode3 from "../assets/qrcode3.webp";
import qrcode4 from "../assets/qrcode4.webp";
import { Link } from 'react-router-dom';

const AboutParadiseGroup = () => {
  return (
    <div className="custom-card container-fuild shadow-sm section" id="about">
      <div className="container">
    
            <div className="text-center">
                <img src={logo} height="65px" alt="logo" className="paradise-logo"/>
            </div>
          <div className="row ">
           
              <div className="col-md-8">
                <h4 className="section-heading-sub text-capitalize">
                  About Paradise Group
                </h4>
              </div>

              <div className="col-md-4 text-end d-none d-md-block">
                <button className="btn effetMoveGradient">Chat with us</button>
              </div>
        </div>
            <p>
              Founded in 1990, Paradise Group develops luxury residential
              properties & retail malls across the emerging locales of Mumbai &
              Navi Mumbai. With a firm presence in suburbs such as Kalyan,
              Chembur, Dombivli, Kharghar, Taloja, & Panvel, the company has
              built a good niche for itself in the city through the years.
            </p>
       
       
<h6 className="section-heading-sub1 ">RERA Information</h6>
<div className="row">
    <div className="col-md-3 col-6">
      <div className="rera-img">
      <img src={qrcode1}  alt="qrcode1" style={{maxWidth:"100%", height:"100px"}}/>
      </div>
         <p className="mb-0">Sai World Empire MahaRERA -</p>
         <b>P51700002446</b>
  
        
    </div>
    <div className="col-md-3 col-6">
    <div className="rera-img">
         <img src={qrcode2} className="" alt="qrcode1" style={{maxWidth:"100%", height:"100px"}}/>
         </div>
         <p className="mb-0">Sai World Empire Phase II</p>
         <b>MahaRERA - P52000026796</b>
    </div>
    <div className="col-md-3 col-6">
    <div className="rera-img">
         <img src={qrcode3}  alt="qrcode1" style={{maxWidth:"100%", height:"100px"}}/>
         </div>
         <p className="mb-0">Sai World Empire Phase III</p>
         <b>MahaRERA - P52000029168</b>
    </div>
    <div className="col-md-3 col-6">
    <div className="rera-img">
         <img src={qrcode4} alt="qrcode1" style={{maxWidth:"100%", height:"100px"}}/>
         </div>
         <p className="mb-0">Sai World Empire Phase IV</p>
         <b>MahaRERA - P52000051836</b>
    </div>
</div>
<div className="pro-rera mt-3">
<p className="mb-0">Paradise Group has been registered via MahaRERA registration number and is available on the</p>
<p>website <Link to="https://maharera.mahaonline.gov.in/">https://maharera.mahaonline.gov.in/</Link> under registered projects.</p>
</div>

          </div>
      
          <div className='text-center d-block d-md-none mt-4'>
<button className="btn btn-primary btn effetMoveGradient micro-form-btn">Chat with US</button>
</div>
    </div>
  );
};

export default AboutParadiseGroup;
