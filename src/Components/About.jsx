import React, { useEffect, useState } from 'react';
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark, faWindowMaximize, faWindowMinimize } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById('about');
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className={isVisible ? 'visible' : ''}>
      <div className='upperborder2'>
        <div className='windowIcons2'>
          <FontAwesomeIcon icon={faWindowMinimize} />
          <FontAwesomeIcon icon={faWindowMaximize} />
          <FontAwesomeIcon icon={faSquareXmark} />
        </div>
      </div>
      <h2 className='aboutTitle'><em>Sobre mí</em></h2>
      <p className='aboutDesc'>Estudiando <em>inglés</em> y <em>japonés</em> de manera 
      autodidacta a través de los años, mi acercamiento a la <em>tecnología</em>&nbsp; 
       nace de la <em>similitud</em> existente entre el aprendizaje de idiomas y 
      el de lenguajes de programación. En donde la <em>colaboración</em> de ambos de 
      estos conocimientos me permiten expandir mi perspectiva y posibilitan el acceso 
      a una mayor variedad de recursos desde donde instruirme y <em>mejorar</em> cada vez más mis habilidades.</p>
    </section>
  );
};

export default About;
