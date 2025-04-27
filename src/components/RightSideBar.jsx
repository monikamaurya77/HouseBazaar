import React from 'react';
import { PiPhoneCallFill } from "react-icons/pi";


const RightSideBar = () => {
  return (
    <div className='text-center'>
      <div className='px-2 bg-grey pb-2'>
      <div className="og-block d-flex justify-content-center w-100">
      <div className='og-1 w-50 text-center'>PreRegister</div>
      <div className='og-2 w-50 text-center'><PiPhoneCallFill /> <span>+912248972062</span>
      </div>
      </div>
      <div className=' mt-1 '>
  <button >
        <PiPhoneCallFill />
            Instant Call Back
        </button>
  </div>
      </div>
 <div className='bg-white'>
 <p className='form-heading font-weight-bold mt-2'>Get The Best Quote</p>
        <div className='px-3'>
        <input type="text" placeholder='Name' className='w-100 custom-input'/>
        <input type="text" placeholder='Email Address' className='w-100 custom-input'/>
        <input type="text" placeholder='Phone Number' className='w-100 custom-input'/>
        </div>
       
        <div className=' mt-4 mb-2'>
        <button>
     Get It Now
        </button>
        </div>
 </div>
     
       
    </div>
  )
}

export default RightSideBar