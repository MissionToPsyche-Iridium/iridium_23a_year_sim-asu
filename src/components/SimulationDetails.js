import React from 'react';
import { Helmet } from 'react-helmet';  //Helmet to change page title
import '../styles.css';  

const Credits = () => {
    return (
        <div>
          <main>
              <Helmet>
                <title>Credits - Psyche Simulation</title>
              </Helmet>
              <h2>ASU - NASA - Year on Psyche Simulation - Team 1 Members:</h2>
              <p><br></br>Akshay Pasumarthi<br></br>Luka Micevic<br></br>Luz Rodriguez<br></br>Melody Musmacker<br></br>Tanav Jalan</p>
              <p></p>
          </main>
        </div>
      );
  };
  
  export default Credits;