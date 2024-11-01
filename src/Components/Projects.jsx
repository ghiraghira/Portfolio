import React from 'react';
import './Projects.css'
import { useTranslation, Trans } from 'react-i18next';
import poke from './pokegif.gif'
import notes from './notitas.gif'
import rgbgen from './rgbs.gif'
import tictac from './tictac.gif'
import pudu from './pudupi.gif'
import shimi from './shimigifsite.gif'
import khp from './khplay.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSquareXmark, faWindowMaximize, faWindowMinimize} from '@fortawesome/free-solid-svg-icons';

const projects = [
  { id: 7, title: 'Kingdom Hearts Player', image: khp, description: 'TypeScript | React | CSS', link: 'https://ghiraghira.github.io/KHPlayer/' },
  { id: 6, title: 'Fushimi Gaku Fansite', image: shimi, description: 'JavaScript | React | CSS', link: 'https://fushimigakuensite.vercel.app/' },
  { id: 1, title: 'PokéSearch', image: poke, description: 'JavaScript | React | CSS', link: 'https://ghiraghira.github.io/PokeSearch/' },
  { id: 2, title: 'Notes App', image: notes, description: 'JavaScript | React | CSS', link: 'https://ghiraghira.github.io/ShortNotes/' },
  { id: 3, title: 'RGB Generator', image: rgbgen, description: 'JavaScript | React | CSS', link: 'https://ghiraghira.github.io/RGBGenerator/' },
  { id: 4, title: 'TicTacToe', image: tictac, description: 'JavaScript | React | CSS', link: 'https://ghiraghira.github.io/TicTacToe/' },
  { id: 5, title: 'PuduPedia', image: pudu, description: 'JavaScript | React | CSS', link: 'https://github.com/Yin-Aranguiz/PuduPedia' },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects">
      <div className='projectSearch'>
        <p id='searchIcon'><FontAwesomeIcon icon={faMagnifyingGlass} /></p>
        <p id='searchPrompt'><Trans i18nKey="description.proj">Proyectos</Trans></p>
      </div>
      <div className="projects-container">
        {projects.map(project => (
          <div key={project.id} className="project">
            <div className='upperborder4'>
          <div className='windowIcons4'>
            <FontAwesomeIcon icon={faWindowMinimize} />
            <FontAwesomeIcon icon={faWindowMaximize} />
            <FontAwesomeIcon icon={faSquareXmark} />
          </div>
        </div>
            <p className='projectTitle'><i>{project.title}</i></p>
            <div className="projectImage">
              <img src={project.image} alt={project.name} className='projectImg'/>
            </div>
            <p className='projectDesc'><Trans i18nKey="description.made">Hecho con</Trans> {project.description}<br/></p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className='projectLink'><Trans i18nKey="description.linked">Ver Proyecto</Trans></a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
