import React from 'react'

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="hero-content">
              <h2 className="hello-text">HELLO, I'M</h2>
              <h1 className="name-text">Noman khan</h1>
              <h3 className="role-text">FULL STACK DEVELOPER</h3>
              <div className="hero-buttons mt-4">
                <a
                  href="/assets/Noman_Khan_MERN_Resume (1).pdf"
                  download
                  className="btn btn-outline-light btn-lg me-3"
                >
                  Download Resume
                </a>
                <a href="#contact" className="btn btn-primary btn-lg">
                  Connect with Me
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="profile-image">
              <img
                src="assets/IMG_3904.PNG"
                alt="Profile Picture"
                className="img-fluid rounded-circle"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero