import React from 'react';
import { Helmet } from 'react-helmet';  //Helmet to change page title
import '../styles.css';  

const Credits = () => {
    return (
        <div className="credits" style={{ textAlign: 'center' }}>
          <main>
              <Helmet>
                <title>Credits - Psyche Simulation</title>
              </Helmet>

              <h2>The team:</h2>
              <p>Akshay Pasumarthi<br></br>Luka Micevic<br></br>Luz Rodriguez<br></br>Tanav Jalan</p>
              <p></p>
              <h2>Disclaimer:</h2>
              <p style={{ fontSize: '20px' }}><br></br>This work was created in partial fulfillment of Arizona State University Capstone Course “CSE 485/CSE 486″.<br></br>
              The work is a result of the Psyche Student Collaborations component of NASA’s Psyche Mission (https://psyche.asu.edu).<br></br>
              “Psyche: A Journey to a Metal World” [Contract number NNM16AA09C] is part of the NASA Discovery Program mission<br></br>  to solar system targets.
              Trade names and trademarks of ASU and NASA are used in this work for identification only. Their usage<br></br> does not constitute an official endorsement,
              either expressed or implied, by Arizona State University<br></br> or National Aeronautics and Space Administration. The content is solely the responsibility 
              of the authors and<br></br> does not necessarily represent the official views of ASU or NASA.</p>
          </main>
        </div>
      );
  };
  
  export default Credits;