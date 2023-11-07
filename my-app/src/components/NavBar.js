import React from "react"
import {useRef} from "react";
import {FaBars,FaTimes} from "react-icons/fa";
import '../styles/NavBar.css';
import logo from "../assets/img/logo2.png";

function NavBar(){
  const NavRef = useRef();
  const showNavBar = () => {
      NavRef.current.classList.toggle('responsive_nav');
  }
  return (
    <header>
      <span className="logo-text">
      <img src={logo} alt="Logo" className="logo" />
      <h3>DS</h3>
      </span>
      <nav ref = {NavRef}>
        <a href = '/Banner'>About</a>
        <a href = '/ProjectList'>Projects</a>
        <a href = '/contact'>Contact</a>
        <button onClick={showNavBar} className='nav-btn nav-close-btn'>
          <FaTimes/>
        </button>
      </nav>
      <button  onClick={showNavBar} className='nav-btn'>
        <FaBars/>
      </button>
    </header>
  );
}
export default NavBar;