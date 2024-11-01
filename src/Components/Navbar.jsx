import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import { useTranslation, Trans } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTerminal, faWandMagicSparkles, faPaperPlane , faLanguage} from "@fortawesome/free-solid-svg-icons";

const lngs = {
  es: { nativeName: 'Es' },
  en: { nativeName: 'En' }
  
};

const Navbar = () => {
  const { t, i18n } = useTranslation();
  return (
    <nav>
      <ul>
        <li><Link to="home" smooth={true} duration={500}><FontAwesomeIcon icon={faTerminal} /><Trans i18nKey="description.home">Inicio</Trans></Link></li>
        <li><Link to="about" smooth={true} duration={500}><FontAwesomeIcon icon={faStar} /><Trans i18nKey="description.about"> Sobre mí</Trans></Link></li>
        <li><Link to="projects" smooth={true} duration={500}><FontAwesomeIcon icon={faWandMagicSparkles} /><Trans i18nKey="description.project"> Proyectos</Trans></Link></li>
        <li><Link to="contact" smooth={true} duration={500}><FontAwesomeIcon icon={faPaperPlane} /><Trans i18nKey="description.contact"> Contacto</Trans></Link></li>
        <li className='wholeToggle'><FontAwesomeIcon icon={faLanguage} /> 
          {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ color: i18n.resolvedLanguage === lng ? '#FFB8DA' : 'white' }} type="submit" onClick={() => i18n.changeLanguage(lng)} className='tlToggle'>
              {lngs[lng].nativeName}
            </button>
          ))}
        </li>
      </ul>
      
    </nav>
  );
};

export default Navbar;
