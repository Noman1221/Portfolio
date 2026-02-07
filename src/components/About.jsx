import React from 'react'

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="about-content">
              <h2 className="section-title mb-4">MY STORY</h2>
              <div className="about-text">
                <p className="mb-4">
                  Hello! I'm Noman Khan, a Full Stack Developer skilled in both
                  frontend and backend development. I'm from a village in Uttar
                  Pradesh and earned my Bachelor's in Computer Applications
                  (BCA) from MJPR University, Bareilly, in 2024 I enjoy
                  combining creativity and technology to build smooth digital
                  experiences.
                </p>
                <p className="mb-5">
                  I have a strong knowledge of the MERN stack (MongoDB,
                  Express.js, React.js, Node.js), which helps me create dynamic
                  and scalable web applications. I also have a basic
                  understanding of Data Structures & Algorithms (DSA) and
                  actively practice on LeetCode, where I achieved a 50-Day
                  Coding Streak Badge. My passion is turning ideas into useful
                  and user-friendly solutions.
                </p>
                <a
                  style={{ textDecoration: 'none', color: 'white' }}
                  href="https://leetcode.com/u/Noman2324/"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                    alt="LeetCode Icon"
                    width="40"
                  />
                  {' '}
                  LeetCode
                </a>
              </div>
            </div>
            <div className="quote-section text-center">
              <p className="quote">
                "Any fool can write code that a computer can understand. Good
                programmers write code that humans can understand."
              </p>
              <p className="quote-author">
                -<span className="text-muted">— Martin Fowler—</span>-
              </p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=60"
                alt="About Me"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About