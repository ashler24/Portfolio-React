import { Container } from "@material-ui/core";
import React from "react";
import { AiOutlineHtml5 } from "react-icons/ai";
import {
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodeDotJs,
  SiDocker,
  SiMysql,
  SiNpm
} from "react-icons/si";
import { Toast, ToastBody, ToastHeader, Progress } from "reactstrap";
import "./Skills.css";

const Skills = () => {
  return (
    <div>
      <div className="container-sm" id="skills">
        <div>
          <div className="container-sm" id="skilldivicons">
            <div>
              <div>
                <span>
                  <AiOutlineHtml5 />
                </span>
              </div>
              <div>
                <span>
                  <SiCss3 />
                </span>
              </div>
              <div>
                <span>
                  <SiJavascript />
                </span>
              </div>
            </div>
            <div>
              <div>
                <span>
                  <SiReact />
                </span>
              </div>
              <div>
                <span>
                  <SiNodeDotJs />
                </span>
              </div>
              <div>
                <span>
                  <SiDocker />
                </span>
              </div>
            </div>
            <div>
              <div>
                <span>
                  <SiMysql />
                </span>
              </div>
              <div>
                <span>
                  <SiNpm />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container-sm" id="skilldivinfo">
            <h3>What I Do</h3>
            <h4>
              CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
            </h4>
            <h5>
              <span aria-label="lightning" role="img">
                ⚡
              </span>{" "}
              Develop highly interactive Front end / User Interface.
            </h5>
          </div>
        </div>
      </div>
      <Container className="skill-level-wrapper">
        <Toast className="skill-level-header">
          <ToastHeader className="js">
            <span>
              <SiJavascript />
            </span>
            <div className="skill-level-names">Javascript</div>
          </ToastHeader>
          <ToastBody>
            <Progress animated color="warning" value="75" />
          </ToastBody>
        </Toast>
        <Toast className="skill-level-header">
          <ToastHeader className="node-js">
            <span>
              <SiNodeDotJs />
            </span>
            <div className="skill-level-names">Node JS</div>
          </ToastHeader>
          <ToastBody>
            <Progress animated color="success" value="55" />
          </ToastBody>
        </Toast>
        <Toast className="skill-level-header">
          <ToastHeader className="react-js">
            <span>
              <SiReact />
            </span>
            <div className="skill-level-names">React JS</div>
          </ToastHeader>
          <ToastBody>
            <Progress animated color="info" value="70" />
          </ToastBody>
        </Toast>
      </Container>
    </div>
  );
};

export default Skills;
