import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';        
import Footer from './components/Footer';        
import BottomRightLinks from './components/BottomRightLinks';   
import Home from './components/Home';
import About from './components/About';
import SimulationDetails from './components/SimulationDetails';
import FAQs from './components/FAQs';
import Contact from './components/Contact';
import ResourceLinks from './components/ResourceLinks';
import FeedbackForm from './components/FeedbackForm';
import './styles.css';  


function App() {
  return (
    <Router>
      <Header />    {/* Display header on all pages */}
      <main>
        <Routes>
          {/* Go to Home when loading the site */}
          <Route path="/" element={<Navigate to="/Home" replace />} />

          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/SimulationDetails" element={<SimulationDetails />} />
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ResourceLinks" element={<ResourceLinks />} />
          <Route path="/FeedbackForm" element={<FeedbackForm />} />
        </Routes>
      </main>
      <BottomRightLinks />    {/*  Display bottom right links on all pages */}
    </Router>
  );
}

export default App;
