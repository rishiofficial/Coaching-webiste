import React from "react";
import "./feature-section.css";

const FeatureSection = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Key Features</h2>
          <p className="section-description">
            Discover the key features that set us apart.
          </p>
        </div>
        <div className="feature-list">
          <div className="feature-item">
            <i className="fas fa-book-open feature-icon"></i>
            <h3 className="feature-title">Comprehensive Study Material</h3>
            <p className="feature-description">
              Access our extensive library of study materials for all courses.
            </p>
          </div>
          <div className="feature-item">
            <i className="fas fa-chalkboard-teacher feature-icon"></i>
            <h3 className="feature-title">Expert Faculty</h3>
            <p className="feature-description">
              Learn from experienced and knowledgeable faculty members.
            </p>
          </div>
          {/* Add more feature items as needed */}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
