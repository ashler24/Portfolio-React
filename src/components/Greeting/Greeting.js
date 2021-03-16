import React from "react";
import SocialMedia from "../SocialMedia/SocialMedia";
import "./Greeting.css";
import profilepic from "./profilepic.jpg";

const myName = {
  color: "#DB1B4B"
};

const Greeting = () => {
  return (
    <div>
      <div className="greeting">
        <div>
          <div className="container-sm">
            <h3 className="name-intro">
              Hi all, I'm{" "}
              <span style={myName} className="my-name">
                Abhijeet
              </span>{" "}
              <span aria-hidden="true" className="hand">
                👋
              </span>
            </h3>
            <p className="greeting-text-p">
              A passionate Full Stack Software Developer{" "}
              <span aria-hidden="true">🚀</span> having an experience of
              building Web with JavaScript / Reactjs / Nodejs and some other
              cool libraries and frameworks.
            </p>
            <div className="row">
              <SocialMedia />
            </div>
            <div
              className="d-flex flex-row justify-content-start flex-wrap"
              id="greetingBtns"
            >
              <button className="btn btn-primary m-1 mr-5">Contact Me</button>
              <button className="btn btn-primary m-1">See Resume</button>
            </div>
          </div>
        </div>
        <div>
          <div className="container-sm profile-pic-wrapper">
            <img
              src={profilepic}
              alt="profilepic"
              id="profileImg"
              className="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
