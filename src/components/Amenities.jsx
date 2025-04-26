import React from 'react';

const amenities = [
  { name: 'Gymnasium', icon: '/assets/amenities/gym.png' },
  { name: 'Swimming Pool', icon: '/assets/amenities/pool.png' },
  { name: 'Clubhouse', icon: '/assets/amenities/clubhouse.png' },
  { name: 'Children\'s Play Area', icon: '/assets/amenities/playarea.png' },
  { name: 'Jogging Track', icon: '/assets/amenities/jogging.png' },
  { name: 'Garden', icon: '/assets/amenities/garden.png' },
];

const Amenities = () => (
  <section className="container my-5">
    <h2 className="text-center mb-4">Amenities</h2>
    <div className="row text-center">
      {amenities.map((amenity, index) => (
        <div className="col-6 col-md-4 mb-4" key={index}>
          <img src={amenity.icon} alt={amenity.name} className="mb-2" style={{ width: '50px' }} />
          <h6>{amenity.name}</h6>
        </div>
      ))}
    </div>
  </section>
);

export default Amenities;
