import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Get updates about new products and special offers!</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <h4>About Us</h4>
              <Link to="/about">About Rwanda Market</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/press">Press Center</Link>
              <Link to="/corporate">Corporate Information</Link>
            </div>

            <div className="footer-column">
              <h4>Customer Service</h4>
              <Link to="/help">Help Center</Link>
              <Link to="/returns">Returns & Refunds</Link>
              <Link to="/shipping">Shipping Info</Link>
              <Link to="/contact">Contact Us</Link>
            </div>

            <div className="footer-column">
              <h4>Payment Methods</h4>
              <div className="payment-methods">
                <img src="https://picsum.photos/id/1/40/25" alt="Mobile Money" />
                <img src="https://picsum.photos/id/2/40/25" alt="Credit Card" />
                <img src="https://picsum.photos/id/3/40/25" alt="Bank Transfer" />
              </div>
              <h4>Delivery Partners</h4>
              <div className="delivery-partners">
                <img src="https://picsum.photos/id/4/40/25" alt="Local Delivery" />
                <img src="https://picsum.photos/id/5/40/25" alt="Express Delivery" />
              </div>
            </div>

            <div className="footer-column">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
              <h4>Download Our App</h4>
              <div className="app-downloads">
                <img src="https://picsum.photos/id/6/120/40" alt="App Store" />
                <img src="https://picsum.photos/id/7/120/40" alt="Play Store" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-info">
            <div className="copyright">
              © 2025 Rwanda Market. All rights reserved.
            </div>
            <div className="footer-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/sitemap">Sitemap</Link>
            </div>
            <div className="footer-location">
              🇷🇼 Rwanda | Kigali
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}