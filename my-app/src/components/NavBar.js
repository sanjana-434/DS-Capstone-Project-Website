import React from "react"
import {useRef} from "react";
import {FaBars,FaTimes} from "react-icons/fa";
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';
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
        <Link to= '/DS-Capstone-Project-Website/Banner'>About</Link>
        <Link to= '/DS-Capstone-Project-Website/ProjectList'>Projects</Link>
        <Link to= '/DS-Capstone-Project-Website/contact'>Contact</Link>
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