import React, { useState, useEffect } from 'react';
import './ScrollTop.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp } from '@fortawesome/free-regular-svg-icons';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className={`scroll-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop} id='upButton'>
      <FontAwesomeIcon icon={faCircleUp} />
    </button>
  );
};

export default ScrollToTopButton;
