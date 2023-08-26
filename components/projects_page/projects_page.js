import React from "react";
import music_logo from "./music1.jpeg";
import './projects_page.css';
import Project from "./project_template";

const Projects = () => {

    return (
        <div id='projects' className="projects-container">
            <h1 className="tc white">Projects</h1>
            <Project
            title = "Debut Python Project: Video Downloads & Music Playback"
            desc = "My debut Python project introduces me to programming.It employs a library for hassle-free video downloads from links. The user-centric GUI empowers users to pick folders for downloads or music playback. MP3s can be directly saved or played in the chosen folder.  Future enhancements paused to prioritize other projects."
            link = "https://github.com/RegiLoshi/Python-Music-Player-and-Downloader"
            text_link = "Press to go to the Github page..."
            img = {music_logo}
            img_alt = "Music App"
            />
        </div>
    )
}

export default Projects;
