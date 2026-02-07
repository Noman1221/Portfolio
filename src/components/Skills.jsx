import React from 'react'

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="skills-image">
              <img 
  src="assets/Photos/Skills1.jpg" 
  alt="Skills" 
  className="img-fluid rounded" 
/>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="skills-content">
              <h2 className="section-title">MY SKILLS</h2>
              <div className="skills-grid">
                <div className="skill-item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                    alt="MongoDB"
                  />
                  <span>MONGODB</span>
                </div>
                <div className="skill-item">
                  <img
                    className="expressImg"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    alt="Express.js"
                  />
                  <span>EXPRESS.JS</span>
                </div>
                <div className="skill-item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="React"
                  />
                  <span>REACT</span>
                </div>
                <div className="skill-item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    alt="Node.js"
                  />
                  <span>NODE.JS</span>
                </div>
                <div className="skill-item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="JavaScript"
                  />
                  <span>JAVASCRIPT</span>
                </div>
                <div className="skill-item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                    alt="HTML"
                  />
                  <span>HTML</span>
                </div>
                <div className="skill-item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                    alt="CSS"
                  />
                  <span>CSS</span>
                </div>
                <div className="skill-item">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                    alt="Tailwind CSS Logo"
                    width="100"
                  />
                  <span>TAILWIND</span>
                </div>
                <div className="skill-item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                    alt="Bootstrap"
                  />
                  <span>BOOTSTRAP</span>
                </div>
                <div className="skill-item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                    alt="Git"
                  />
                  <span>GIT</span>
                </div>
              </div>
              <div className="additional-skills">
                <p className="text-muted">Other Technical Skills:</p>
                <p>STYLED-COMPONENTS, FIGMA, CANVA, MS-EXCEL, MS-WORD</p>
                <a
                  href="/assets/Noman_Khan_MERN_Resume (1).pdf"
                  download
                  className="btn btn-outline-light mt-4"
                >
                  Get My Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills