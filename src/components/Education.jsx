import React from 'react'
import "../css/text-size.css"
import "../App.css"

function Education() {
  return (
    <div>
        <div className="education-section">
        <h3>Education</h3>
        <div className="card">
          <h5>Bachelor of Technology in Computer Science (Data Science)</h5>
          <p className="p-x-small">Institute of Technical Education & Research, SOA University, Bhubaneswar, Odisha, India</p>
          <p className="p-x-small">2022 - Present</p>
        </div>

        <div className="card">
          <h5>Higher Secondary Education (BSEB)</h5>
          <p className="p-x-small">Ram Bilas Singh High School, Aurangabad, Bihar, India</p>
          <p className="p-x-small">2019 - 2021</p>
        </div>

        <div className="card">
          <h5>Secondary Education (CBSE)</h5>
          <p className="p-x-small">DAV Public School, Aurangabad, Bihar, India</p>
          <p className="p-x-small">2018 - 2019</p>
        </div>
      </div>
    </div>
  )
}

export default Education