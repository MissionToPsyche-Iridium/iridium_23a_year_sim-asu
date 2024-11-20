import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet'; // Helmet to change the page title
import '../styles.css';

const About = () => {
  const [openDropdowns, setOpenDropdowns] = useState({});
  const contentRefs = useRef({});

  const sections = [
    {
      title: "Mission",
      content: (
        <p>
          <a
            href="https://psyche.asu.edu/mission/faq/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#F3F3F4', textDecoration: 'underline' }}
          >
            Click here
          </a>{' '}
          to go to the Psyche Mission FAQ page and learn more about the mission.
        </p>
      ),
    },
    {
      title: "Simulation",
      dropdowns: [
        {
          id: 'simulation1',
          label: "Question 1",
          content: "Details about Simulation Question 1 content.",
          color: "#F3F3F4",
        },
        {
          id: 'simulation2',
          label: "Question 2",
          content: "Details about Simulation Question 2 content.",
          color: "#F3F3F4",
        },
      ],
    },
  ];

  const toggleDropdown = (id) => {
    setOpenDropdowns((prevState) => {
      const isOpen = !prevState[id];
      const content = contentRefs.current[id];

      if (isOpen) {
        content.style.maxHeight = `${content.scrollHeight}px`;
      } else {
        content.style.maxHeight = '0px';
      }

      return {
        ...prevState,
        [id]: isOpen,
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

        {sections.map((section) => (
          <div key={section.title} style={{ marginBottom: '40px' }}>
            <h2>{section.title}:</h2>
            {section.content ? (
              section.content
            ) : (
              section.dropdowns.map((dropdown) => (
                <div
                  key={dropdown.id}
                  style={{
                    cursor: 'pointer',
                    marginBottom: '40px',
                    marginTop: '20px',
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
                    ref={(el) => (contentRefs.current[dropdown.id] = el)}
                    style={{
                      maxHeight: '0px',
                      overflow: 'hidden',
                      transition: 'max-height 0.5s ease-in-out',
                      padding: '0px',
                      color: '#555',
                    }}
                  >
                    <p
                      style={{
                        color: dropdown.color,
                        margin: 0,
                      }}
                      dangerouslySetInnerHTML={{ __html: dropdown.content }}
                    ></p>
                  </div>
                </div>
              ))
            )}
          </div>
        ))}
      </main>
    </div>
  );
};

export default About;
