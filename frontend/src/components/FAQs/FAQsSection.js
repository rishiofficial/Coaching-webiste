import React from "react";
import "./faq-section.css";

const FAQSection = () => {
  return (
    <section className="faq">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        <div className="faq-list">
          <div className="faq-item">
            <h3 className="question">How do I enroll in a course?</h3>
            <p className="answer">
              You can enroll in a course by visiting our website and selecting
              the desired course. Follow the instructions to complete the
              enrollment process.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="question">Are the study materials provided?</h3>
            <p className="answer">
              Yes, study materials are provided for each course. You will have
              access to downloadable resources, lecture notes, and additional
              learning materials.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="question">What is the duration of the courses?</h3>
            <p className="answer">
              The duration of the courses may vary depending on the subject and
              level. You can find the course duration mentioned on the course
              details page.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="question">Can I access the courses on mobile?</h3>
            <p className="answer">
              Yes, our courses are accessible on mobile devices. You can access
              them through our mobile app or by visiting our website on your
              mobile browser.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
