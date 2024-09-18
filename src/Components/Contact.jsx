import React from 'react';
import './Contact.css'; // Puedes añadir estilos personalizados aquí
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark, faWindowMaximize, faWindowMinimize } from '@fortawesome/free-solid-svg-icons';
import CV_LIGO from './CV_Lorenzo_Guzman_Orellana.pdf';

const ContactMe = () => {
  const handleDownload = () => {
    window.open(CV_LIGO, '_blank');
  };

  return (
    <section className="contact-me" id='contact'>
      <div className='upperborder5'>
        <div className='windowIcons5'>
          <FontAwesomeIcon icon={faWindowMinimize} />
          <FontAwesomeIcon icon={faWindowMaximize} />
          <FontAwesomeIcon icon={faSquareXmark} />
        </div>
      </div>
      <p className='contactTitle'><em>¡Estemos en contacto!</em></p>
      <p className='contactDesc'>¡Estoy disponible para nuevos proyectos y oportunidades!</p>
      <div className="contactLinks">
        <a href="https://www.linkedin.com/in/liguzmanorellana/" target="_blank" rel="noopener noreferrer" id='linked'>
          LinkedIn
        </a>
        <a href="https://github.com/ghiraghira" target="_blank" rel="noopener noreferrer" id='ghub'>
          GitHub
        </a>
        <a href="mailto:guzmanorellanap@gmail.com" id='mail'>
          Email
        </a>
      </div>
      <button onClick={handleDownload} className='cvButton'>Descargar CV</button>
    </section>
  );
};

export default ContactMe;

