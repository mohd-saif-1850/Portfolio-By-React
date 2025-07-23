import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter } from 'react-router-dom';
import About from './About'
import Skills from './Skills';
import Projects from './Projects';
import WorkTogether from './WorkTogether';
import Home from './Home';

function PortFolio() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    </BrowserRouter>
    <Home />
    <About />
    <Skills />
    <Projects />
    <WorkTogether />
    </>
  )
}

export default PortFolio
