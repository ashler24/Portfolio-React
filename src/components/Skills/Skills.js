import React from 'react';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { SiCss3, SiJavascript, SiReact, SiNodeDotJs, SiDocker, SiMysql, SiNpm } from 'react-icons/si';
import "./Skills.css"


const Skills = () => {
    return (
        <div>
            <div className="container-sm" id="skills">
                <div>
                    <div className="container-sm" id="skilldivicons">

                        <div>
                            <div><span><AiOutlineHtml5 /></span></div>
                            <div><span><SiCss3 /></span></div>
                            <div><span><SiJavascript /></span></div>
                        </div>
                        <div>
                            <div><span><SiReact /></span></div>
                            <div><span><SiNodeDotJs /></span></div>
                            <div><span><SiDocker /></span></div>
                        </div>
                        <div>
                            <div><span><SiMysql /></span></div>
                            <div><span><SiNpm /></span></div>
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
                            ⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications
                            </h5>
                        <h5>
                            ⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks
                            </h5>
                        <h5>
                            ⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean
                            </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;