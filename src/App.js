import './App.css';
import React from 'react';

import AboutMe from './components/AboutMe';
import Header from './components/Header';

function App() {
  return (
    <div>
      <header><Header /></header>
      <AboutMe />
    </div>
  );
}

export default App;
