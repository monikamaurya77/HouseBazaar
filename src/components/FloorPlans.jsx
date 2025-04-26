import React from 'react';

const floorPlans = [
  { type: '2 BHK', image: '/assets/floorplan1.jpg' },
  { type: '3 BHK', image: '/assets/floorplan2.jpg' },
];

const FloorPlans = () => (
  <section className="container my-5">
    <h2 className="text-center mb-4">Floor Plans</h2>
    <div className="row">
      {floorPlans.map((plan, index) => (
        <div className="col-md-6 mb-4" key={index}>
          <div className="card">
            <img src={plan.image} className="card-img-top" alt={`${plan.type} Floor Plan`} />
            <div className="card-body">
              <h5 className="card-title text-center">{plan.type}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default FloorPlans;
