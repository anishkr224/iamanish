import React, { useState } from 'react';
import "../css/card.css"
import "../css/projects-components.css"
import "../css/text-size.css"

const projects = [
  

  {
    title: "Blinkit Business Analytics Dashboard",
    technologies: "Power BI, DAX, SQL, Data Visualization",
    date: "March 2025",
    details: "Built an interactive dashboard analyzing $1.20M sales and 8,500+ items to track business performance. Identified top revenue drivers: Tier-3 outlets ($472K sales) and categories (Fruits & Vegetables, Snack Foods). Uncovered trends in sales, outlet efficiency, and customer ratings (avg. 3.9) to guide strategic decisions.",
    githubLink: "https://github.com/anishkr224/",
    // images: [
    //  `${process.env.PUBLIC_URL}/img/newsapi/s1.png`
    // ]
  },

  // Add more projects here...
  
];

function DataAnalysisProject() {
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

export default DataAnalysisProject;
