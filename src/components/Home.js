import React, { useState } from 'react';
import { Helmet } from 'react-helmet';  //Helmet to change page title
import '../styles.css';  

const Home = () => {
  // State to handle the image source
  const [imageSrc, setImageSrc] = useState('/assets/PsycheSolarView.png');
  const [activeButton, setActiveButton] = useState('System View');  // For active button highlight

  // Function to handle image change
  const changeImage = (newSrc, buttonLabel) => {
    setActiveButton(buttonLabel);  // Set active button

    // Simulate the fade-in/fade-out transition
    const image = document.getElementById("mainImage");
    image.classList.remove('fade-in');
    image.classList.add('fade-out');

    setTimeout(() => {
      setImageSrc(`/assets/${newSrc}`);

      setTimeout(() => {
        image.classList.remove('fade-out');
        image.classList.add('fade-in');
      }, 10);
    }, 500);
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
            onClick={() => changeImage('PsycheSolarView.png', 'System View')}
            className={activeButton === 'System View' ? 'button-active' : ''}
          >
            System View
          </button>

          <button 
            onClick={() => changeImage('PsycheOrbitalView.png', 'Orbital View')}
            className={activeButton === 'Orbital View' ? 'button-active' : ''}
          >
            Orbital View
          </button>

          <button 
            onClick={() => changeImage('PsycheTerrestrialView.png', 'Terrestrial View')}
            className={activeButton === 'Terrestrial View' ? 'button-active' : ''}
          >
            Terrestrial View
          </button>
        </div>

        <img 
          id="mainImage" 
          src={imageSrc} 
          alt="Simulation Placeholder" 
          className="simulation-placeholder fade-in" 
        />
      </div>
    </main>
  );
};

export default Home;
