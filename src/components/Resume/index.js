import React from 'react';
import './Resume.css'

export function Resume() {
    return (
        <div className="Resume">
        <h5>Skills</h5>
        <div className="skills">
        <ul>
            <li>JavaScript</li>
            <li>Node</li>
            <li>MongoDB</li>
            <li>SQL</li>
            <li>Sequilize</li>
            <li>HTML5</li>
            <li>CSS</li>
        </ul>
        <a href="/DustinGottlieb-Resume.pdf" id="resume" download><h5>My Resume</h5></a></div></div>
    )
}

export default Resume;