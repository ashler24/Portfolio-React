import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import ContactMe from "./ContactMe/ContactMe";
import Greeting from "./Greeting/Greeting";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import Skills from "./Skills/Skills";

const Home = () => {
  return (
    <div>
      <section id="greetingSection">
        <div className="container-sm">
          <Greeting />
        </div>
      </section>
      <section id="skillsSection">
        <div className="container-sm mt-5">
          <Skills />
        </div>
      </section>
      <section id="contactMeSection">
        <ContactMe />
      </section>
      {/* <a
        href="#navb"
        id="topButton"
        className="btn btn-primary"
        title="Go to top"
        style={{ visibility: "visible" }}
      >
        <AiOutlineArrowUp />
      </a> */}
      <ScrollToTop />
    </div>
  );
};

export default Home;
