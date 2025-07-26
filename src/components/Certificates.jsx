import React from 'react'
import "../css/card.css"
import "../css/remove-underline.css"
import "../css/text-size.css"

function Certificates() {
  return (
    <section className="skill-section">
      <h3>Certificates</h3>
      <div className="card remove-underline">
        <a href="#" target="_blank" rel="noopener noreferrer"><h5>Data Science, ML, DL & NLP Bootcamp</h5></a>
        <p className="p-x-small">Udemy</p>
      </div>
      <div className="card remove-underline">
        <a href="#" target="_blank" rel="noopener noreferrer"><h5>Data Analyst Bootcamp: Basics to Advanced</h5></a>
        <p className="p-x-small">Udemy</p>
      </div>
            <div className="card remove-underline">
        <a href="#" target="_blank" rel="noopener noreferrer"><h5>Complete Interview Preparation (DSA)</h5></a>
        <p className="p-x-small">GeeksforGeeks</p>
      </div>
    </section>
  );
}

export default Certificates