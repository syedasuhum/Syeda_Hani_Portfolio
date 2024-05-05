import React from 'react';
import vtu from "../../assets/VTU-Logo.png";
import sb from "../../assets/sb_logo.png";
import './education.css';
import { IoLinkOutline } from "react-icons/io5";

const education = () => {
 
  return (
    <div className='container mt-5' id="education">
      <div class="title-section">
          <h2 class="title">Education</h2>
          <span class="border-icon">
          <span class="title-icon"></span>
          </span>
       </div>
       <div className='row'>
        <div className='col-lg-4 col-md-6 col-12'>
        <div className='edu_text mt-2'>
        <h5 className='edu_part'>B.E(Computer Science and Engineering (CSE), 2021)</h5>
        <p>I completed my B.E. in Computer Science from Godutai College for Women(under VTU ) in 2021 with an <b style={{color:"#d578cb"}}>aggregate of 8.56</b>. My project  
           focused on developing a <b style={{color:"#d578cb"}}>Smart Museum system using IoT and low-energy
        WiFi</b>, leveraging Raspberry Pi for efficient implementation.</p>
       </div>
        </div>
        <div className='col-lg-3 col-md-6 col-12'>
        <div class="my_container">
      
      <div class="line"></div>
      <img src={vtu} alt="Your Image" class="image"/>
    </div>
        </div>
       </div>

       <div className='row'>
        <div className='col-lg-4 col-md-6 col-12'></div>
        
        <div className='col-lg-3 col-md-6 col-12'>
        <div class="my_container">
      
      <div class="line"></div>
      <img src={sb} alt="Your Image" class="image"/>
    </div>
        </div>
        <div className='col-lg-4 col-md-6 col-12'>
        <div className='edu_text mt-2'>
        <h5 className='edu_part'>M.Tech(Artficial Intelligence and Data Science (AI and DS), 2023)</h5>
        <p>I graduated with an M.Tech in Artificial Intelligence and Data Science from Sharnbasva University, in 2023
          achieving <b style={{color:"#d578cb"}}>9.63 CGPA</b> and securing the <b style={{color:"#d578cb"}}>2nd rank</b>       (<a href='https://youtube.com/clip/UgkxZ1VcVTp8cyr62fR0wwScwhSJ2vhlexZl?si=LvGzYojBloHkFIHc'><IoLinkOutline/>Covocation Link</a>) in the university. My noteworthy project
           involved employing Convolutional Neural Network (CNN) techniques to identify NPK deficiency in toor leaves. 
           This pioneering work culminated in a paper published in IEEE(<a href='https://docs.google.com/document/d/1Ynkgd7amJLfZ7jU8IaYL3XjRFoeogY34/edit?usp=sharing&ouid=111684445536136917459&rtpof=true&sd=true'><IoLinkOutline/>Paper Link</a>), marking a significant contribution to the field
            of agricultural technology and image processing.</p>
       
       </div>
        </div>
       </div>
    
      
    </div>
  )
}

export default education