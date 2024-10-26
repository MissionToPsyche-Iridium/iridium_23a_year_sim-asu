import React from 'react';
import { Helmet } from 'react-helmet';  //Helmet to change page title
import '../styles.css';  

const SimulationDetails = () => {
    return (
        <div>
          <main>
              <Helmet>
                <title>Simulation Details - Psyche Simulation</title>
              </Helmet>
              <h2>This is the DETAILS OF THE SIMULATION page</h2>
              <p>Click on the above buttons or below links to be taken to a different page!</p>
          </main>
        </div>
      );
  };
  
  export default SimulationDetails;