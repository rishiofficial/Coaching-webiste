import React from "react";
import "./testimonials-section.css";

const TestimonialsSection = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Testimonials</h2>
          <p className="section-description">
            See what our students have to say about us.
          </p>
        </div>
        <div className="testimonial-list">
          <div className="testimonial-item">
            <img
              src="path/to/student-image-1.jpg"
              alt="Student 1"
              className="student-image"
            />
            <h3 className="student-name">John Doe</h3>
            <p className="testimonial">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              lacus condimentum, viverra ipsum ut, pharetra lacus. Cras gravida
              ligula a sapien consequat, ac iaculis quam vestibulum.
            </p>
          </div>
          <div className="testimonial-item">
            <img
              src="path/to/student-image-2.jpg"
              alt="Student 2"
              className="student-image"
            />
            <h3 className="student-name">Jane Smith</h3>
            <p className="testimonial">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              lacus condimentum, viverra ipsum ut, pharetra lacus. Cras gravida
              ligula a sapien consequat, ac iaculis quam vestibulum.
            </p>
          </div>
          {/* Add more testimonial items as needed */}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
