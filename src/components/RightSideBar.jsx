import React from 'react';
import { PiPhoneCallFill } from "react-icons/pi";


const RightSideBar = () => {
  return (
    <div className='text-center micro-side'>
      <div className='px-2 bg-grey pb-2'>
      <div className="og-block d-flex justify-content-center w-100">
      <div className='og-1 w-50 text-center'>PreRegister</div>
      <div className='og-2 w-50 text-center'><PiPhoneCallFill  style={{height:"2rem", width:"1.5rem"}}/> <span>+912248972062</span>
      </div>
      </div>
      <div className=' mt-1 '>
  <button className='btn effetGradient effectScale '>
        <PiPhoneCallFill style={{height:"2rem", width:"1.5rem"}}/>
        <i className='mi mi-call'></i>
            <span className='ps-1'>Instant Call Back</span>
        </button>
  </div>
      </div>
 <div className='bg-white vh-100'>
 <p className='form-heading font-weight-bold mt-2 text-center'>Get The Best Quote</p>
        <div className='px-3'>
        <input type="text" placeholder='Name' className='w-100 custom-input'/>
        <input type="text" placeholder='Email Address' className='w-100 custom-input'/>
        
        <input type="text" placeholder='Phone Number' className='w-100 custom-input'/>
        </div>
       
        <div className=' mt-4 mb-2'>
        <button className='btn effetMoveGradient '>
     Get It Now
        </button>
        </div>
 </div>
     
       
    </div>
  )
}

export default RightSideBar