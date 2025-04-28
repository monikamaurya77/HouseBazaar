import React from 'react';
import image from "../assets/costing.webp";

const Services = () => {
  return (
    <div className="custom-card container-fluid shadow-sm section">
      <h4 className="services-title">Price</h4>

      {/* Table for Desktop */}
      <div className="table-responsive d-none d-md-block">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Type</th>
              <th>Carpet Area</th>
              <th>Price</th>
              <th>Tower</th>
              <th>Price Breakup</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2 BHK</td>
              <td>791 - 924 Sq. Ft.</td>
              <td>₹ 1.81 Cr Onwards</td>
              <td>Phase 1 / Phase 2</td>
              <td><button className="btn btn-sm effetGradient effectScale micro-form-btn">Price Breakup</button></td>
            </tr>
            <tr>
              <td>3 BHK</td>
              <td>1094-1373 Sq. Ft.</td>
              <td>₹ 2.46 Cr Onwards</td>
              <td>Phase 2</td>
              <td><button className="btn btn-sm effetGradient effectScale micro-form-btn">Price Breakup</button></td>
            </tr>
            <tr>
              <td>3 BHK</td>
              <td>1178-1407 Sq. Ft.</td>
              <td>₹ 2.64 Cr Onwards</td>
              <td>Phase 1</td>
              <td><button className="btn btn-sm effetGradient effectScale micro-form-btn">Price Breakup</button></td>
            </tr>
            <tr>
              <td>4 BHK</td>
              <td>2173-2189 Sq. Ft.</td>
              <td>₹ 4.02 Cr Onwards</td>
              <td>Phase 2</td>
              <td><button className="btn btn-sm effetGradient effectScale micro-form-btn">Price Breakup</button></td>
            </tr>
            <tr>
              <td>4 BHK</td>
              <td>2093 Sq. Ft.</td>
              <td>₹ 4.58 Cr Onwards</td>
              <td>Phase 1</td>
              <td><button className="btn btn-sm effetGradient effectScale micro-form-btn">Price Breakup</button></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Cards for Mobile */}
      <div className=" d-block d-md-none">
        <div className="row d-flex justify-content-center ">
          <div className="col-10">
            {/* 2 BHK Card */}
            <div className="price-card">
              <div className="price-card-header">2 BHK</div>
              <div className="price-card-body">
                <p><strong>Carpet Area:</strong> 791 - 924 Sq. Ft.</p>
                <p><strong>Price:</strong> ₹ 1.81 Cr Onwards</p>
                <p><strong>Tower:</strong> Phase 1 / Phase 2</p>
                <button className="btn btn-sm effetGradient effectScale micro-form-btn">Price Breakup</button>
              </div>
            </div>
          </div>

          <div className="col-10">
            {/* 3 BHK Card */}
            <div className="price-card">
              <div className="price-card-header">3 BHK</div>
              <div className="price-card-body">
                <p><strong>Carpet Area:</strong> 1094-1373 Sq. Ft.</p>
                <p><strong>Price:</strong> ₹ 2.46 Cr Onwards</p>
                <p><strong>Tower:</strong> Phase 2</p>
                <button className="btn btn-sm effetGradient effectScale micro-form-btn">Price Breakup</button>
              </div>
            </div>
          </div>

          <div className="col-10">
            {/* 3 BHK Card */}
            <div className="price-card">
              <div className="price-card-header">3 BHK</div>
              <div className="price-card-body">
                <p><strong>Carpet Area:</strong> 1178-1407 Sq. Ft.</p>
                <p><strong>Price:</strong> ₹ 2.64 Cr Onwards</p>
                <p><strong>Tower:</strong> Phase 1</p>
                <button className="btn btn-sm effetGradient effectScale micro-form-btn">Price Breakup</button>
              </div>
            </div>
          </div>

          <div className="col-10">
            {/* 4 BHK Card */}
            <div className="price-card">
              <div className="price-card-header">4 BHK</div>
              <div className="price-card-body">
                <p><strong>Carpet Area:</strong> 2173-2189 Sq. Ft.</p>
                <p><strong>Price:</strong> ₹ 4.02 Cr Onwards</p>
                <p><strong>Tower:</strong> Phase 2</p>
                <button className="btn btn-sm effetGradient effectScale micro-form-btn">Price Breakup</button>
              </div>
            </div>
          </div>

          <div className="col-10">
            {/* 4 BHK Card */}
            <div className="price-card">
              <div className="price-card-header">4 BHK</div>
              <div className="price-card-body">
                <p><strong>Carpet Area:</strong> 2093 Sq. Ft.</p>
                <p><strong>Price:</strong> ₹ 4.58 Cr Onwards</p>
                <p><strong>Tower:</strong> Phase 1</p>
                <button className="btn btn-sm effetGradient effectScale micro-form-btn">Price Breakup</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-4">
          <div className="at-property-item">
            <div className="at-property-img">
              <img src={image} alt="costimg image" className="w-100" />
              <div className="at-property-overlayer"></div>
              <span className="btn btn-default at-property-btn">Enquire Now</span>
            </div>
          </div>
          <div className="at-property-dis effetGradient">
            Complete Costing Details
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
