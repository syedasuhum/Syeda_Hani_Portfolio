import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../../assets/Syeda_Umme_Hani(resume).pdf";
import "./Sociallinks.css";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn<FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/syeda-umme-hani-7b9764213",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/syedasuhum",
    },
    {
      id: 3,
      child: (
        <>
          Email <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:syedaummehani.m@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: resume,
      download: true,
    },
    
  ];

  return (
    <div className="social-links">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={`link-item ${style}`}
          >
            <a
              href={href}
              className="link-text"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
