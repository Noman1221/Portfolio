import React from 'react'

function Certificates() {
  return (
    <section id="work" className="work-section">
      <div className="container">
        <h2 className="section-title text-center mb-5">CERTIFICATES</h2>
        <div className="work-timeline">
          <div className="work-item">
            <div className="work-date">
              <span>Feb 2024</span>
              <span className="duration">DSA</span>
            </div>
            <div className="work-content">
              <h3 className="company">Apna College</h3>
              <p className="position">Alpha (DSA with Java)</p>
              <a
                style={{ textDecoration: 'none' }}
                href="assets/Certificate/certificate-sigma-30-66a7cc80d84663336c0980cf.pdf"
              >
                <i className="fa-solid fa-download"></i> Click to View
                Certificate
              </a>
            </div>
          </div>
          <div className="work-item">
            <div className="work-date">
              <span>August 2024</span>
              <span className="duration">Full-Stack Development</span>
            </div>
            <div className="work-content">
              <h3 className="company">Apna College</h3>
              <p className="position">Delta (Full Stack Web Development)</p>
              <a
                style={{ textDecoration: 'none' }}
                href="assets/Certificate/certificate-sigma-30-development-671639f4cb95d98429043936.pdf"
              >
                <i className="fa-solid fa-download"></i> Click to View
                Certificate
              </a>
            </div>
          </div>
          <div className="work-item">
            <div className="work-date">
              <span> 2024</span>
              <span className="duration">LeetCode</span>
            </div>
            <div className="work-content">
              <h3 className="company">LeetCode</h3>
              <p className="position">Earned 50-Day Streak Badge on LeetCode</p>
              <a
                style={{ textDecoration: 'none' }}
                href="assets/Certificate/download.png"
              >
                <i className="fa-solid fa-download"></i> Click to View
                Certificate
              </a>
            </div>
          </div>
        </div>
        <div className="work-summary">
          <p className="experience-text">Total Certificates</p>
          <p className="months-text">3 Certificates</p>
        </div>
      </div>
    </section>
  )
}

export default Certificates