import React from 'react';
import { Helmet } from 'react-helmet';  //Helmet to change page title
import '../styles.css';  

const About = () => {
  return (
    <div>
      <main>
        <Helmet>
          <title>Contact Us - Psyche Simulation</title>
        </Helmet>
        <h2>Contact Us</h2>
        <p style={{ marginTop: '15px' }}>
          Questions or comments?{' '}
          <a 
            href="https://psyche.asu.edu/contact/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#F3F3F4' }}
          >
            Click here
          </a> 
          {' '}to send them to the Psyche team!
        </p>
      </main>
    </div>
  );
};

export default About;
