import React, { useState } from 'react';
import './App.css';

import Nav from './components/Nav';
import About from './components/About'
import Projects from './components/Projects';
import Resume from './components/Resume';
import ContactForm from './components/Contact';

function App() {

  
  const [categories] = useState([
    {
        name: "projects",
        description: "Things I have made.",
    },
    { name: "resume", description: "My Resume." },
]);

const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
       categories={categories}
       setCurrentCategory={setCurrentCategory}
       currentCategory={currentCategory}
       ></Nav>
      <main> 
        <About></About>
        <Projects currentCategory={currentCategory}></Projects>
        <Resume></Resume>
        <ContactForm></ContactForm>
      </main>
    </div>
  );
}

export default App;
