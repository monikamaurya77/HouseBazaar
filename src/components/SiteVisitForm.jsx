import React, { useState } from 'react';

const SiteVisitForm = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Site visit request submitted successfully!');
    setForm({ name: '', email: '', phone: '' });
  };

  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Book a Site Visit</h2>
      <form className="row g-3 justify-content-center" onSubmit={handleSubmit}>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-4">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-4">
          <input
            type="tel"
            className="form-control"
            placeholder="Phone Number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary px-5">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default SiteVisitForm;
