import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-heading">About Us</h3>
            <p className="footer-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              dapibus justo non ex posuere, ut tincidunt mauris vulputate.
            </p>
          </div>
          <div className="footer-section">
            <h3 className="footer-heading">Contact</h3>
            <ul className="footer-contact">
              <li>Email: info@example.com</li>
              <li>Phone: +1 123 456 7890</li>
              <li>Address: 123 Street, City, Country</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-heading">Follow Us</h3>
            <div className="social-icons">
              <a href="/" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-text">&copy; 2023 Your Coaching Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
