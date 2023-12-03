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
// ANT DESIGN
import { Popover } from "antd";
import { Input, message } from "antd";
const { TextArea } = Input;

export const Contact = () => {
  // SUCCESS MESSAGE
  const handleSubmit = () => {
    setTimeout(() => {
      message.success("Your message has been sent successfully.");
    }, 2000);
  };

  // POPOVER
  const upworkPopoverContent = (
    <div style={{ width: "100%", maxWidth: "350px" }}>
      <p>I'm available for projects on Upwork.</p>
      <a
        target="_blank"
        href="https://www.upwork.com/freelancers/~013a4ec95ed10e8d2e"
      >
        Click here
      </a>
    </div>
  );

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
            <Popover
              content={upworkPopoverContent}
              title="Upwork Contact"
              trigger="hover"
            >
              <div className="upwork"></div>
              <BiLogoUpwork size={18} />
              {""}
              <span className="contact__links">
                Hire me on{" "}
                <a
                  className="contact__innerLink link"
                  href="https://www.upwork.com/freelancers/~013a4ec95ed10e8d2e"
                >
                  Upwork
                </a>
              </span>
            </Popover>
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
        {/* CONTACT FORM */}
        <section className="action">
          <h2 className="action__title">Leave a project overview</h2>
          <form
            action="https://formsubmit.co/akbarahmadjonovv@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
          >
            {/* Honeypot */}
            <input type="text" name="_honey" style={{ display: "none" }} />
            {/* Disable CAPTCHA */}
            <input type="hidden" name="_captcha" value="false" />
            {/* SUCCESS PAGE */}
            <input
              type="hidden"
              name="_next"
              value="https://akbarahmadjonov.com/contact"
            />

            <div className="action__forms">
              <div className="action__inputs">
                <Input
                  className="action__input"
                  size="large"
                  placeholder="Type of Project"
                  name="subject"
                  required
                />
                <Input
                  className="action__input"
                  size="large"
                  placeholder="Your name"
                  name="name"
                  required
                />
              </div>
              <Input
                className="action__input"
                size="large"
                placeholder="Email address or phone number"
                name="email"
                required
              />
              <TextArea
                className="action__input"
                rows={4}
                placeholder="Please provide a brief description of your project and any budget constraints (if applicable)."
                name="message"
              />
              <div className="action__submit">
                <small className="action__input-info">
                  I typically respond within an hour.
                </small>
                <button type="submit" className="action__button">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </React.Fragment>
  );
};
