import React from 'react';
import { AiOutlineArrowUp} from 'react-icons/ai';
import Greeting from './Greeting/Greeting';


const Home = () => {
    return (
        <div>
            <section id="greetingSection">
                <div className="container-sm mt-5">
                    <Greeting />
                </div>
                <button id="topButton" className="btn btn-primary" title="Go to top" style={{ visibility: "visible" }}><AiOutlineArrowUp /></button>
            </section>
        </div>

    )
}

export default Home;