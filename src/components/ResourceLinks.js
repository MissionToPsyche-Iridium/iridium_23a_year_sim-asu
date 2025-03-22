import React from 'react';
import { Helmet } from 'react-helmet';  //Helmet to change page title
import '../styles.css';  

const About = () => {
  return (
    <div>
      <main>
        <Helmet>
          <title>Resource Links - Psyche Simulation</title>
        </Helmet>
        <h2>Resource Links</h2>
        <p style={{ marginTop: '15px' }}>
          
          <a
            href="https://psyche.asu.edu/mission/faq/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#F3F3F4', textDecoration: 'underline' }}
          >
            Click here
          </a>{' '}
          to go to the Psyche Mission FAQ page and learn more about the mission.
        </p>
      </main>
    </div>
  );
};

export default About;
