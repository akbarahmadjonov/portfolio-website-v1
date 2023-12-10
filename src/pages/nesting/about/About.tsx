import React from "react";
import "./About.scss";
// ICONS
import { FaInfoCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

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
              className="about__links link"
              target="_blank"
              href="https://teal-nicholle-18.tiiny.site/"
            >
              akbarahmadjonov.resume <GoLinkExternal />
            </a>
          </span>
          <span className="about__parts">
            <FaInfoCircle className="about__icon" size={14} />
            Lives in Tashkent, Uzbekistan
          </span>
          <span className="about__parts">
            <FaInfoCircle className="about__icon" size={14} /> Birthday: July 15
          </span>
          {/* <span className="about__parts">
            <FaInfoCircle className="about__icon" size={14} /> Experience: Nearly 1
            Year
          </span> */}
        </div>
        <div className="about__selfSectionWrapper">
          <p className="about__myselfSection">
            Hi, thanks for checking out my Website! My full name is Akbar
            Ahmadjonov. I am both frontend and backend developer with almost one
            years of web experience building websites. I am passionate about web
            development in all forms and like building apps that can help
            others. I have created - and improved - dozens of successful web
            applications/websites that have reached 200 users. And I have worked
            with individuals and companies. I maintain an unwavering dedication
            to continuous self-improvement. I continually expand my skill set by
            exploring diverse platforms, frameworks, and programming languages.
            Outside of work I am constantly teaching myself and learning how to
            build apps with various platforms, frameworks, languages, etc. My
            other hobbies include: Robotics, Math, checkers, and more!
          </p>
        </div>
        {/* SKILLS SECTION */}
        <section className="about__skills">
          <h2 className="page__title">SKILLS</h2>
          <ul className="about__skillsList">
            <li className="skills__item">
              <FaCheck className="about__checkIcon" /> HTML
            </li>
            <li className="skills__item">
              <FaCheck className="about__checkIcon" /> Node.js
            </li>
            <li className="skills__item">
              <FaCheck className="about__checkIcon" /> Git
            </li>
            <li className="skills__item">
              <FaCheck className="about__checkIcon" /> Responsive Design
            </li>
            <li className="skills__item">
              <FaCheck className="about__checkIcon" /> CSS
            </li>
            <li className="skills__item">
              <FaCheck className="about__checkIcon" /> Express.js
            </li>
            <li className="skills__item">
              <FaCheck className="about__checkIcon" /> Webpack, Vite
            </li>
            <li className="skills__item">
              <FaCheck className="about__checkIcon" /> Figma, PSD
            </li>
            <li className="skills__item">
              <FaCheck className="about__checkIcon" /> Sass/SCSS
            </li>
            <li className="skills__item">
              <FaCheck className="about__checkIcon" /> MongoDB
            </li>
            <li className="skills__item">
              <FaCheck className="about__checkIcon" /> Bootstrap
            </li>
            <li className="skills__item">
              <FaCheck className="about__checkIcon" /> Ant Design
            </li>
            <li className="skills__item">
              <FaCheck className="about__checkIcon" /> JavaScript
            </li>
            <li className="skills__item">
              <FaCheck className="about__checkIcon" /> TypeORM, Sequelize
            </li>
            <li className="skills__item">
              <FaCheck className="about__checkIcon" /> Tailwind CSS
            </li>
            <li className="skills__item">
              <FaCheck className="about__checkIcon" /> MUI (Material UI)
            </li>
            <li className="skills__item">
              <FaCheck className="about__checkIcon" /> React
            </li>
            <li className="skills__item">
              <FaCheck className="about__checkIcon" /> PostgreSQL
            </li>
            <li className="skills__item">
              <FaCheck className="about__checkIcon" /> BEM methodology
            </li>
            <li className="skills__item">
              <FaCheck className="about__checkIcon" /> Chrome DevTools
            </li>
          </ul>
        </section>
      </div>
    </React.Fragment>
  );
};
