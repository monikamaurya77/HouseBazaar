import React, { useState } from 'react';
import { PiPhoneCallFill } from "react-icons/pi";
import emailjs from 'emailjs-com';

const RightSideBar = () => {
  // State to hold the form data and errors
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle form field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Send the email
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.phone) {
      setError('All fields are required!');
      return;
    }

    // Define the template params to send the email
    const templateParams = {
      from_name: formData.name,
      to_email: formData.email,
      message: "Hi" // Email body with a simple "Hi"
    };

    // Replace these with your actual EmailJS details
    const serviceID = 'YOUR_SERVICE_ID'; // Example: 'gmail'
    const templateID = 'YOUR_TEMPLATE_ID'; // Example: 'template_xxx'
    const userID = 'YOUR_USER_ID'; // Replace with the actual User ID (Public Key)

    // Send email using EmailJS service
    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('Email sent successfully', response);
        setSuccessMessage('Thank you! Your information has been submitted successfully.');
        setError('');
        setFormData({
          name: '',
          email: '',
          phone: ''
        });
      })
      .catch((error) => {
        console.error('Error sending email', error);
        setError('There was an error sending your message. Please try again later.');
      });
  };

  return (
    <div className='text-center micro-side '>
      <div className='px-2 bg-grey pb-2'>
        <div className="og-block d-flex justify-content-center align-items-center w-100">
          <div className='og-1 w-50 text-center'>PreRegister</div>
          <div className='og-2 w-50 text-center'>
            <PiPhoneCallFill className='sidebar-phone-icon'  />
            <span>+912248972062</span>
          </div>
        </div>
        <div className='mt-1'>
          <button className='btn effetGradient effectScale'>
            <PiPhoneCallFill className='sidebar-phone-icon'/>
            <span className='ps-1 sidebar-call'>Instant Call Back</span>
          </button>
        </div>
      </div>

      <div className='bg-white vh-100'>
        <p className='form-heading font-weight-bold mt-2 text-center'>Get The Best Quote</p>

        {/* Error and Success Messages */}
        {/* {error && <p className='text-danger'>{error}</p>}
        {successMessage && <p className='text-success'>{successMessage}</p>} */}

        <div className='px-3'>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder='Name'
              className='w-100 custom-input'
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder='Email Address'
              className='w-100 custom-input'
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder='Phone Number'
              className='w-100 custom-input'
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <div className='mt-4 mb-2'>
              <button type="submit" className='btn effetMoveGradient'>
                Get It Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
