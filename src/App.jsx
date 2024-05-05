import React from 'react';
import Contact from './components/Contact/contact';
import Skill from './components/Skills/skill';
import Footer from './components/footer/Footer';
import Home from './components/Home/home';
import About from './components/About/about';
import Portfolio from './components/Portfolio/Portfolio';
import Education from './components/Education/education';
import Topbar from './components/Navbar/navbar';


const App = () => {
  return (
    <>
      <Home />
      <Topbar />
      <About />
      <Skill />
      <Portfolio />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default App
