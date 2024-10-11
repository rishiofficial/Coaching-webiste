import React from "react";
// import heroImg from "../../assets/photo-funny-red-hair-woman-look-laptop-blue.jpg";
import "./herosection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="hero-content">
              <h2 className="mb-4 hero-title">
                Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
              </h2>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Aut saepe voluptatum earum delectus <br /> deserunt id iste,
                quas officiis et repellat!
              </p>
            </div>
            {/* <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div> */}
          </div>

          <div className="col-lg-6 col-md-6">
            {/* <img src={heroImg} alt="" className="w-100 hero-img" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
