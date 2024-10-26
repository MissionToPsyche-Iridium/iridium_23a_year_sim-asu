import React from 'react';
import '../styles.css';

const Footer = () => {
  // Get today's date
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <footer>
      <div className="footer-item" id="date" style={{ textAlign: 'left' }}>{today}</div>
      <div className="footer-item" style={{ textAlign: 'center' }}>Capstone Group 23A</div>
      <div className="footer-item" style={{ textAlign: 'right' }}>Page: Out-Sim</div>
    </footer>
  );
};

export default Footer;
