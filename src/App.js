import './App.css';
import React from 'react';

import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <header><Header /></header>
      <AboutMe />
      <Projects />
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default App;
