import React, { useState } from 'react';
import "../css/card.css"
import "../css/projects-components.css"
import "../css/text-size.css"

const projects = [
  

  {
    title: "LLMinds: AI Response Aggregator",
    technologies: "Python, NLP, FastAPI, SQLite, OpenRouter API, HTML, CSS, Javascript",
    date: "February 2025",
    details: "Integrated 5+ large language models via OpenRouter API using asynchronous processing to synthesize comprehensive insights. Implemented NLP-driven context management and structured output generation, reducing users' cognitive load by 30%.",
    githubLink: "https://github.com/anishkr224/LLMinds-AI-Response-Aggregator",
    // images: [
    //   "../../img/twitter/s1.png", 
    //   "../../img/twitter/s2.png",
    //   "../../img/twitter/s3.png"
    // ]
  },

  // Add more projects here...

  {
    title: "SheShield: AI Solutions for Women's Safety",
    technologies: "Python, OpenCV, YOLO, CNN, MediaPipe, DBSCAN, Tkinter, SQLite, Twilio, TensorFlow, PyTorch, scikit-learn",
    date: "September 2024",
    details: "Developed an AI-powered surveillance system achieving 87% gender classification and 83% violence detection accuracy. Processed video frames in 0.5-0.8 seconds for real-time alerts and deployed SMS notifications with &lt;5s response time. Applied spatial analytics to identify safety hotspots.",
    githubLink: "https://github.com/anishkr224/SheShield",
    // images: [
    //   "../../img/twitter/s1.png", 
    //   "../../img/twitter/s2.png",
    //   "../../img/twitter/s3.png"
    // ]
  },

    {
    title: "Text2MCQ: Automated MCQ Generation",
    technologies: "Python, NLP, Flask, HTML, CSS, Javascript",
    date: "October 2024",
    details: "Built an NLP-driven solution using spaCy to automate text analysis and question generation. Transformed unstructured data (PDF/TXT) into structured multiple-choice questions, generating 20 questions per input.",
    githubLink: "https://github.com/anishkr224/Text2MCQ",
    // images: [
    //   "../../img/twitter/s1.png", 
    //   "../../img/twitter/s2.png",
    //   "../../img/twitter/s3.png"
    // ]
  },
];

function AIMLDLProjects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="projects-container">
      {/* <h2>Full-stack Projects</h2> */}
      <ul className="projects-list">
        {projects.map((project, index) => (
          <li key={index} className="project-item card">
            <h3>{project.title}</h3>
            <p className="p-x-small"><strong>Technologies Used:</strong> {project.technologies}</p>
            <p className="p-x-small"><strong>Date Created:</strong> {project.date}</p>
            <p className="p-x-small"><strong>Details:</strong> {project.details}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Link</a>
            {/* <div className="project-images">
              {project.images.map((image, imgIndex) => (
                <img 
                  key={imgIndex} 
                  src={image} 
                  alt={`${project.title} Screenshot ${imgIndex + 1}`} 
                  className="project-image" 
                  onClick={() => openLightbox(image)} 
                />
              ))}
            </div> */}
          </li>
        ))}
      </ul>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={selectedImage} alt="Full Size" className="lightbox-image" />
        </div>
      )}
    </div>
  );
}

export default AIMLDLProjects;
