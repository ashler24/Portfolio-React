import React from 'react';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { SiCss3, SiJavascript, SiReact, SiNodeDotJs, SiDocker, SiMysql, SiNpm } from 'react-icons/si';
import "./Skills.css"


const Skills = () => {
    return (
        <div>
            <div className="skills">
                <div className="container-sm">
                    <div className="d-flex flex-row adivgn-items-center justify-content-center">
                        <div className="container-sm">
                            <div className="skildivcons d-flex flex-row">

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
                        <div className="container-sm skildivnfo">
                            <h3>What I Do</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;