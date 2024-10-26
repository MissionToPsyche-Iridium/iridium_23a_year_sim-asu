import React from 'react'; 
import { NavLink } from 'react-router-dom'; //Navlink to change button class to active button when clicked
import '../styles.css'; 


const Header = () => {
  return (
    <header> 
      <a href="https://psyche.asu.edu/" target="_blank" rel="noopener noreferrer">   {/* Clicking the psyche logo takes you to the main psyche website */}
        <img src="/assets/psyche_logo.png" alt="Psyche Logo" className="psyche-logo" />
      </a>

      <div className="header-buttons">
        <NavLink to="/Home" className={({ isActive }) => isActive ? "header-button active-button" : "header-button"}>Home</NavLink>
        <NavLink to="/About" className={({ isActive }) => isActive ? "header-button active-button" : "header-button"}>About</NavLink>
        <NavLink to="/SimulationDetails" className={({ isActive }) => isActive ? "header-button active-button" : "header-button"}>Simulation Details</NavLink>
        <NavLink to="/FAQs" className={({ isActive }) => isActive ? "header-button active-button" : "header-button"}>FAQs</NavLink>
        <NavLink to="/Contact" className={({ isActive }) => isActive ? "header-button active-button" : "header-button"}>Contact Us</NavLink>
      </div>
    </header>
  );
};

export default Header;




