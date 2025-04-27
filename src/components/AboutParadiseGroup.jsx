import React from "react";
import logo from "../assets/logo3.svg"
import qrcode1 from "../assets/qrcode1.webp";
import qrcode2 from "../assets/qrcode2.webp";
import qrcode3 from "../assets/qrcode3.webp";
import qrcode4 from "../assets/qrcode4.webp";

const AboutParadiseGroup = () => {
  return (
    <section id="about" className="py-4 custom-card">
      <div className="container">
        <div className="row align-items-center">
            <div className="text-center">
                <img src={logo} height="65px" alt="logo"/>
            </div>
          <div className="col-12">
            <div className="d-flex justify-content-between">
              <div>
                <h4 className="section-heading-sub text-capitalize">
                  About Paradise Group
                </h4>
              </div>

              <div>
                <button>Chat with us</button>
              </div>
            </div>
            <p>
              Founded in 1990, Paradise Group develops luxury residential
              properties & retail malls across the emerging locales of Mumbai &
              Navi Mumbai. With a firm presence in suburbs such as Kalyan,
              Chembur, Dombivli, Kharghar, Taloja, & Panvel, the company has
              built a good niche for itself in the city through the years.
            </p>
          </div>
          <div className="col-12">
<h6>RERA Information</h6>
<div className="d-flex justify-content-between">
    <div>
         <img src={qrcode1} className="img-fuild" alt="qrcode1" />
         <p>Sai World Empire MahaRERA -</p>
         <p>P51700002446</p>
    </div>
    <div>
         <img src={qrcode2} className="img-fuild" alt="qrcode1" />
         <p>Sai World Empire Phase II</p>
         <p>MahaRERA - P52000026796</p>
    </div>
    <div>
         <img src={qrcode3} className="img-fuild" alt="qrcode1" />
         <p>Sai World Empire Phase III</p>
         <p>MahaRERA - P52000029168</p>
    </div>
    <div>
         <img src={qrcode4} className="img-fuild" alt="qrcode1" />
         <p>Sai World Empire Phase IV</p>
         <p>MahaRERA - P52000051836</p>
    </div>
</div>
<p>Paradise Group has been registered via MahaRERA registration number and is available on the</p>
<p>website https://maharera.mahaonline.gov.in/ under registered projects.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutParadiseGroup;
