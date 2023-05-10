import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
        <div className='chatbot'>
      <h3>Chatbot</h3>
      <p>The platform here promises to deliver</p>
      </div>
      <ul className="social-media">
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Instagram</a></li>
      </ul>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2023 My Company. All rights reserved.</p>
    </div>
  </footer>
  );

}

export default Footer
