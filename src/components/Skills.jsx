import React from 'react';
import "../css/text-size.css"

const SkillSection = () => {
  return (
    <section className="skill-section">
      <h3>Skills</h3>
      <div className="card">
        <h5>Programming & Development</h5>
        <p className="p-x-small">Python, Java, C++, SQL, Git, Docker, Flask, Streamlit</p>
      </div>
      <div className="card">
        <h5>Libraries & Frameworks</h5>
        <p className="p-x-small">NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, TensorFlow, Apache Spark</p>
      </div>
      <div className="card">
        <h5>Data Science Techniques</h5>
        <p className="p-x-small">EDA, Machine Learning, Deep Learning, Computer Vision, NLP</p>
      </div>
      <div className="card">
        <h5>Tools & Platforms</h5>
        <p className="p-x-small">Jupyter Notebook, Google Colab, VS Code, GitHub</p>
      </div>
    </section>
  );
};

export default SkillSection;
