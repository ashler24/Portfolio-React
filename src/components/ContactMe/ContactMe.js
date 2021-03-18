import React from "react";
import SocialMedia from "../SocialMedia/SocialMedia";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <>
      <div id="contactMe" className="container-sm">
        <h3 className="contact-me-title">
          Contact Me{" "}
          <span aria-label="phone" role="img">
            ☎️
          </span>
        </h3>
        <SocialMedia />
        <h5 className="footer-tag-line">
          Made with
          <span aria-label="heart" role="img">
            ❤️
          </span>
          by Abhijeet Pawar
        </h5>
      </div>
    </>
  );
};

export default ContactMe;
