import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">MyCompany</div>
        <nav className="footer-nav">
          <a href="#" className="footer-link">Home</a>
          <a href="#" className="footer-link">About</a>
          <a href="#" className="footer-link">Contact</a>
        </nav>
        <div className="footer-copy">&copy; {new Date().getFullYear()} MyCompany. All rights reserved.</div>
      </div>
    </footer>
  )
}
