import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { BiAward } from "react-icons/bi";
import { BiBookReader } from "react-icons/bi";
import { PiGraduationCap } from "react-icons/pi";
import './navbar.css';

const Topbar = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav>
      <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}style={{fontSize:"1.5rem"}}><AiOutlineHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}style={{fontSize:"1.5rem"}}><AiOutlineUser /></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}style={{fontSize:"1.5rem"}}><BiBookReader /></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''} style={{fontSize:"1.5rem"}}><BiAward /></a>
      <a href="#education" onClick={()=> setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}style={{fontSize:"1.5rem"}}><PiGraduationCap/></a>
     
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}style={{fontSize:"1.5rem"}}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Topbar;