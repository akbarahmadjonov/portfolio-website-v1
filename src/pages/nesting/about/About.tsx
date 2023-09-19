import React from "react";
import "./About.scss";
// ICONS
import { FaInfoCircle } from "react-icons/fa";

export const About = () => {
  return (
    <React.Fragment>
      <div className="about">
        <h2 className="page__title">ABOUT AKBAR</h2>
        {/* UPPER SECTION */}
        <div className="about__wrapper">
          <span className="about__parts">
            <FaInfoCircle className="about__icon" size={14} /> Resume:{" "}
            <a
              className="about__links"
              target="_blank"
              href="https://teal-nicholle-18.tiiny.site/"
            >
              akbarahmadjonov.resume.website
            </a>
          </span>
          <span className="about__parts">
            <FaInfoCircle className="about__icon" size={14} />
            Lives in Tashkent, Uzbekistan
          </span>
          <span className="about__parts">
            <FaInfoCircle className="about__icon" size={14} /> Birthday: July
            15, 2002
          </span>
          <span className="about__parts">
            <FaInfoCircle className="about__icon" size={14} /> Experience: 1+
            Years
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};
