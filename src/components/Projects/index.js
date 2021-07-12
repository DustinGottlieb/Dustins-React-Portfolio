import React from 'react';
import './Projects.css'

export function Projects() {
    return (
        <div>
           <h3 id="projects">Projects</h3> 
           <div class="Projects">
           <div class="project-column NPS-App"><a href="#NPS-App">
           <h4>National Park & Forecast Finder</h4></a>
           </div>
           
           <div class="project-column Daily-Planner">
           <h4>Daily Planner</h4>
           </div>
        
           <div class="project-column techblog">
           <h4>Tech Blog</h4>
           </div>
    
           <div class="project-column musicalmusings">
           <h4>Musical Musings</h4>
           </div>
           
           <div class="project-column PWGenerator">
            <h4>Password Generator</h4>
            </div>
           </div>
               <div id="NPS-App">
                   <img class="preview" src="https://dustingottlieb.github.io/Dustins-Portfolio/assets/images/projects/npsapp.jpg" alt="National Park Finder Project"></img>
                   <a href="https://dustingottlieb.github.io/National-Parks-and-Forecast-Finder/">Project Page</a>
                   <a href="https://github.com/DustinGottlieb/National-Parks-and-Forecast-Finder">Github Page</a>
           </div>
           <div id="Daily-Planner">
                   <img class="preview" src="https://dustingottlieb.github.io/Dustins-Portfolio/assets/images/projects/dailyplanner.jpg" alt="Daily Planner Project"></img>
                   <a href="https://dustingottlieb.github.io/Dustin-s-Daily-Planner/">Project Page</a>
                   <a href="https://github.com/DustinGottlieb/Dustin-s-Daily-Planner">Github Page</a>
           </div>

           </div>

)
}

export default Projects;