import React, { useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import "./Home.scss";
import ProfilePic from "@images/akbar-profile3.jpg";
import PDF from "../../shared/assets/akbar-resume-latest.pdf";
// Icons
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoUpwork } from "react-icons/bi";
import { BiLogoTelegram } from "react-icons/bi";
import { BsStackOverflow } from "react-icons/bs";
import { SlMenu } from "react-icons/sl";
import { FiDownload } from "react-icons/fi";

// Type for component's state
interface HomeState {
  isMenuOpen: boolean;
}

export const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<HomeState>({
    isMenuOpen: false,
  });

  const handleMenuIcon = () => {
    setIsMenuOpen((prevState) => ({
      ...prevState,
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  const location = useLocation();
  const isLinkActive = (path) => {
    return location.pathname === path;
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="home">
      <div className="container">
        <div className="home__inner">
          <div className="home__innerLeft">
            <div className="home__flexs">
              <div style={{ position: "absolute", left: 0, right: 0 }}>
                <marquee behavior="" direction="">
                  <p style={{ color: "white" }}>COMING SOON......</p>
                </marquee>
              </div>
              <NavLink to={"/"}>
                <img
                  className="home__pic"
                  src={ProfilePic}
                  width={175}
                  height={175}
                  alt="profile picture"
                />
              </NavLink>
              <div className="home__flexWrapper">
                {" "}
                <h2 className="home__title">Akbar A.</h2>
                <p className="home__job">Frontend Developer</p>
              </div>
              <div className="home__menuIconWrapper">
                <SlMenu
                  className="home__menuIcon"
                  color="white"
                  size={40}
                  onClick={handleMenuIcon}
                />
              </div>
            </div>
            <div className="home__links">
              <span className="home__profileLinks">
                <a
                  target="_blank"
                  href="https://linkedin.com/in/akbar-ahmadjonov"
                >
                  <AiFillLinkedin size={22} color="aliceblue" />
                </a>
                <a target="_blank" href="https://github.com/akbarahmadjonov">
                  <AiFillGithub size={22} color="aliceblue" />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/akbarahmadjonov_/"
                >
                  <AiFillInstagram size={22} color="aliceblue" />
                </a>
                <a target="_blank" href="https://twitter.com/akbarahmadjonov">
                  <AiOutlineTwitter size={22} color="aliceblue" />
                </a>
                <a href="/contact">
                  <BiLogoUpwork size={22} color="aliceblue" />
                </a>
                <a target="_blank" href="https://t.me/akbarahmadjonov">
                  <BiLogoTelegram size={22} color="aliceblue" />
                </a>
                <a
                  target="_blank"
                  href="https://stackoverflow.com/users/20420027/akbar-ahmadjonov"
                >
                  <BsStackOverflow size={22} color="aliceblue" />
                </a>
              </span>
            </div>
            {/* Components */}
            <ul
              className={`home__componentPages ${
                isMenuOpen.isMenuOpen ? "active" : ""
              }`}
              onClick={handleCloseMenu}
            >
              <li>
                <NavLink
                  className={`home__componentPagesItem ${
                    isLinkActive("/about") ? "active-link" : ""
                  }`}
                  to={"/about"}
                >
                  ABOUT
                </NavLink>
              </li>
              <li>
                <a href="/work" className="home__componentPagesItem">
                  WORK PAGE <span className="home__newPage">New</span>
                </a>
              </li>
              <li>
                <a
                  href={PDF}
                  download
                  target="_blank"
                  className="home__componentPagesItem"
                  rel="noreferrer"
                >
                  RESUME <FiDownload style={{ marginRight: "6px" }} size={18} />
                  <span className="home__newPage">New</span>
                </a>
              </li>
              <li>
                <NavLink
                  className={`home__componentPagesItem ${
                    isLinkActive("/education") ? "active-link" : ""
                  }`}
                  to={"/education"}
                >
                  EDUCATION
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`home__componentPagesItem ${
                    isLinkActive("/experience") ? "active-link" : ""
                  }`}
                  to={"/experience"}
                >
                  EXPERIENCE
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`home__componentPagesItem ${
                    isLinkActive("/portfolio") ? "active-link" : ""
                  }`}
                  to={"/portfolio"}
                >
                  PORTFOLIO <span className="home__newPage">New</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`home__componentPagesItem ${
                    isLinkActive("/contact") ? "active-link" : ""
                  }`}
                  to={"/contact"}
                >
                  CONTACT
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`home__componentPagesItem ${
                    isLinkActive("/blog") ? "active-link" : ""
                  }`}
                  to={"/blog"}
                >
                  BLOG
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="home__innerRight">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
