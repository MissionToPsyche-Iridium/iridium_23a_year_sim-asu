import React, { useState } from 'react';
import { Helmet } from 'react-helmet';  //Helmet to change page title
import '../styles.css';  

const Home = () => {
  // State to handle the active button and iframe source
  const [activeButton, setActiveButton] = useState('System View');
  const [iframeSrc, setIframeSrc] = useState('Simulation_OrbitalView.html'); // Default iframe source

  // Function to handle image change and iframe source update
  const changeView = (buttonLabel, iframeSource) => {
    setActiveButton(buttonLabel);  // Set active button

    // Change iframe source to switch views
    setIframeSrc(iframeSource); 
  };

  return (
    <main>
        <Helmet>
            <title>Home - Psyche Simulation</title>
        </Helmet>
      <div className="home-page">
        <h2>Welcome to the Year on Psyche Simulation</h2>
        <p>Click on the below buttons to change your view of Psyche</p>
      </div>

      <div className="button-image-container">
        <div className="button-group">
          <button 
            onClick={() => changeView('System View', 'Simulation_OrbitalView.html')}
            className={activeButton === 'System View' ? 'button-active' : ''}
          >
            System View
          </button>

          <button 
            onClick={() => changeView('Orbital View', 'Simulation_OrbitalView.html')}
            className={activeButton === 'Orbital View' ? 'button-active' : ''}
          >
            Orbital View
          </button>

          <button 
            onClick={() => changeView('Terrestrial View', 'Simulation_TerrestrialView.html')}
            className={activeButton === 'Terrestrial View' ? 'button-active' : ''}
          >
            Terrestrial View
          </button>
        </div>

        <iframe 
          src={iframeSrc}  
          name="Simulation_Iframe" 
          title="Simulation of a Year on the Asteroid Psyche" 
          style={{ width: '750px', height: '250px', border: 'none' }}
        />
      </div>
    </main>
  );
};

export default Home;