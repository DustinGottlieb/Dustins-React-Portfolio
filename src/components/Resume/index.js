import React from 'react';
import './Resume.css'

export function Resume() {
    return (
        <div class="Resume">
        <h5>Skills</h5>
               <ul>
               <li>JavaScript</li>
               <li>Node</li>
            <li>MongoDB</li>
            <li>SQL</li>
            <li>Sequilize</li>
            <li>HTML5</li>
            <li>CSS</li>
        </ul>
        <a href="/DustinGottlieb-Resume.pdf" id="resume" download><h5>My Resume</h5></a></div>
    )
}

export default Resume;