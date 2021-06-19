import React from 'react';
import './App.css';

import Nav from './components/Nav';
import About from './components/About'
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main> 
        <About></About>
        <Projects></Projects>
        <Resume></Resume>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
