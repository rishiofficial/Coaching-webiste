import React from "react";
import "./pricing-section.css";

const PricingSection = () => {
  return (
    <section className="pricing">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Pricing</h2>
          <p className="section-description">
            Choose the perfect plan for your learning journey.
          </p>
        </div>
        <div className="pricing-plans">
          <div className="pricing-plan">
            <h3 className="plan-name">Basic</h3>
            <div className="plan-price">
              <span className="currency">$</span>
              <span className="amount">19</span>
              <span className="period">/month</span>
            </div>
            <ul className="plan-features">
              <li>Access to all courses</li>
              <li>Study materials included</li>
              <li>Limited support</li>
              <li>No certificate</li>
            </ul>
            <button className="btn">Get Started</button>
          </div>
          <div className="pricing-plan">
            <h3 className="plan-name">Pro</h3>
            <div className="plan-price">
              <span className="currency">$</span>
              <span className="amount">39</span>
              <span className="period">/month</span>
            </div>
            <ul className="plan-features">
              <li>Access to all courses</li>
              <li>Study materials included</li>
              <li>Priority support</li>
              <li>Certificates upon completion</li>
            </ul>
            <button className="btn">Get Started</button>
          </div>
          <div className="pricing-plan">
            <h3 className="plan-name">Premium</h3>
            <div className="plan-price">
              <span className="currency">$</span>
              <span className="amount">59</span>
              <span className="period">/month</span>
            </div>
            <ul className="plan-features">
              <li>Access to all courses</li>
              <li>Study materials included</li>
              <li>Priority support</li>
              <li>Certificates upon completion</li>
              <li>Live online classes</li>
            </ul>
            <button className="btn">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
