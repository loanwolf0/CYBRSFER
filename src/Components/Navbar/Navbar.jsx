
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/logo.png'
import './Navbar.css';
import logoFinal from '../../assets/logo_final.jpeg'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isClicked, setIsClicked] = useState(false);
 
  
  const handleMobile = (e) => {
    setIsMobile(!isMobile);
    setIsClicked(!isClicked);
  }

  return (
    <nav className={`flex flex-row justify-between items-center  gap-5 md:p-10 p-5`}>
      
      <div className="mobile_cont flex flex-row justify-center items-center ">

        <div className="mobileNav">
          <button onClick={handleMobile} className={`w-auto h-auto items-center justify-center flex md:p-3 `}>
            {isClicked ?  <CloseIcon/> : <MenuIcon/> }
          </button>
        </div>

        <div className={`flex items-center mobileContainer `}>
          <div className="logo text-pink-500 text-3xl mr-2 transition-transform transform logo_nav hover:rotate-90 cursor-pointer">
              <img src={logo} alt="logo" className="mobileLogo" />
          </div>
          <div className="name mobileName text-lg font-bold text-dark-blue">Cyber-Sphere</div>
        </div>

      </div>

      <div className={` flex flex-row `}>

        <ul className={`flex flex-row ${isClicked ? 'navlinks active' : 'navlinks'}`}>
          <li className="relative" onClick={handleMobile}>
            <a
              href="#home"
              className="text-black text-lg cursor-pointer custom-a"
            >
              Home
              <div className="line"></div>
            </a>
          </li>
          <li className="relative" onClick={handleMobile}>
            <a
              href="#about"
              className="text-black text-lg cursor-pointer custom-a"
            >
              About
              <div className="line"></div>
            </a>
          </li>
          <li className="relative" onClick={handleMobile}>
            <a
              href="#courses"
              className="text-black text-lg cursor-pointer custom-a"
            >
              Courses
              <div className="line"></div>
            </a>
          </li>
          <li className="relative" onClick={handleMobile}>
            <a
              href="#services"
              className="text-black text-lg cursor-pointer custom-a"
            >
              Services
              <div className="line"></div>
            </a>
          </li>
          <li className="relative" onClick={handleMobile}>
            <a
              href="#contact"
              className="text-black text-lg cursor-pointer custom-a"
            >
              Contact
              <div className="line"></div>
            </a>
          </li>
        </ul>
      </div>

    
    </nav>
  );
}

export default Navbar;
