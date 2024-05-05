//import HeaderSocials from './HeaderSocials';
import SocialLinks from './SocialLinks';
import './home.css';
import { TypeAnimation } from "react-type-animation";
import qr from '../../assets/Syeda_hani (1).png';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h7>👋 Hello and welcome to my online portfolio</h7>
        <h1 className='header_style mt-4'>Syeda Umme Hani</h1>
                
                <span >
                    
                    <TypeAnimation className='type__animation'
                        sequence={[
                            // question start
                            "Front-end Developer",
                            1000,
                            "Full-stack Developer",
                            1000,
                            "MERN Developer",
                            1000,
                            "Dot NET Developer",
                            1000
                            
                        ]}
                        wrapper="span"
                        speed={50} repeat={Infinity}
                        style={{
                            fontSize: "1.5rem",
                            color: "#ececf1",
                            flex: "1",
                            textAlign: "center",
                            gap: "10px",
                            
                        }}
                    />
                </span>
      
            <div className="qr_code">
              
              scan for resume
              <img src={qr} className='qr_border'/>
              
              </div>
       
        <SocialLinks />
      </div>
    </header>
  );
};

export default Header;
