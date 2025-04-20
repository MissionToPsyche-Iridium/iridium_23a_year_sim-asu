import React, { useState } from 'react';
import { Helmet } from 'react-helmet';  // Helmet to change page title
import '../styles.css';
import logo from './logo.png';

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

      <div className="home-page" style={{ textAlign: 'center' }}>
        <img 
          src={logo} 
          alt="Welcome to Psyche Simulation" 
          style={{
            width: '30%', 
            height: 'auto',
            marginTop: '1rem',
            marginBottom: '1rem' // Add some space below the image
          }}
        />
      </div>

      {/* Simulation layout: side-by-side */}
      <div className="simulation-container">
        {/* Left: Simulation Details */}
        <div className="text-container-wrapper">
          <h3 className="text-container-header">
            {iframeSrc === 'Simulation_OrbitalView.html'
              ? 'Psyche: Orbital View'
              : 'Psyche: Surface View'}
          </h3>
          <div className="scrollable-text-box">
            {iframeSrc === 'Simulation_OrbitalView.html' ? (
              <>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', margin: 0 }}>
                  <li>
                    The white line hovering over Psyche shows its widest stretch — about <strong>173 miles across</strong>.
                  </li>
                  <br />
                  <li>
                    Use the <strong>first slider</strong> to watch Psyche complete one full spin. A Psyche day is only <strong>4 hours and 12 minutes</strong> long.
                  </li>
                  <br />
                  <li>
                    Use the <strong>second slider</strong> to move Psyche along its orbit around the Sun — a journey that takes <strong>1828 Earth days</strong>.
                  </li>
                  <br />
                  <li>
                    Click the <strong>"Temperature Map"</strong> button to see how sunlight heats different parts of Psyche as it rotates and orbits.
                  </li>
                </ul>
              </>
            ) : (
              <>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', margin: 0 }}>
                  <li>
                    The white line hovering over Psyche shows its widest stretch — about <strong>173 miles across</strong>.
                  </li>
                  <br />
                  <li>
                    Use the <strong>first slider</strong> to watch Psyche complete one full spin. A Psyche day is only <strong>4 hours and 12 minutes</strong> long.
                  </li>
                  <br />
                  <li>
                    Use the <strong>second slider</strong> to move Psyche along its orbit around the Sun — a journey that takes <strong>1828 Earth days</strong>.
                  </li>
                  <br />
                  <li>
                    Click the <strong>"Temperature Map"</strong> button to see how sunlight heats different parts of Psyche as it rotates and orbits.
                  </li>
                </ul>
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
