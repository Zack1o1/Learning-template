/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Lalit Rajbanshi",
  title: "Fullstack Web Developer",
  email: "lalitrajbanshi45@gmail.com",
  gitHub: "https://github.com/Zack1o1",
  instagram: "https://www.instagram.com/lalitrajbanshi_",
  linkedIn: "https://www.linkedin.com/in/lalit-rajbanshi",
  medium: "",
  facebook: "https://www.facebook.com/lalit.rajbanshi.3158",
  youTube: "https://www.youtube.com/@zack1o1",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
