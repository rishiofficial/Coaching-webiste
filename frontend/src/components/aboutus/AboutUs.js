import React from "react";
import "./about-section.css";
// import Navbar from "../navbar/Navbar";
// import Footer from "../footer/Footer";
import aboutimg from "../../assets/beautiful-stylish-staff-sitting-office-desk-using-laptop-listening-colleague.jpg"

const AboutSection = () => {
  return (
    <div>
      {/* <Navbar /> */}
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <img
              src={aboutimg}
              alt="About"
              className="about__image"
            />
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="about__content">
              <h2 className="about__title">About Us</h2>
              <p className="about__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eget lacus condimentum, viverra ipsum ut, pharetra lacus. Cras
                gravida ligula a sapien consequat, ac iaculis quam vestibulum.
                Sed rhoncus urna a viverra viverra. Nulla ultrices condimentum
                sem, nec rhoncus velit malesuada id. Sed condimentum dictum
                erat, vel volutpat nulla ullamcorper non.
              </p>
              <p className="about__description">
                Sed vehicula lectus a orci efficitur, a ultricies nulla
                tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia Curae; Vestibulum tempor aliquam
                tortor id blandit. Nulla lobortis purus a est vestibulum, eu
                pellentesque mi malesuada.
              </p>
              <a href="/team" className="btn about__btn">
                Meet Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <Footer /> */}
    </div>
  );
};

export default AboutSection;
