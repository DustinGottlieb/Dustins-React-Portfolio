import React from 'react';
import './Projects.css'

export function Projects() {
    return (
        <div>
           <div className="Projects row">
               <div id="NPS-App" className="card">
                   <img className="preview" src="https://dustingottlieb.github.io/Dustins-Portfolio/assets/images/projects/npsapp.jpg" alt="National Park Finder Project"></img>
                   <a href="https://dustingottlieb.github.io/National-Parks-and-Forecast-Finder/">Live Project</a>
                   <a href="https://github.com/DustinGottlieb/National-Parks-and-Forecast-Finder">Github Repository</a>
           </div>
           <div id="AwesomeCrap" className="card">
                   <img className="preview" src="https://raw.githubusercontent.com/DustinGottlieb/Dustins-React-Portfolio/main/public/Awesome%20Crap.JPG" alt="Awesome Crap"></img>
                   <a href="https://awesome-crap.herokuapp.com/">Live Project</a>
                   <a href="https://github.com/DustinGottlieb/awesome-crap">Github Repository</a>
           </div>
           <div id="techblog" className="card">
                   <img className="preview" src="https://dustingottlieb.github.io/Dustins-Portfolio/assets/images/projects/techblog.jpg" alt="Tech Blog Project"></img>
                   <a href="https://dustins-tech-blog.herokuapp.com/">Live Project</a>
                   <a href="https://github.com/DustinGottlieb/Dustins-Tech-Blog">Github Repository</a>
           </div>
           <div id="musicalmusings" className="card">
                   <img className="preview" src="https://dustingottlieb.github.io/Dustins-Portfolio/assets/images/projects/musicalmusings.jpg" alt="Musical Musings Project"></img>
                   <a href="https://dustinsmusicalmusings.herokuapp.com/">Live Project</a>
                   <a href="https://github.com/DustinGottlieb/Dustins-Musical-Musings">Github Repository</a>
           </div>
           <div id="PWGenerator" className="card">
                   <img className="preview" src="https://dustingottlieb.github.io/Dustins-Portfolio/assets/images/projects/pwgenerator.jpg" alt="Password Generator Project"></img>
                   <a href="https://dustingottlieb.github.io/Dustins-Password-Generator/">Live Project</a>
                   <a href="https://github.com/DustinGottlieb/Dustins-Password-Generator">Github Repository</a>
           </div>
           <div className="Projects row">
                   <div id="Daily-Planner" className="card">
                   <img className="preview" src="https://dustingottlieb.github.io/Dustins-Portfolio/assets/images/projects/dailyplanner.jpg" alt="Daily Planner Project"></img>
                   <a href="https://dustingottlieb.github.io/Dustin-s-Daily-Planner/">Live Project</a>
                   <a href="https://github.com/DustinGottlieb/Dustin-s-Daily-Planner">Github Repository</a>
           </div>
           </div>
           </div>
           </div>

)
}

export default Projects;