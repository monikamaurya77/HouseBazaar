import React from "react";

const About = () =>{
    return(
        <section id="about" className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="https://via.placeholder.com/500"
                alt="About Us"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6">
              <h2>About Us</h2>
              <p>
                We are a team of dedicated professionals committed to delivering
                high-quality solutions.
              </p>
              <a href="#contact" className="btn btn-outline-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    )
}

export default About;