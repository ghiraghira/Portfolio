import React, { useEffect, useState } from 'react';
import './Stack.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faBootstrap, faPython} from '@fortawesome/free-brands-svg-icons'
import { faSquareXmark, faWindowMaximize, faWindowMinimize } from '@fortawesome/free-solid-svg-icons';

const Stack = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById('stack');
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
    <div className='stackSection'>
    <section id="stack" className={isVisible ? 'visible' : ''}>
      <div className='upperborder3'>
        <div className='windowIcons3'>
          <FontAwesomeIcon icon={faWindowMinimize} />
          <FontAwesomeIcon icon={faWindowMaximize} />
          <FontAwesomeIcon icon={faSquareXmark} />
        </div>
      </div>
      <h2 className='stackTitle'><em>Stack Actual:</em></h2>
      <p className='stackDesc'>
        <FontAwesomeIcon icon={faHtml5} />
        <FontAwesomeIcon icon={faCss3Alt} />
        <FontAwesomeIcon icon={faJs} />
        <FontAwesomeIcon icon={faReact} />
        <FontAwesomeIcon icon={faNodeJs} />
        <FontAwesomeIcon icon={faBootstrap} />
          
      </p>
    </section>
    <section id="stack" className={isVisible ? 'visible' : ''}>
      <div className='upperborder3'>
        <div className='windowIcons3'>
          <FontAwesomeIcon icon={faWindowMinimize} />
          <FontAwesomeIcon icon={faWindowMaximize} />
          <FontAwesomeIcon icon={faSquareXmark} />
        </div>
      </div>
      <h2 className='stackTitle'><em>Aprendiendo:</em></h2>
      <p className='stackDesc'>
        <FontAwesomeIcon icon={faPython} />
      </p>
    </section>
    <section id="stack" className={isVisible ? 'visible' : ''}>
      <div className='upperborder3'>
        <div className='windowIcons3'>
          <FontAwesomeIcon icon={faWindowMinimize} />
          <FontAwesomeIcon icon={faWindowMaximize} />
          <FontAwesomeIcon icon={faSquareXmark} />
        </div>
      </div>
      <h2 className='stackTitle'><em>Otras tecnologías</em></h2>
      <p className='stackDesc'>stack</p>
    </section>
    </div>
  );
};

export default Stack;