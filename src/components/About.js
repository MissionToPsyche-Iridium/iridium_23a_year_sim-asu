import React from 'react';
import { Helmet } from 'react-helmet';  //Helmet to change page title
import '../styles.css';
import logo from './logo.png';  

const About = () => {
  return (
    <main>
    <Helmet>
      <title>About - Psyche Simulation</title>
    </Helmet>

        <h2>Mission</h2>
        <p>Psyche is both the name of an asteroid orbiting the Sun between Mars and<br>
        </br>Jupiter — and the name of a NASA space mission to visit that asteroid,<br>
        </br>led by Arizona State University. The mission was chosen by NASA on January 4, 2017<br>
        </br>as one of two missions for the agency’s Discovery Program, a series of relatively<br>
        </br>low-cost missions to solar system targets.</p>
        <h2>Trajectory and Orbit</h2>
        <p>The Psyche spacecraft is targeted to travel to the asteroid using solar-electric propulsion,<br>
        </br>following a Mars flyby and gravity-assist. After arrival, the mission plan calls for mapping<br>
        </br>the asteroid and studying its properties.<br>
        </br>Once the spacecraft arrives at the asteroid, plans call for it to perform science operations from<br>
        </br>four staging orbits, which become successively closer.</p>
    </main>
  );
};

export default About;
