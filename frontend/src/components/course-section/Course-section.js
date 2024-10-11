import React from "react";
import "./course-section.css";

const CourseSection = () => {
  return (
    <section className="course">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Courses</h2>
          <p className="section-description">
            Choose from a wide range of courses tailored to your needs.
          </p>
        </div>
        <div className="course-list">
          <div className="course-item">
            <img
              src="path/to/course-image-1.jpg"
              alt="Course 1"
              className="course-image"
            />
            <h3 className="course-title">Course 1</h3>
            <p className="course-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              lacus condimentum.
            </p>
            <a href="/course-1" className="btn course-btn">
              Learn More
            </a>
          </div>
          <div className="course-item">
            <img
              src="path/to/course-image-2.jpg"
              alt="Course 2"
              className="course-image"
            />
            <h3 className="course-title">Course 2</h3>
            <p className="course-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              lacus condimentum.
            </p>
            <a href="/course-2" className="btn course-btn">
              Learn More
            </a>
          </div>
          <div className="course-item">
            <img
              src="path/to/course-image-2.jpg"
              alt="Course 2"
              className="course-image"
            />
            <h3 className="course-title">Course 3</h3>
            <p className="course-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              lacus condimentum.
            </p>
            <a href="/course-2" className="btn course-btn">
              Learn More
            </a>
          </div>
          
          {/* Add more course items as needed */}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
