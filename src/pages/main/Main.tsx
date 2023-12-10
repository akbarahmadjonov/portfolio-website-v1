import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoUpwork } from "react-icons/bi";
import { BiLogoTelegram } from "react-icons/bi";
import { BsStackOverflow } from "react-icons/bs";
import { MdOutlineZoomInMap } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
// ANT DESIGN
import { Alert, Space } from "antd";
import styles from "./Main.module.scss";

export const Main: React.FC = () => {
  return (
    <React.Fragment>
      <div className={styles.main}>
        <div className={styles.myComponentContainer}>
          <div className={styles.main__inner}>
            <ul className={styles.main__list}>
              <li className={styles.main__item}>
                <a className={styles.mainLink} href="/">
                  About
                </a>
              </li>
              <li className={styles.main__item}>
                <a className={styles.mainLink} href="/">
                  Services
                </a>
              </li>
              <li className={styles.main__item}>
                <a className={styles.mainLink} href="/">
                  Contact
                </a>
              </li>
              <li className={styles.main__item}>
                <a className={styles.mainLink} href="/">
                  Portfolio
                </a>
              </li>
              <li className={styles.main__item}>
                <a className={styles.mainLink} href="">
                  Support
                </a>
              </li>
            </ul>
            {/* TRANSLATION */}
            <div className={styles.translations}>
              <h5>translate</h5>
            </div>
          </div>
          {/* HERO SECTION */}
          <section className={styles.hero}>
            <div className="container">
              <div className={styles.heroInner}>
                <span className={styles.heroNewPage}>New</span>{" "}
                <span className={styles.heroNewPageIntroduce}>
                  Introducing my new webpage, featuring my{" "}
                  <span className={styles.heroNewPageWorkclass}>
                    recent works
                  </span>
                  , Education, Portfolio, and Experience.
                </span>
                <span>
                  <a className={styles.heroNewPagelink} href="/">
                    Go to the page <MdChevronRight size={20} />
                  </a>
                </span>
                <h1 className={styles.heroTextSmall}>AKBAR</h1>
                <h1 className={styles.heroTextBig}>AHMADJONOV</h1>
                <p className={styles.heroTextParagraph}>Frontend Developer</p>
                <a href="/">
                  <button className={styles.heroButtonsSchedule}>
                    Workfolio
                  </button>
                </a>
                <button className={styles.heroButtonServices}>Services</button>
              </div>
            </div>
          </section>
          {/* SOCIAL ICONS */}
          <div className={styles.heroIcons}>
            <div className={styles.myComponentContainer}>
              <a
                href="https://linkedin.com/in/akbar-ahmadjonov"
                className={styles.heroItems}
              >
                <FaLinkedinIn size={26} color="aliceblue" />{" "}
              </a>
              <a
                href="https://github.com/akbarahmadjonov"
                className={styles.heroItems}
              >
                <AiFillGithub size={26} color="aliceblue" />{" "}
              </a>
              <a
                href="https://www.instagram.com/akbarahmadjonov_/"
                className={styles.heroItems}
              >
                <AiOutlineInstagram size={26} color="aliceblue" />{" "}
              </a>
              <a
                href="https://twitter.com/akbarahmadjonov"
                className={styles.heroItems}
              >
                <AiOutlineTwitter size={26} color="aliceblue" />{" "}
              </a>
              <a
                href="https://www.upwork.com/freelancers/~013a4ec95ed10e8d2e"
                className={styles.heroItems}
              >
                <BiLogoUpwork size={26} color="aliceblue" />{" "}
              </a>
              <a
                href="https://t.me/akbarahmadjonov"
                className={styles.heroItems}
              >
                <BiLogoTelegram size={26} color="aliceblue" />{" "}
              </a>
              <a
                href="https://stackoverflow.com/users/20420027/akbar-ahmadjonov"
                className={styles.heroItems}
              >
                <BsStackOverflow size={26} color="aliceblue" />{" "}
              </a>
            </div>
            <div>
              <MdOutlineZoomInMap size={26} color="aliceblue" />
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <Alert
            style={{
              display: "inline-flex",
              justifyContent: "center",
              width: "400px",
              marginTop: "100px",
              marginBottom: "100px",
              textAlign: "left",
            }}
            message="Working on changes..."
            description="This page is currently operating in test mode. Other sections are under development by the website owner. Thank you for your patience!"
            type="info"
            showIcon
          />
        </div>
      </div>
    </React.Fragment>
  );
};
