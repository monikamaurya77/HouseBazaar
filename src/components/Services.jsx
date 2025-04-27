import React from 'react';
import image from "../assets/costing.webp"

const Services = () => {
  return (
    <div className="custom-card container-fuild shadow-sm section">
    
      <h4 className="services-title">Price</h4>
      <div className="row">
       <div className='col-md-8'>
       <div className="table-responsive">
        <table className="table table-striped">         
          <tbody>       
          <tr>
              <th>Type</th>
              <th>Carpet Area</th>
              <th>Price</th>
              <th>Tower</th>
              <th>Price Breakup</th>
            </tr>
            <tr>
              <td>2 BHK</td>
              <td>791 - 924 Sq. Ft.</td>
              <td>₹ 1.81 Cr Onwards	</td>
              <td>Phase 1 / Phase 2</td>
              <td><button>Price Breakup</button></td>
            </tr>
            <tr>
              <td>3 BHK</td>
              <td>1094-1373 Sq. Ft.	</td>
              <td>₹ 2.46 Cr Onwards</td>
              <td>Phase 2</td>
              <td><button>Price Breakup</button></td>
            </tr>
            <tr>
              <td>3 BHK</td>
              <td>1178-1407 Sq. Ft.</td>
              <td>₹ 2.64 Cr Onwards</td>
              <td>Phase 1</td>
              <td><button>Price Breakup</button></td>
            </tr>
            <tr>
              <td>4 BHK</td>
              <td>2173-2189 Sq. Ft.	</td>
              <td>₹ 4.02 Cr Onwards	</td>
              <td>Phase 2</td>
              <td><button>Price Breakup</button></td>
            </tr>
            <tr>
              <td>4 BHK</td>
              <td>2093 Sq. Ft.</td>
              <td>₹  4.58 Cr Onwards</td>
              <td>Phase 1</td>
              <td><button>Price Breakup</button></td>
            </tr>
          </tbody>
        </table>
        </div>
       </div>
       <div className='col-md-4 at-property-img lazyloaded'>
        <img src={image} alt="costimg image" className='w-100'/>
        <div className='at-property-overlayer'>

        </div>
        <div className='at-property-dis effetGradient'>
        Complete Costing Details
        </div>
        </div>
      </div>
 
  </div>
  )
}

export default Services