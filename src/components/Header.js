import React from 'react'; 
import { NavLink } from 'react-router-dom'; //Navlink to change button class to active button when clicked
import '../styles.css';
import logo from './logo.png'; 


const Header = () => {
  return (
    <header> 
      <a href="https://psyche.asu.edu/" target="_blank" rel="noopener noreferrer">   {/* Clicking the psyche logo takes you to the main psyche website */}
        <img src={`${process.env.PUBLIC_URL}/assets/psyche_logo.png`} alt="Psyche Logo" className="psyche-logo" />
      </a>

      <div className="header-buttons">
        <NavLink to="/Home" className={({ isActive }) => isActive ? "header-button active-button" : "header-button"}>Home</NavLink>
        <NavLink to="/About" className={({ isActive }) => isActive ? "header-button active-button" : "header-button"}>About</NavLink>
        <NavLink to="/SimulationDetails" className={({ isActive }) => isActive ? "header-button active-button" : "header-button"}>Credits</NavLink>
      </div>

      <div className="psyche-1825">
        <img 
          src={logo} 
          alt="Psyche Simulation Logo" 
          className="site-logo"
        />
      </div>
      
    </header>
  );
};

export default Header;




