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
                    16 Psyche orbits the Sun between Mars and Jupiter. It takes around ~5 years (or 1825 days) for Psyche to complete one full orbit around the sun.
                  </li>
                  <br />
                  <li>
                    Psyche has an orbital speed of 17.24 km/s. Earth is almost twice as fast in comparison, with an orbital speed of 30 km/s.
                  </li>
                  <br />
                  <li>
                    Psyche ranges from 2.5 to 3.3 AUs (Astronomical Units) away from the sun. 1 AU is equal to the distance between Earth and the Sun.
                  </li>
                  <br />
                  <li>
                    Psyche's day is 6 times shorter than a day on Earth, with one rotation taking 4 hours and 12 minutes.
                  </li>
                  <br />
                  <li>
                    Use the <strong>bottom slider</strong> to simulate Psyche's (or Earth's) orbit around the sun. Click on the reset button to go back to current time.
                  </li>
                  <br />
                  <li>
                    Use the <strong>View</strong> button to switch to Earth's perspective.
                  </li>
                  <br />
                  <li>
                    Use the <strong>Overhead View</strong> button to get a bird's eye view of the Earth and Psyche's orbit.
                  </li>
                  <br />
                  <li>
                    Use the <strong>Hide Orbits</strong> button to toggle the Orbital line visibility.
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
                    Psyche's surface area is 64,000 square miles.
                  </li>
                  <br />
                  <li>
                    Psyche is composed of rock and metal, with metal composing 30-60% of its volume.
                  </li>
                  <br />
                  <li>
                    Use the <strong>first slider</strong> to watch Psyche complete one full spin. A Psyche day is only <strong>4 hours and 12 minutes</strong> long.
                  </li>
                  <br />
                  <li>
                    Use the <strong>second slider</strong> to move Psyche along its orbit around the Sun — a journey that takes <strong>1825 Earth days</strong>.
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
