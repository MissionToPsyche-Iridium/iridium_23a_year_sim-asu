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


      
    </div>
  );
};

export default BottomRightLinks;
