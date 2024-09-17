import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContent">
        <p>guzmanorellanap@gmail.com</p>
        <p>Ghira's Developer Portfolio &copy; {new Date().getFullYear()} Lorenzo Guzmán Orellana</p>
      </div>
    </footer>
  );
};

export default Footer;
