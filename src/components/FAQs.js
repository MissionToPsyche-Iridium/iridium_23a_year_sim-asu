import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet'; 
import '../styles.css'; 

const About = () => {
  const [openDropdowns, setOpenDropdowns] = useState({});
  const contentRefs = useRef({});

  const sections = [
    {
      title: "Mission",
      dropdowns: [
        { id: 'mission1', label: "What is Psyche?", content: "Psyche is the name of an asteroid orbiting the Sun between Mars and Jupiter and the name of a NASA space mission to visit that asteroid, led by ASU. Psyche is the first mission to a world likely made largely of metal rather than rock or ice. <a href='https://psyche.asu.edu/mission/faq/' target='_blank' rel='noopener noreferrer' style='color: #F3F3F4;'>Learn more here</a>.", color: "#F3F3F4" },
        { id: 'mission2', label: "What kind of mission is Psyche?", content: "Psyche is the 14th mission selected for NASA’s Discovery Program, a series of relatively low-cost missions to solar system targets. <a href='https://psyche.asu.edu/mission/faq/' target='_blank' rel='noopener noreferrer' style='color: #F3F3F4;'>Learn more here</a>.", color: "#F3F3F4" },
        { id: 'mission3', label: "What is the timeline of the Psyche Mission?", content: "<a href='https://psyche.asu.edu/timeline/' target='_blank' rel='noopener noreferrer' style='color: #F3F3F4;'>Click here</a> to see the timeline.", color: "#F3F3F4" }
      ]
    },
    {
      title: "Simulation",
      dropdowns: [
        { id: 'simulation1', label: "Question 1", content: "Details about Simulation Question 1 content.", color: "#F3F3F4" },
        { id: 'simulation2', label: "Question 2", content: "Details about Simulation Question 2 content.", color: "#F3F3F4" }
      ]
    }
  ];

  const toggleDropdown = (id) => {
    setOpenDropdowns(prevState => {
      const isOpen = !prevState[id];
      const content = contentRefs.current[id];

      if (isOpen) {
        console.log("Opening dropdown, scrollHeight:", content.scrollHeight);
        content.style.maxHeight = `${content.scrollHeight}px`;
      } else {
        console.log("Closing dropdown");
        content.style.maxHeight = '0px';
      }

      return {
        ...prevState,
        [id]: isOpen
      };
    });
  };

  return (
    <div>
      <main>
        <Helmet>
          <title>FAQs - Psyche Simulation</title>
        </Helmet>
        <h2>Psyche Simulation FAQs</h2>

        {sections.map(section => (
          <div key={section.title}>
            <h2>{section.title}:</h2>
            {section.dropdowns.map(dropdown => (
              <div
                key={dropdown.id}
                style={{ 
                  cursor: 'pointer', 
                  marginBottom: '20px', 
                  marginTop: '40px' 
                }}
                onClick={() => toggleDropdown(dropdown.id)}
              >
                <p>
                  {dropdown.label}
                  <span style={{ marginLeft: '8px' }}>
                    {openDropdowns[dropdown.id] ? '▲' : '▼'}
                  </span>
                </p>

                <div
                  ref={(el) => contentRefs.current[dropdown.id] = el}
                  style={{
                    maxHeight: '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.5s ease-in-out',
                    padding: '0px',
                    color: '#555',
                  }}
                >
                  <p style={{ color: dropdown.color, margin: 0 }} dangerouslySetInnerHTML={{ __html: dropdown.content }}></p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </main>
    </div>
  );
};

export default About;
