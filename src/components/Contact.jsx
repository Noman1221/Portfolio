import React from 'react'

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container text-center">
        <h2 className="section-title mb-5">CONTACTS</h2>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/noman-khan-196a11252/"
            className="social-link"
            aria-label="LinkedIn"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/Noman1221"
            className="social-link"
            aria-label="GitHub"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
            />
          </a>
          <a
            href="https://leetcode.com/u/Noman2324/"
            className="social-link"
            aria-label="WhatsApp"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
              alt="LeetCode Icon"
              width="40"
            />
          </a>
          <a
            href="https://www.instagram.com/i_am_noman_khan_?igsh=cDE5Z2pnb215c2tn&utm_source=qr"
            className="social-link"
            aria-label="Instagram"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
              alt="Instagram"
              width="40"
            />
          </a>
        </div>
        <a href="#home" className="scroll-top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="16 12 12 8 8 12"></polyline>
            <line x1="12" y1="16" x2="12" y2="8"></line>
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Contact