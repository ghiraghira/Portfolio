import React, { useEffect, useState } from 'react';
import './Stack.css';
import { useTranslation, Trans } from 'react-i18next';
import exjs from './express.png';
import ang from './angularjs.png';
import canva from './canva.png';
import docker from './docker2.png';
import figma from './figma.png';
import github from './github.png';
import illust from './illustrator.png';
import jira from './jira.png';
import mongo from './mongodb.png';
import next from './next.png';
import postg from './postgresql.png';
import golang from './golang.png';
import sass from './sass.png';
import typescript from './typescript.png';
import vscode from './visualstudiocode.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faBootstrap, faPython } from '@fortawesome/free-brands-svg-icons';
import { faSquareXmark, faWindowMaximize, faWindowMinimize } from '@fortawesome/free-solid-svg-icons';

const Stack = () => {
  const { t } = useTranslation();

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
        <h2 className='stackTitle'><em><Trans i18nKey="description.stack">Stack Actual:</Trans></em></h2>
        <p className='stackDesc'>
          <span className='tooltip'>
            <FontAwesomeIcon icon={faHtml5} />
            <span className='tooltiptext'>HTML5</span>
          </span>
          <span className='tooltip'>
            <FontAwesomeIcon icon={faCss3Alt} />
            <span className='tooltiptext'>CSS3</span>
          </span>
          <span className='tooltip'>
            <FontAwesomeIcon icon={faJs} />
            <span className='tooltiptext'>JavaScript</span>
          </span>
          <span className='tooltip'>
            <FontAwesomeIcon icon={faReact} />
            <span className='tooltiptext'>React</span>
          </span>
          <span className='tooltip'>
            <FontAwesomeIcon icon={faNodeJs} />
            <span className='tooltiptext'>Node.js</span>
          </span>
          <span className='tooltip'>
            <img src={exjs} alt='Express.js' />
            <span className='tooltiptext'>Express.js</span>
          </span>
          <span className='tooltip'>
            <FontAwesomeIcon icon={faBootstrap} />
            <span className='tooltiptext'>Bootstrap</span>
          </span>
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
        <h2 className='stackTitle'><em><Trans i18nKey="description.learn">Aprendiendo:</Trans></em></h2>
        <p className='stackDesc'>
          <span className='tooltip'>
            <FontAwesomeIcon icon={faPython} />
            <span className='tooltiptext'>Python</span>
          </span>
          <span className='tooltip'>
            <img src={ang} alt='AngularJS' />
            <span className='tooltiptext'>AngularJS</span>
          </span>
          <span className='tooltip'>
            <img src={next} alt='Next.js' />
            <span className='tooltiptext'>Next.js</span>
          </span>
          <span className='tooltip'>
            <img src={typescript} alt='TypeScript' />
            <span className='tooltiptext'>TypeScript</span>
          </span>
          <span className='tooltip'>
            <img src={sass} alt='Sass' />
            <span className='tooltiptext'>Sass</span>
          </span>
          <span className='tooltip'>
            <img src={mongo} alt='MongoDB' />
            <span className='tooltiptext'>MongoDB</span>
          </span>
          <span className='tooltip'>
            <img src={postg} alt='PostgreSQL' />
            <span className='tooltiptext'>PostgreSQL</span>
          </span>
          <span className='tooltip'>
            <img src={golang} alt='GoLang' />
            <span className='tooltiptext'>Golang</span>
          </span>
          <span className='tooltip'>
            <img src={docker} alt='Docker' />
            <span className='tooltiptext'>Docker</span>
          </span>
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
        <h2 className='stackTitle'><em><Trans i18nKey="description.other">Otros:</Trans></em></h2>
        <p className='stackDesc'>
          <span className='tooltip'>
            <img src={vscode} alt='Visual Studio Code' />
            <span className='tooltiptext'>VSCode</span>
          </span>
          <span className='tooltip'>
            <img src={github} alt='GitHub' />
            <span className='tooltiptext'>GitHub</span>
          </span>
          <span className='tooltip'>
            <img src={jira} alt='Jira' />
            <span className='tooltiptext'>Jira</span>
          </span>
          <span className='tooltip'>
            <img src={figma} alt='Figma' />
            <span className='tooltiptext'>Figma</span>
          </span>
          <span className='tooltip'>
            <img src={illust} alt='Illustrator' />
            <span className='tooltiptext'>Illustrator</span>
          </span>
          <span className='tooltip'>
            <img src={canva} alt='Canva' />
            <span className='tooltiptext'>Canva</span>
          </span>
        </p>
      </section>
    </div>
  );
};

export default Stack;
