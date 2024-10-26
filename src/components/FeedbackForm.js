import React from 'react';
import { Helmet } from 'react-helmet';  //Helmet to change page title
import '../styles.css';  

const About = () => {
  return (
    <div>
      <main>
        <Helmet>
          <title>Feedback Form - Psyche Simulation</title>
        </Helmet>
          <h2>This is the FEEDBACK FORM page</h2>
          <p>Click on the above buttons or below links to be taken to a different page!</p>
      </main>
    </div>
  );
};

export default About;
