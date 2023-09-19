import React from "react";
import { Route, Routes } from "react-router-dom";
// import ScrollToTop from "./../shared/components/index";

// Import pages
import { Home } from "@pages/home/Home";
import { About } from "@pages/nesting/about/About";
import { Education } from "@pages/nesting/education/Education";
import { Experience } from "@pages/nesting/experience/Experience";
import { Portfolio } from "@pages/nesting/portfolio/Portfolio";
import { Contact } from "@pages/nesting/contact/Contact";
import { Blog } from "@pages/nesting/blog/Blog";

const Routings = () => {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<About />} />
          <Route path="about" element={<About />} />
          <Route path="education" element={<Education />} />
          <Route path="experience" element={<Experience />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routings;
