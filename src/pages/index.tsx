import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// Import pages lazily
const Home = lazy(() =>
  import("@pages/home/Home").then((module) => ({ default: module.Home }))
);
const About = lazy(() =>
  import("@pages/nesting/about/About").then((module) => ({
    default: module.About,
  }))
);
const Education = lazy(() =>
  import("@pages/nesting/education/Education").then((module) => ({
    default: module.Education,
  }))
);
const Experience = lazy(() =>
  import("@pages/nesting/experience/Experience").then((module) => ({
    default: module.Experience,
  }))
);
const Portfolio = lazy(() =>
  import("@pages/nesting/portfolio/Portfolio").then((module) => ({
    default: module.Portfolio,
  }))
);
const Contact = lazy(() =>
  import("@pages/nesting/contact/Contact").then((module) => ({
    default: module.Contact,
  }))
);
const Blog = lazy(() =>
  import("@pages/nesting/blog/Blog").then((module) => ({
    default: module.Blog,
  }))
);
// MAIN
const Main = lazy(() =>
  import("@pages/main/Main").then((module) => ({
    default: module.Main,
  }))
);

const Routings = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Fetching, please wait...</div>}>
              {" "}
              <Home />{" "}
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<div>Fetching, please wait...</div>}>
                {" "}
                <About />{" "}
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<div>Fetching, please wait...</div>}>
                {" "}
                <About />{" "}
              </Suspense>
            }
          />
          <Route
            path="education"
            element={
              <Suspense fallback={<div>Fetching, please wait...</div>}>
                {" "}
                <Education />{" "}
              </Suspense>
            }
          />
          <Route
            path="experience"
            element={
              <Suspense fallback={<div>Fetching, please wait...</div>}>
                {" "}
                <Experience />{" "}
              </Suspense>
            }
          />
          <Route
            path="portfolio"
            element={
              <Suspense fallback={<div>Fetching, please wait...</div>}>
                {" "}
                <Portfolio />{" "}
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<div>Fetching, please wait...</div>}>
                {" "}
                <Contact />{" "}
              </Suspense>
            }
          />
          <Route
            path="blog"
            element={
              <Suspense fallback={<div>Fetching, please wait...</div>}>
                {" "}
                <Blog />{" "}
              </Suspense>
            }
          />
        </Route>
        {/* MAIN PAGE */}
        <Route
          path="/work"
          element={
            <Suspense>
              {" "}
              <Main />{" "}
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default Routings;
