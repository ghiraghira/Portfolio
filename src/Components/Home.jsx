import React, { useEffect, useState } from 'react';
import './Home.css';
import { useTranslation, Trans } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark, faWindowMaximize, faWindowMinimize } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const { t } = useTranslation();

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById('home');
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
    <section id="home" className={isVisible ? 'visible' : ''}>
      <div className='upperborder'>
        <div className='windowIcons'>
          <FontAwesomeIcon icon={faWindowMinimize} />
          <FontAwesomeIcon icon={faWindowMaximize} />
          <FontAwesomeIcon icon={faSquareXmark} />
        </div>
      </div>
      <h1 className='homeTitle'>
        <Trans i18nKey="description.greeting">
          ¡Soy <em>Ghira!</em>
        </Trans>
      </h1>
      <p className='homeDesc'>
        <Trans i18nKey="description.subtitle">
          Desarrollador <em>Fullstack</em> en formación
        </Trans>
      </p>
      
    </section>
  );
};

export default Home;

