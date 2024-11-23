import React from 'react';
import { Helmet } from 'react-helmet'; // Helmet to change page title
import '../styles.css';

const Home = () => {
  return (
    <main>
      <Helmet>
        <title>Home - Psyche Simulation</title>
      </Helmet>
      <div className="home-page">
        <h2>Welcome to the Year on Psyche Simulation</h2>
        <p>Experience the views of Psyche directly below.</p>
      </div>

      <div className="iframe-container">
        <iframe
          src="Simulation_OrbitalView.html" // Update to the default or desired source
          name="Simulation_Iframe"
          title="Simulation of a Year on the Asteroid Psyche"
          style={{ width: '80vw', height: '50vh', border: 'none' }}
        />
      </div>
    </main>
  );
};

export default Home;
