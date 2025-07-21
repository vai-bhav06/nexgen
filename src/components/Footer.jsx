import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="nexgen-bg">NexGen</div>

      <div className="footer-columns">
        <div className="footer-col">
          <h3>NexGen</h3>
          <p>
            Premium accounting crafted to deliver your business expert care,
            insight, and trust.
          </p>
        </div>

        <div className="footer-col">
  <h4>Navigations</h4>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/service">Services</Link></li>
    <li><Link to="/pricing">Pricing</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    <li><Link to="/testimonials">Testimonials</Link></li>
  </ul>
</div>


        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>Tax Planning & Filing</li>
            <li>Bookkeeping & Payroll</li>
            <li>Financial Advisory</li>
            <li>Audit & Assurance</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Socials</h4>
          <ul className="socials">
            <li><FaLinkedin /> LinkedIn</li>
            <li><FaInstagram /> Instagram</li>
            <li><FaXTwitter /> Twitter</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 NexGen. All rights reserved.</p>
        <div className="footer-bot">
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
