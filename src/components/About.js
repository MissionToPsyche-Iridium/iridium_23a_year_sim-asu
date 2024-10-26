import React from 'react';
import { Helmet } from 'react-helmet';  //Helmet to change page title
import '../styles.css';  

const About = () => {
  return (
    <div>
      <main>
        <Helmet>
          <title>About - Psyche Simulation</title>
        </Helmet>
          <h2>This is the ABOUT page</h2>
          <p>Click on the above buttons or below links to be taken to a different page!</p>
      </main>
    </div>
  );
};

export default About;
