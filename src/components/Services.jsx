import React from 'react'

const Services = () => {
  return (
    <section id="services" className="py-5">
    <div className="container">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body text-center">
              <h5 className="card-title">Service 1</h5>
              <p className="card-text">Description of Service 1.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body text-center">
              <h5 className="card-title">Service 2</h5>
              <p className="card-text">Description of Service 2.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body text-center">
              <h5 className="card-title">Service 3</h5>
              <p className="card-text">Description of Service 3.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Services