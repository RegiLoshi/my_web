import React from "react";
import ContactForm from "./ContactForm";
import { Fade } from "react-reveal";
import { SocialIcon } from "react-social-icons";
const Contact = () => {
    return(
    <div id='contact'>
    <Fade top>
    <h1 className="white tc ">Contact Me</h1>
    <ContactForm /> 
    <p className="tc white">You can also contact me directly: <br /> <br /> <a href="mailto:regi@regiloshi.com">regi@regiloshi.com</a></p>
    <div className="social_media2 tc">
        <span id='linkedin'><SocialIcon className="grow k" url="https://www.linkedin.com/in/regi-loshi-190602276/" target="_blank" fgColor="#black" bgColor="white"  /> </span>
        <span id='instagram'><SocialIcon className="grow k" url="https://instagram.com/regi.loshi?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" fgColor="#black" bgColor="white"  /> </span>
        <span id='github'><SocialIcon className="grow k" url="https://github.com/RegiLoshi" target="_blank" fgColor="#black" bgColor="white"  /> </span>
        <span id='telegram'><SocialIcon className="grow k" url="https://t.me/RegiLoshi" target="_blank" fgColor="#black" bgColor="white"  />  </span>
        </div>
    </Fade>
    </div>
    )
}
export default Contact;