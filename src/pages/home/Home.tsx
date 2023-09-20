import React, { useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import "./Home.scss";
import ProfilePic from "@images/akbar-profile.jpg";
// Icons
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoUpwork } from "react-icons/bi";
import { BiLogoTelegram } from "react-icons/bi";
import { BsStackOverflow } from "react-icons/bs";
import { AiOutlineMenuFold } from "react-icons/ai";

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
                <AiOutlineMenuFold
                  className="home__menuIcon"
                  color="white"
                  size={50}
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
                  <AiFillLinkedin size={22} color="white" />
                </a>
                <a target="_blank" href="https://github.com/akbarahmadjonov">
                  <AiFillGithub size={22} color="white" />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/akbarahmadjonov_/"
                >
                  <AiFillInstagram size={22} color="white" />
                </a>
                <a target="_blank" href="https://twitter.com/akbarahmadjonov">
                  <AiOutlineTwitter size={22} color="white" />
                </a>
                <a href="https://www.upwork.com/freelancers/~013a4ec95ed10e8d2e">
                  <BiLogoUpwork size={22} color="white" />
                </a>
                <a target="_blank" href="https://t.me/akbarahmadjonov">
                  <BiLogoTelegram size={22} color="white" />
                </a>
                <a
                  target="_blank"
                  href="https://stackoverflow.com/users/20420027/akbar-ahmadjonov"
                >
                  <BsStackOverflow size={22} color="white" />
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
                <a
                  target="_blank"
                  href="https://teal-nicholle-18.tiiny.site/"
                  className={`home__componentPagesItem ${
                    isLinkActive("/resume") ? "active-link" : ""
                  }`}
                >
                  RESUME
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
                  PORTFOLIO
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
          {/* <div className="container"> */}
            <div className="home__innerRight">
              <Outlet />
            </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
