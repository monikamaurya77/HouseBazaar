import React from 'react';
import logo1 from "../assets/popuplogo.svg"

const PopUp = () => {
  return (
    // <!-- Button trigger modal -->
    // <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    //   Open Modal
    // </button>
    
    <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
        
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Virtual Site Visit</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          
          <div className="modal-body">
            <div className='container'>
<div className='row'>
<div className='col-md-4'>

<i className="material-icons">Instant Call Back</i>
<i className="mi mi-support-visit">Free Site Visit</i>
<i className="mi mi-support-price">Unmatched Price</i>
</div>
<div className='col-md-8'>
<img src={logo1} alt="logo" height="40.4625px"/>
<p>Register here and Avail the <span className='text-danger'>Best Offers!!</span></p>
<form className="row g-3 justify-content-center" 
// onSubmit={handleSubmit}
>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            name="name"
            // value={form.name}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-4">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            // value={form.email}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-4">
          <input
            type="tel"
            className="form-control"
            placeholder="Phone Number"
            name="phone"
            // value={form.phone}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="col-12 text-center">
          <button type="submit" className="btn effetMoveGradient">
           Start Tour
          </button>
        </div>
      </form>
</div>
</div>
            </div>
       
          </div>
          
          {/* <div class="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div> */}
          
        </div>
      </div>
    </div>
    
  )
}

export default PopUp