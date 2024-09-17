import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTerminal, faWandMagicSparkles, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="home" smooth={true} duration={500}><FontAwesomeIcon icon={faTerminal} /> Inicio</Link></li>
        <li><Link to="about" smooth={true} duration={500}><FontAwesomeIcon icon={faStar} /> Sobre mí</Link></li>
        <li><Link to="projects" smooth={true} duration={500}><FontAwesomeIcon icon={faWandMagicSparkles} /> Proyectos</Link></li>
        <li><Link to="contact" smooth={true} duration={500}><FontAwesomeIcon icon={faPaperPlane} /> Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
