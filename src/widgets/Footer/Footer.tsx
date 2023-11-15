import React from "react";
import "./Footer.scss";

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__links">
            <h4 className="footer__links-title">Inner links</h4>
            <ul className="footer__list">
              <li className="footer__items">
                <a className="footer__link" href="#">
                  Services
                </a>
              </li>
              <li className="footer__items">
                <a className="footer__link" href="#">
                  Testimonials
                </a>
              </li>
              <li className="footer__items">
                <a className="footer__link" href="#">
                  Blog
                </a>
              </li>
              <li className="footer__items">
                <a className="footer__link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__links">
            <h4 className="footer__links-title">Services</h4>
            <ul className="footer__list">
              <li className="footer__items">
                <a className="footer__link" href="#">
                  Web Development
                </a>
              </li>
              <li className="footer__items">
                <a className="footer__link" href="#">
                  Frontend Development
                </a>
              </li>
              <li className="footer__items">
                <a className="footer__link" href="#">
                  Backend Development
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__links">
            <h4 className="footer__links-title">Usage</h4>
            <ul className="footer__list">
              <li className="footer__items">
                <a className="footer__link" href="#">
                  Privacy Policy
                </a>
              </li>
              <li className="footer__items">
                <a className="footer__link" href="#">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>
          <small className="footer__copyright">
            © Copyright Akbar Ahmadjonov 2023
          </small>
        </div>
      </div>
    </div>
  );
};
// services
// Inner links
