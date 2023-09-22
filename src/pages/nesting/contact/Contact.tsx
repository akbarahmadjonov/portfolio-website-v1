import React from "react";
import "./Contact.scss";
// Icons
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoUpwork } from "react-icons/bi";
import { BiLogoTelegram } from "react-icons/bi";
import { BsStackOverflow } from "react-icons/bs";
import { AiOutlineMenuFold } from "react-icons/ai";

export const Contact = () => {
  return (
    <React.Fragment>
      <div className="contact">
        <h2 className="page__title">CONTACT</h2>
        <div className="contact__details">
          {/* LINKEDIN */}
          <span className="contact__items">
            <AiFillLinkedin size={18} />{" "}
            <span className="contact__links">
              Connect on{" "}
              <a
                className="contact__innerLink link"
                href="https://linkedin.com/in/akbar-ahmadjonov"
              >
                LinkedIn
              </a>
            </span>
          </span>
          {/* GITHUB */}
          <span className="contact__items">
            <AiFillGithub size={18} />{" "}
            <span className="contact__links">
              Me on{" "}
              <a
                className="contact__innerLink link"
                href="https://github.com/akbarahmadjonov"
              >
                GitHub
              </a>
            </span>
          </span>
          {/* INSTAGRAM */}
          <span className="contact__items">
            <AiOutlineInstagram size={18} />{" "}
            <span className="contact__links">
              Follow me on{" "}
              <a
                className="contact__innerLink link"
                href="https://www.instagram.com/akbarahmadjonov_/"
              >
                Instagram
              </a>
            </span>
          </span>
          {/* TWITTER */}
          <span className="contact__items">
            <AiOutlineTwitter size={18} />{" "}
            <span className="contact__links">
              Follow me on{" "}
              <a
                className="contact__innerLink link"
                href="https://twitter.com/akbarahmadjonov"
              >
                Twitter
              </a>
            </span>
          </span>
          {/* UPWORK */}
          <span className="contact__items">
            <BiLogoUpwork size={18} />{" "}
            <span className="contact__links">
              Hire me on{" "}
              <a
                className="contact__innerLink link"
                href="https://www.upwork.com/freelancers/~013a4ec95ed10e8d2e"
              >
                Upwork
              </a>
            </span>
          </span>
          {/* TELEGRAM */}
          <span className="contact__items">
            <BiLogoTelegram size={18} />{" "}
            <span className="contact__links">
              Message on{" "}
              <a
                className="contact__innerLink link"
                href="https://t.me/akbarahmadjonov"
              >
                Telegram
              </a>
            </span>
          </span>
          {/* STACKOVERFLOW */}
          <span className="contact__items">
            <BsStackOverflow size={18} />{" "}
            <span className="contact__links">
              Check me out on{" "}
              <a
                className="contact__innerLink link"
                href="https://stackoverflow.com/users/20420027/akbar-ahmadjonov"
              >
                StackOverflow
              </a>
            </span>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};
