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
              href="https://akbarahmadjonov.tiiny.site"
            >
              akbarahmadjonov.resume <GoLinkExternal />
            </a>
          </span>
          <span className="about__parts">
            <FaInfoCircle className="about__icon" size={14} />
            Lives in Tashkent, Uzbekistan
          </span>
          <span className="about__parts">
            <FaInfoCircle className="about__icon" size={14} /> Email:{" "}
            <a
              className="about__links link"
              target="_blank"
              href="mailto:akbarahmadjonovv@gmail.com"
            >
              akbarahmadjonovv@gmail.com <GoLinkExternal />
            </a>
          </span>
          {/* <span className="about__parts">
            <FaInfoCircle className="about__icon" size={14} /> Experience: Nearly 1
            Year
          </span> */}
        </div>
        <div className="about__selfSectionWrapper">
          <p className="about__myselfSection">
            Hi, thanks for checking out my Website! My full name is Akbar
            Ahmadjonov. I’m a dynamic, result-oriented and strong customer
            focused front-end developer with 1+ years of experience in building
            responsive and user-centric web applications. Proficient in HTML5,
            CSS3, JavaScript and modern front-end framework React.js. I have a
            proven track of translating design mockups and wireframes into
            pixel-perfect, intuitive user interfaces. Additionally, I’m
            experienced in utilizing preprocessors like SCSS, version control
            systems like Git, and task runners like Webpack. Strong collaborator
            with a passion for staying updated and emerging web technologies and
            best practices. I’m eager to learn and work on myself to sharpen my
            skills. Excellent communication abilities are key in my work!
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
