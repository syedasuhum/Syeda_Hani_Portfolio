import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './skill.css';
import { VscTools } from "react-icons/vsc";
import { MdLanguage } from "react-icons/md";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { TbBrandHtml5 } from "react-icons/tb";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandBootstrap } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
// import { AiOutlineDotNet } from "react-icons/ai";
import { SiDotnet } from "react-icons/si"
import { SiMui } from "react-icons/si";
import { SiMicrosoftazure } from "react-icons/si";
import { SiPowerbi } from "react-icons/si";
import { AiOutlineGithub } from "react-icons/ai";
const Experience = () => {
  
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
  return (
    <>
    <div className='container mt-5' id='experience'>
      <div class="title-section">
          <h2 class="title">Skills</h2>
          <span class="border-icon">
          <span class="title-icon"></span>
          </span>
       </div>
       <div className='skill__card'>
        <ul>
          <li className='skill_line'><span className='icon__size'><VscTools /></span> <h5 className='skill__head'>Technology/Tools:</h5><p className='skill__text'>ReactJS, Next.js, Node.js, MongoDB, Express.js, SQL, Power BI, Figma, Microsoft Azure, Github </p></li>
          <li className='skill_line'><span className='icon__size'><MdLanguage /></span> <h5 className='skill__head'>Languages:</h5><p className='skill__text'>HTML, CSS, JavaScript, C, C++, Java, Python, C#, ASP.NET </p></li>
          <li className='skill_line'><span className='icon__size'><MdOutlineLibraryBooks /></span> <h5 className='skill__head'>Library/Framework:</h5><p className='skill__text'>Bootstrap, Material UI, .NET (.NET framework or .NET Core), OOP (Object-Oriented Programming) </p></li>
          
        </ul>
        

       </div>
      
      <Carousel responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={1800}
      infinite={true}
      arrows={false}>
      <div className='tech-image mt-2'>
        <span className='my_shadow'><TbBrandHtml5/></span>
        <p className='tech-title'>HTML</p>

      </div>
      <div className='tech-image mt-2'>
        <span className='my_shadow'><TbBrandCss3 /></span>
        <p className='tech-title'>CSS</p>
      </div>
      <div className='tech-image mt-2'>
        <span className='my_shadow'><TbBrandJavascript /></span>
        <p className='tech-title'>JavaScript</p>
      </div>
      <div className='tech-image mt-2'>
        <span className='my_shadow'><TbBrandBootstrap /></span>
        <p className='tech-title'>Bootstrap</p>
      </div>
      <div className='tech-image mt-2'>
        <span className='my_shadow'><GrReactjs /></span>
        <p className='tech-title'>Reactjs</p>
      </div>
      <div className='tech-image mt-2'>
        <span className='my_shadow'><TbBrandNextjs /></span>
        <p className='tech-title'>Nextjs</p>
      </div>
      <div className='tech-image mt-2'>
        <span className='my_shadow'><SiMongodb /></span>
        <p className='tech-title'>Mongodb</p>
      </div>
      <div className='tech-image mt-2'>
        <span className='my_shadow'>< FaNode /></span>
        <p className='tech-title'>Nodejs</p>
      </div>
      <div className='tech-image mt-2'>
        <span className='my_shadow'><SiExpress /></span>
        <p className='tech-title'>Expressjs</p>
      </div>
      <div className='tech-image mt-2'>
        <span className='my_shadow'><DiMsqlServer /></span>
        <p className='tech-title'>SQL</p>
      </div>
      <div className='tech-image mt-2'>
        <span className='my_shadow'><SiDotnet /></span>
        <p className='tech-title'>.NET</p>
      </div>
      <div className='tech-image mt-2'>
        <span className='my_shadow'><SiMui /></span>
        <p className='tech-title'>Material UI</p>
      </div>
      <div className='tech-image mt-2'>
        <span className='my_shadow'><SiMicrosoftazure /></span>
        <p className='tech-title'> Microsoft Azure</p>
      </div>
      <div className='tech-image mt-2'>
        <span className='my_shadow'><SiPowerbi /></span>
        <p className='tech-title'>Power BI</p>
      </div>
       <div className='tech-image mt-2'>
        <span className='my_shadow'><AiOutlineGithub /></span>
        <p className='tech-title'>Github</p>
      </div>
    </Carousel>
    </div></>
  
  )
}

export default Experience