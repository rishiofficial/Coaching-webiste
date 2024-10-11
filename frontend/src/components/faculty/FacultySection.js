import React from "react";
import "./faculty-section.css";

const FacultySection = () => {
  return (
    <section className="faculty">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Faculty</h2>
          <p className="section-description">
            Meet our dedicated and experienced faculty members.
          </p>
        </div>
        <div className="faculty-list">
          <div className="faculty-item">
            <img
              src="path/to/faculty-image-1.jpg"
              alt="Faculty 1"
              className="faculty-image"
            />
            <h3 className="faculty-name">John Doe</h3>
            <p className="faculty-designation">Physics Faculty</p>
          </div>
          <div className="faculty-item">
            <img
              src="path/to/faculty-image-2.jpg"
              alt="Faculty 2"
              className="faculty-image"
            />
            <h3 className="faculty-name">Jane Smith</h3>
            <p className="faculty-designation">Mathematics Faculty</p>
          </div>
          {/* Add more faculty items as needed */}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
