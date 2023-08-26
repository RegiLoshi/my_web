import React from "react";
import logo from './logo.jpeg';
import { Tilt } from 'react-tilt'
import './about_me.css';
import { SocialIcon } from 'react-social-icons';
import Fade from 'react-reveal/Fade';
const AboutMe = () => {
    const defaultOptions = {
        reverse:        false,  // reverse the tilt direction
        max:            35,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed:          3000,   // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }
    return(
        <div>
        <Fade top>
        <h1 className="white tc" id='aboutme'>About me</h1>
        <div className="tc">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
                        <img id='img' src={logo} alt='Logo'/>
                    </Tilt>
                </div>
        </div>
        <p id='p' className="text white tc">
        I'm Regi Loshi, based in Tirana, Albania.<br />
        The world of programming has captured my interest.<br />
        I'm currently a Software Engineering student at Epoka University.<br />
        Over the past year, I've been immersed in learning and crafting my own projects.<br />
        You can explore these projects on this website, which showcases my journey in creating software.<br />
        </p>
        <div className="social_media tc">
        <span id='linkedin'><SocialIcon className="grow k" url="https://www.linkedin.com/in/regi-loshi-190602276/" target="_blank" fgColor="#black" bgColor="white"  /> </span>
        <span id='instagram'><SocialIcon className="grow k" url="https://instagram.com/regi.loshi?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" fgColor="#black" bgColor="white"  /> </span>
        <span id='github'><SocialIcon className="grow k" url="https://github.com/RegiLoshi" target="_blank" fgColor="#black" bgColor="white"  /> </span>
        <span id='telegram'><SocialIcon className="grow k" url="https://t.me/RegiLoshi" target="_blank" fgColor="#black" bgColor="white"  />  </span>
        </div>
        </Fade>
        </div>
    )
}

export default AboutMe;