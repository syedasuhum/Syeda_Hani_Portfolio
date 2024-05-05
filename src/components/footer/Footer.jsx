import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.css';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      
      <div className='row'>
        <div className='col-lg-4 col-md-6 col-12'>
          <p className='text__mail'>Syeda Umme Hani</p>
        </div>
        <div className='col-lg-4 col-md-6 col-12'>
        <div className="footer__copyright">
        <small>&copy; ET 2024. All rights reserved.</small>
        </div>
        </div>
        <div className='col-lg-4 col-md-6 col-12'>
        <div className="footer__socials">
        <a href="https://www.linkedin.com/in/syeda-umme-hani-7b9764213" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/syedasuhum" target="_blank" rel="noreferrer" ><FaGithub /></a>
      </div>
        </div>
      
        </div> 
    </footer>
  )
}

export default Footer