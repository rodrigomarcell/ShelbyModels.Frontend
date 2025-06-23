import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-heading">ShelbyModels</h3>
            <p className="footer-description">
              Connecting talented models with exclusive opportunities in a premium environment.
            </p>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/models">Models</Link></li>
              <li><Link to="/categories">Categories</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Legal</h3>
            <ul className="footer-links">
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/cookies">Cookie Policy</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Contact</h3>
            <ul className="footer-links">
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/support">Support</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} ShelbyModels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer