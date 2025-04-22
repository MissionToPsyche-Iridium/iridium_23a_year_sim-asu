import React from 'react';
import { Helmet } from 'react-helmet';  //Helmet to change page title
import '../styles.css';

const About = () => {
  return (
    <main>
    <Helmet>
      <title>About - Psyche Simulation</title>
    </Helmet>

        <h2>Mission</h2>
        <p>Psyche is both the name of an asteroid orbiting the Sun between Mars and Jupiter — and the name of a<br>
        </br>NASA space mission to visit that asteroid, led by Arizona State University. The mission was chosen by<br>
        </br>NASA on January 4, 2017 as one of two missions for the agency’s Discovery Program, a series of relatively<br>
        </br>low-cost missions to solar system targets.<br>
        </br>This simulation, Psyche:1825 -Orbit of a Metal World-, aptly named after the number of days in Psyche's year,<br>
        </br>is inspired by that mission, designed to visualize the journey and orbital dynamics of Psyche and other celestial<br>
        </br>bodies in real time.</p>
        <h2>Trajectory and Orbit</h2>
        <p>The Psyche spacecraft is targeted to travel to the asteroid using solar-electric propulsion, following a<br>
        </br>Mars flyby and gravity-assist. After arrival, the mission plan calls for mapping the asteroid and studying its properties.<br>
        </br>Once the spacecraft arrives at the asteroid, plans call for it to perform science operations from four<br>
        </br>staging orbits, which become successively closer.</p>
    </main>
  );
};

export default About;
