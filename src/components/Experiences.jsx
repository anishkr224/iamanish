import React from 'react';
import "../css/text-size.css";
import "../App.css";

function Experiences() {
  return (
    <div>
      <div className="experience-section">
        <h3>Experience</h3>
        
        <div className="card">
          <h5>Data Science and AI/ML Intern</h5>
          <p className="p-x-small"> Zordie AI</p>
          <p className="p-x-small">May 2025 - Present</p>
          <ul className="p-x-small">

            {/* <li>Developed and maintained web applications using <strong>React.js</strong> and <strong>Node.js</strong>, improving user experience and application performance.</li>
            <li>Collaborated with a team of <strong>8 developers</strong> to implement new features and fix bugs in existing applications.</li>
            <li>Gained hands-on experience with <strong>Git</strong> version control and <strong>Agile development</strong> methodologies.</li>
            */}
            
            <li>Engineered AI/ML models and optimized data pipelines to support analytics and automation for the Prime HR platform.</li>
            <li>Collaborated with AI and backend teams to integrate machine learning solutions into enterprise workflows.</li>
          </ul>
        </div>
    
        {/* You can add more experience cards here if needed, if you got more experience*/}

      </div>
    </div>
  );
  
}

export default Experiences;
