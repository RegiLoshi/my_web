import React from "react";
import { Tilt } from "react-tilt";
import Fade from 'react-reveal/Fade';
const Project = ({title ,  desc , link , text_link, img , img_alt}) =>{
    return(
        <Fade top>
        <div className="project">
            <div className="text-project">
                <h2 className="white">{title}</h2>
                <p className="white">{desc}</p>
                <br />
                <p><a href={link}>{text_link}</a></p>
            </div>
            <Tilt>
            <img src={img} alt={img_alt} target='_blank' />
            </Tilt>
        </div>
        </Fade>
    )
}
export default Project;