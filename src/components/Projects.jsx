import React, { useState } from 'react';
import "../css/projects.css";

import DataScienceProject from "./DataScienceProject.jsx"
import DataAnalysisProject from "./DataAnalysis.jsx"


function Projects() {
  const [clickedButton, setClickedButton] = useState('DataScienceProject');

  const handleButtonClick = (button) => {
    setClickedButton(button);
  };

  return (
    <div className="container">
      <div className="home-left size-left left">
        <div>
          <p>Hi, I'm Anish.</p>
        </div>
        <div className="side-menu">
          <div>
            <button 
              className={`text-button ${clickedButton === 'DataScienceProject' ? 'active' : ''}`} 
              onClick={() => handleButtonClick('DataScienceProject')}
            >
              Data Science Project
            </button>
          </div>
          <div>
            <button 
              className={`text-button ${clickedButton === 'DataAnalysisProject' ? 'active' : ''}`} 
              onClick={() => handleButtonClick('DataAnalysisProject')}
            >
              Data Analysis Project
            </button>
          </div>
        </div>
      </div>
        
      <div className="right home-right size-right vertical-line ">
        { clickedButton === 'DataScienceProject' && <DataScienceProject/>}
        { clickedButton === 'DataAnalysisProject' && <DataAnalysisProject/>}
      </div>
    </div>
  );
}

export default Projects;
