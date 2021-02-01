import React from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import Greeting from './Greeting/Greeting';
import Skills from './Skills/Skills';


const Home = () => {
    return (
        <div>
            <section id="greetingSection">
                <div className="container-sm mt-5">
                    <Greeting />
                </div>
            </section>
            <section id="skillsSection">
                <div className="container-sm mt-5">
                    <Skills />
                </div>
            </section>
            <a href="#navb" id="topButton" className="btn btn-primary" title="Go to top" style={{ visibility: "visible" }}><AiOutlineArrowUp /></a>
        </div>

    )
}

export default Home;