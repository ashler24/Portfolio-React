import React from 'react';
import { AiFillGithub, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import './SocialMedia.css';


const SocialMedia = () => {
    let gitHubUrl = "https://github.com/ashler24";
    let linkedInUrl = "https://www.linkedin.com/in/abhijeet-pawar-b96237130/";
    let twitterUrl = "https://twitter.com/pawar2467";
    return (
        <div className="socialMedia">
            <div className="container-sm">
                <a href={linkedInUrl} target="_blank" rel="noreferrer" id="linkedin"><AiOutlineLinkedin /></a>
                <a href={gitHubUrl} target="_blank" rel="noreferrer" id="github"><AiFillGithub /></a>
                <a href={twitterUrl} target="_blank" rel="noreferrer" id="twitter"><AiOutlineTwitter /></a>
            </div>
        </div>
    )
}

export default SocialMedia;