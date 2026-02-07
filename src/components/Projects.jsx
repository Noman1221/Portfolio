import React from 'react'

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title text-center mb-5">PROJECTS</h2>
        
      

        <div className="project-card">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="project-content">
                <h3 className="project-title">Real-Time Chat-App</h3>
                <div className="tech-stack">
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">Express.js</span>
                  <span className="tech-tag">MongoDB</span>
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Socket.io</span>
                </div>
                <p className="project-description">
                  Built a real-time chat application using the MERN stack and
                  Socket.IO, featuring:<br />

                  <b>JWT Authentication:</b> Secure user login and protected
                  routes.<br />
                  <b>Real-Time Messaging:</b> Instant one-to-one chat powered by
                  Socket.IO.<br />
                  <b>Image Sharing:</b> Upload and manage chat images using
                  Multer and Cloudinary.<br />
                  <b>Persistent Storage:</b> Messages and user data stored in
                  MongoDB.<br />
                  <b>State Management:</b> Handled efficiently with React
                  Context API <br />
                  <b>Optimized Architecture:</b> Organized backend ensuring
                  smooth client-server communication.<br />
                </p>
                <div className="project-links">
                  <a
                    href="https://github.com/Noman1221/Chat-App"
                    className="project-link"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                      alt="GitHub"
                    />
                    Code
                  </a>
                  <a
                    href="https://chat-app-1-y8hy.onrender.com"
                    className="project-link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="external-link"
                    >
                      <path
                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                      ></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="project-image">
                <img
                  src="assets/Photos/Chat-app-photo.png"
                  alt="Chat App"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>
          <div className="project-card">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="project-content">
                <h3 className="project-title">Full-Stack Airbnb Clone</h3>
                <div className="tech-stack">
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">Express.js</span>
                  <span className="tech-tag">MongoDB</span>
                  <span className="tech-tag">Html</span>
                  <span className="tech-tag">Css</span>
                  <span className="tech-tag">Bootstrap</span>
                </div>
                <p className="project-description">
                  Built a fully functional Airbnb clone with MongoDB,
                  Express.js, and Node.js, featuring:

                  <b> User Authentication & Authorization:</b> Secure login
                  system with session management.

                  <b>CRUD Operations:</b>Users can create, read, update, and
                  delete property listings.

                  <b> Image Upload with Cloudinary:</b>Securely store and manage
                  property images.

                  <b>Interactive UI:</b> Responsive design using Bootstrap and
                  custom CSS.

                  <b>Review System:</b>Users can leave reviews for properties.

                  <b>Dynamic Pop-ups:</b> Real-time notifications for actions
                  like adding properties.
                </p>
                <div className="project-links">
                  <a
                    href="https://github.com/Noman1221/AirBnbProject"
                    className="project-link"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                      alt="GitHub"
                    />
                    Code
                  </a>
                  <a
                    href="https://airbnbproject-oqme.onrender.com/listings"
                    className="project-link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="external-link"
                    >
                      <path
                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                      ></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="project-image">
           <img
  src="assets/Photos/Airbnb-Clone-FullStack Project.png"  
  alt="Airbnb Clone"
  className="img-fluid rounded"
/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects