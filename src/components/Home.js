import React, { useState } from 'react';
import { Helmet } from 'react-helmet';  // Helmet to change page title
import '../styles.css';

const Home = () => {
  const [activeButton, setActiveButton] = useState('System View');
  const [iframeSrc, setIframeSrc] = useState('Simulation_OrbitalView.html'); // initial iframe

  const changeImage = (newSrc, buttonLabel) => {
    setActiveButton(buttonLabel);

    const image = document.getElementById("mainImage");
    if (image) {
      image.classList.remove('fade-in');
      image.classList.add('fade-out');

      setTimeout(() => {
        image.classList.remove('fade-out');
        image.classList.add('fade-in');
      }, 10);
    }
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

      {/* Simulation layout: side-by-side */}
      <div className="simulation-container">
        {/* Left: Simulation Details */}
        <div className="text-container-wrapper">
          <h3 className="text-container-header">
            {iframeSrc === 'Simulation_OrbitalView.html'
              ? 'Fun Facts: Orbital View'
              : 'Fun Facts: Surface View'}
          </h3>
          <div className="scrollable-text-box">
            {iframeSrc === 'Simulation_OrbitalView.html' ? (
              <>
                <p>
                  filler filler filler filler filler filler filler filler filler filler filler 
                  filler filler filler filler filler filler filler filler filler filler filler filler filler 
                  filler filler filler filler filler filler filler filler filler filler filler filler 
                  filler filler filler filler filler filler filler filler filler filler filler filler 
                </p>
                <p>
                  filler filler filler filler filler filler filler filler filler filler filler 
                  filler filler filler filler filler filler filler filler filler filler filler filler filler 
                  filler filler filler filler filler filler filler filler filler filler filler filler 
                  filler filler filler filler filler filler filler filler filler filler filler filler 
                </p>
                <p>
                  filler filler filler filler filler filler filler filler filler filler filler 
                  filler filler filler filler filler filler filler filler filler filler filler filler filler 
                  filler filler filler filler filler filler filler filler filler filler filler filler 
                  filler filler filler filler filler filler filler filler filler filler filler filler 
                </p>
              </>
            ) : (
              <>
                <p>
                  filler filler filler filler filler filler filler filler filler filler filler 
                  filler filler filler filler filler filler filler filler filler filler filler filler filler 
                  filler filler filler filler filler filler filler filler filler filler filler filler 
                  filler filler filler filler filler filler filler filler filler filler filler filler 
                </p>
                <p>
                  filler filler filler filler filler filler filler filler filler filler filler 
                  filler filler filler filler filler filler filler filler filler filler filler filler filler 
                  filler filler filler filler filler filler filler filler filler filler filler filler 
                  filler filler filler filler filler filler filler filler filler filler filler filler 
                </p>
                <p>
                  filler filler filler filler filler filler filler filler filler filler filler 
                  filler filler filler filler filler filler filler filler filler filler filler filler filler 
                  filler filler filler filler filler filler filler filler filler filler filler filler 
                  filler filler filler filler filler filler filler filler filler filler filler filler 
                </p>
              </>
            )}
          </div>
        </div>

        {/* Right: Simulation Iframe */}
        <div className="iframe-container">
          <iframe
            src={iframeSrc}
            name="Simulation_Iframe"
            title="Simulation of a Year on the Asteroid Psyche"
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
        </div>
      </div>

      {/* View toggle buttons (below simulation) */}
      <div
        className="button-group"
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '1.5rem',
          marginLeft: '29rem' 
        }}
      >
        <button
          className={iframeSrc === 'Simulation_OrbitalView.html' ? 'button-active' : ''}
          onClick={() => setIframeSrc('Simulation_OrbitalView.html')}
        >
          Orbital View
        </button>
        <button
          className={iframeSrc === 'Simulation_SurfaceView.html' ? 'button-active' : ''}
          onClick={() => setIframeSrc('Simulation_SurfaceView.html')}
        >
          Surface View
        </button>
      </div>
    </main>
  );
};

export default Home;
