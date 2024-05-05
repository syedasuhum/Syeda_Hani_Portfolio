import "./portfolio.css";
import React from "react";
import portfolio from "../../assets/portfilio.png";
import health from "../../assets/hospital_management.png";
import hiring from "../../assets/hiring_interns.png";
import fashion from "../../assets/fashion_page.png";
import fitness from "../../assets/fitness.png";
import hotel from "../../assets/hotel_booking.png";
import weather from "../../assets/weather_report.png";
import website from "../../assets/website_costing.png";
import idea from "../../assets/ideaengine.png";
import heart from "../../assets/health.png";
import sale from "../../assets/order_summary.png";
import color from "../../assets/color_search.png";
import { TbBrandHtml5 } from "react-icons/tb";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandBootstrap } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { RiCodeView } from "react-icons/ri";
import { SiDotnet } from "react-icons/si"
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { SiPowerbi } from "react-icons/si";
import { SiMicrosoftexcel } from "react-icons/si";

const Portfolio = () => {
  return (
  <div className="container mt-5" id="portfolio">
    <div class="title-section">
          <h2 class="title">Portfolio</h2>
          <span class="border-icon">
          <span class="title-icon"></span>
          </span>
       </div>
       <div className="row" style={{gap:"10px", display:"flex"}}>
        <div className="col-lg-4 col-md-4 col-12 portfolio_card">
          <img src={portfolio} alt="syeda hani" className="img_port"/>
          <h4 className="text-center mt-3">Porfolio</h4>
          <p>Crafted with ReactJS, my portfolio showcases dynamic, responsive design. Seamlessly blending HTML and CSS, it offers an immersive user experience.</p>
          <ul className="portfolio_icons">
            <li><TbBrandHtml5/></li>
            <li><TbBrandCss3/></li>
            <li><TbBrandBootstrap/></li>
            <li><GrReactjs/></li>
          </ul>
          <div className="cta">
      <a href="https://github.com/syedasuhum/Syeda_Hani_Portfolio" className="btn">
      <span style={{fontSize:"1.3rem"}}><RiCodeView  /></span> Code
      </a>
       <a href="#" className="btn">View < FaArrowUpRightFromSquare /></a>
      
    </div>
        </div>
        <div className="col-lg-4 col-md-4 col-12 portfolio_card">
          <img src={health} alt="syeda hani" className="img_port"/>
          <h4 className="text-center mt-3">Healthcare </h4>
          <p>Utilizing .NET with JavaScript, HTML, and CSS for healthcare application development, ensuring robust functionality and user-friendly interfaces.</p>
          <ul className="portfolio_icons">
            <li><TbBrandHtml5/></li>
            <li><TbBrandCss3/></li>
            <li><TbBrandBootstrap/></li>
            <li><SiDotnet/></li>
            <li><DiMsqlServer/></li>
            <li><TbBrandJavascript/></li>
          </ul>
          <div className="cta">
      <a href="#" className="btn">
      <span style={{fontSize:"1.3rem"}}><RiCodeView  /></span> Code
      </a>
       <a href="#" className="btn">View < FaArrowUpRightFromSquare /></a>
      
    </div>
        </div>
        <div className="col-lg-4 col-md-4 col-12 portfolio_card">
          <img src={hiring} alt="syeda hani" className="img_port"/>
          <h4 className="text-center mt-3">Hiring Intetrns </h4>
          <p>I utilize .NET alongside JavaScript, HTML, and CSS for my hiring intents, ensuring robust web development with a focus on frontend and backend technologies.</p>
          <ul className="portfolio_icons">
            <li><TbBrandHtml5/></li>
            <li><TbBrandCss3/></li>
            <li><TbBrandBootstrap/></li>
            <li><SiDotnet/></li>
            <li><TbBrandJavascript/></li>
          </ul>
          <div className="cta">
      <a href="#" className="btn">
      <span style={{fontSize:"1.3rem"}}><RiCodeView  /></span> Code
      </a>
       <a href="#" className="btn">View < FaArrowUpRightFromSquare /></a>
      
    </div>
        </div>
       </div>

       <div className="row" style={{gap:"10px", display:"flex"}}>
        <div className="col-lg-4 col-md-4 col-12 portfolio_card">
          <img src={fitness} alt="syeda hani" className="img_port"/>
          <h4 className="text-center mt-3">Fitness</h4>
          <p>Built a JavaScript fitness app tracking weight loss, gain, and other metrics. Utilizes algorithms to calculate progress and provide personalized recommendations.</p>
          <ul className="portfolio_icons">
            <li><TbBrandHtml5/></li>
            <li><TbBrandCss3/></li>
            <li><TbBrandBootstrap/></li>
            <li><TbBrandJavascript/></li>
          </ul>
          <div className="cta">
      <a href="#" className="btn">
      <span style={{fontSize:"1.3rem"}}><RiCodeView  /></span> Code
      </a>
       <a href="#" className="btn">View < FaArrowUpRightFromSquare /></a>
      
    </div>
        </div>
        <div className="col-lg-4 col-md-4 col-12 portfolio_card">
          <img src={hotel} alt="syeda hani" className="img_port"/>
          <h4 className="text-center mt-3">Hotel Booking </h4>
          <p>Create a hotel booking form with validation fields using HTML, JavaScript, and .net files for data storage. Ensure user input is validated to meet required criteria before submission.</p>
          <ul className="portfolio_icons">
            <li><TbBrandHtml5/></li>
            <li><TbBrandCss3/></li>
            <li><TbBrandBootstrap/></li>
            <li><SiDotnet/></li>
            <li><DiMsqlServer/></li>
            <li><TbBrandJavascript/></li>
          </ul>
          <div className="cta">
      <a href="#" className="btn">
      <span style={{fontSize:"1.3rem"}}><RiCodeView  /></span> Code
      </a>
       <a href="#" className="btn">View < FaArrowUpRightFromSquare /></a>
      
    </div>
        </div>
        <div className="col-lg-4 col-md-4 col-12 portfolio_card">
          <img src={fashion} alt="syeda hani" className="img_port"/>
          <h4 className="text-center mt-3">Fashion Page</h4>
          <p>Fashion page utilizing .net and JavaScript for seamless shopping experience. Browse a wide array of clothing and accessories with dynamic features and smooth navigation</p>
          <ul className="portfolio_icons">
            <li><TbBrandHtml5/></li>
            <li><TbBrandCss3/></li>
            <li><TbBrandBootstrap/></li>
            <li><SiDotnet/></li>
            <li><TbBrandJavascript/></li>
            <li><DiMsqlServer/></li>
          </ul>
          <div className="cta">
      <a href="#" className="btn">
      <span style={{fontSize:"1.3rem"}}><RiCodeView  /></span> Code
      </a>
       <a href="#" className="btn">View < FaArrowUpRightFromSquare /></a>
      
    </div>
        </div>
       </div>

       <div className="row" style={{gap:"10px", display:"flex"}}>
        <div className="col-lg-4 col-md-4 col-12 portfolio_card">
          <img src={idea} alt="syeda hani" className="img_port"/>
          <h4 className="text-center mt-3">Idea Engine</h4>
          <p>Introducing an AI-powered tool that generates customized PDFs based on user responses to a set of tailored questions. Streamlining document creation with precision and efficiency.</p>
          <ul className="portfolio_icons">
            <li><GrReactjs/></li>
            <li><SiMongodb/></li>
            <li><FaNode/></li>
            <li>< SiExpress/></li>
          </ul>
          <div className="cta">
      <a href="https://github.com/syedasuhum/idea-engine-frontend" className="btn">
      <span style={{fontSize:"1.3rem"}}><RiCodeView  /></span> Code
      </a>
       <a href="https://idea-engine-frontend.vercel.app/" className="btn">View < FaArrowUpRightFromSquare /></a>
      
    </div>
        </div>
        <div className="col-lg-4 col-md-4 col-12 portfolio_card">
          <img src={website} alt="syeda hani" className="img_port"/>
          <h4 className="text-center mt-3">Website Costing </h4>
          <p>Introducing our website cost calculator, a tool designed to estimate the expenses involved in building your website. Simply input your requirements and get an instant estimate, making budgeting for your online presence easier than ever.</p>
          <ul className="portfolio_icons">
            <li><TbBrandHtml5/></li>
            <li><TbBrandCss3/></li>
            <li><TbBrandBootstrap/></li>
            <li><SiDotnet/></li>
            <li><TbBrandJavascript/></li>
          </ul>
          <div className="cta">
      <a href="#" className="btn">
      <span style={{fontSize:"1.3rem"}}><RiCodeView  /></span> Code
      </a>
       <a href="#" className="btn">View < FaArrowUpRightFromSquare /></a>
      
    </div>
        </div>
        <div className="col-lg-4 col-md-4 col-12 portfolio_card">
          <img src={weather} alt="syeda hani" className="img_port"/>
          <h4 className="text-center mt-3">Weather report</h4>
          <p>Introducing a comprehensive weather website, offering detailed forecasts tailored to city, state, and country locations. Stay informed with accurate updates, ensuring you're prepared for any weather conditions.</p>
          <ul className="portfolio_icons">
           <li><GrReactjs/></li>
            <li><TbBrandHtml5/></li>
            <li><TbBrandCss3/></li>
           
          </ul>
          <div className="cta">
      <a href="#" className="btn">
      <span style={{fontSize:"1.3rem"}}><RiCodeView  /></span> Code
      </a>
       <a href="#" className="btn">View < FaArrowUpRightFromSquare /></a>
      
    </div>
        </div>
       </div>

       <div className="row" style={{gap:"10px", display:"flex"}}>
        <div className="col-lg-4 col-md-4 col-12 portfolio_card">
          <img src={color} alt="syeda hani" className="img_port"/>
          <h4 className="text-center mt-3">Color Search</h4>
          <p>Built a color search website using React.js and JSON for data storage. Users can input color names to search and retrieve corresponding color data efficiently.</p>
          <ul className="portfolio_icons">
            <li><TbBrandHtml5/></li>
            <li><TbBrandCss3/></li>
            <li><GrReactjs/></li>
            <li><FaNode/></li>
          </ul>
          <div className="cta">
      <a href="https://github.com/syedasuhum/color_task" className="btn">
      <span style={{fontSize:"1.3rem"}}><RiCodeView  /></span> Code
      </a>
       <a href="https://color-task.vercel.app/" className="btn">View < FaArrowUpRightFromSquare /></a>
      
    </div>
        </div>
        <div className="col-lg-4 col-md-4 col-12 portfolio_card">
          <img src={heart} alt="syeda hani" className="img_port"/>
          <h4 className="text-center mt-3">Heart Disease</h4>
          <p>Utilized Excel and Power BI to generate a concise report on heart disease diagnosis in accordance with the maile and female, highlighting key insights for efficient decision-making.</p>
          <ul className="portfolio_icons">
            <li><SiPowerbi /></li>
            <li><SiMicrosoftexcel/></li>
          </ul>
          <div className="cta">
      <a href="#" className="btn">
      <span style={{fontSize:"1.3rem"}}><RiCodeView  /></span> Code
      </a>
       <a href="#" className="btn">View < FaArrowUpRightFromSquare /></a>
      
    </div>
        </div>
        <div className="col-lg-4 col-md-4 col-12 portfolio_card">
          <img src={sale} alt="syeda hani" className="img_port"/>
          <h4 className="text-center mt-3">Sales Summary</h4>
          <p>Utilized Excel and Power BI to generate comprehensive returns and order summary report, streamlining data analysis and visualization for efficient decision-making.</p>
          <ul className="portfolio_icons">
            <li><SiPowerbi /></li>
            <li><SiMicrosoftexcel/></li>
           
          </ul>
          <div className="cta">
      <a href="#" className="btn">
      <span style={{fontSize:"1.3rem"}}><RiCodeView  /></span> Code
      </a>
       <a href="#" className="btn">View < FaArrowUpRightFromSquare /></a>
      
    </div>
        </div>
       </div>

       <div className="img__card">
  
</div>

  </div>
  );
};

export default Portfolio;
