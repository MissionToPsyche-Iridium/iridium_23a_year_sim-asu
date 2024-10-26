import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles.css'; 

const BottomRightLinks = () => {
    return (
      <div className="bottom-right-links">
        <NavLink 
        to="/ResourceLinks" 
        className={({ isActive }) => isActive ? "bottom-right-link selected" : "bottom-right-link"}
        >
        Resource Links
        </NavLink>
        
        <NavLink 
        to="/FeedbackForm" 
        className={({ isActive }) => isActive ? "bottom-right-link selected" : "bottom-right-link"}
        >
        Feedback Form
        </NavLink>


      {/* Social Media Icons */}
      <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer">
        <img src="/assets/email.png" alt="Email" className="image-button" />
      </a>
      <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
        <img src="/assets/whatsapp.png" alt="WhatsApp" className="image-button" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src="/assets/linkedin.png" alt="LinkedIn" className="image-button" />
      </a>
    </div>
  );
};

export default BottomRightLinks;
