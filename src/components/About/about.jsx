import "./about.css";
import React from "react";
import gif from '../../assets/mygif.gif';
import resume from '../../assets/Syeda_Umme_Hani(resume).pdf';

const Intro = () => {
  return (
    <section id="about">
      <h5> know about me</h5>
      <div class="title-section">
          <h2 class="title">About Me</h2>
          <span class="border-icon">
          <span class="title-icon"></span>
          </span>
       </div>
      <div className="container about__container">
        
        <div className="about__content">
         
          <p>
          I have been working on front-end projects for more than <b style={{color:"#d578cb"}}>2 years</b>,
           and I am passionate about creating flawless user experiences. I have a thorough understanding of
            the <b style={{color:"#d578cb"}}>MERN (MongoDB, Express.js, React.js, and Node.js) stack</b>. As a full-stack developer, 
            I like making designs come to life and use my knowledge of frontend and backend development 
            to create dependable, scalable systems. I'm committed to keeping up with emerging technology
             and industry best practices so that my work is constantly at the cutting edge of innovation.
                
          </p>
          <div className="cta">
             
      <a href={resume} download className="btn">
        Download resume
      </a>
       <a href="mailto:syedaummehani.m@gmail.com" className="btn">Send a message</a>
      
    </div>
        </div>
        <div className="mt-2">
          <div className="about__me-image">
            <img src={gif} alt="syeda hani" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
