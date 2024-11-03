import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      es: {
        translation: {
          description: {
            home: " Inicio",
            about: " Sobre mí",
            project: " Proyectos",
            contact: " Contacto",
            greeting: "¡Soy <1>Ghira!</1>",
            subtitle: "Desarrollador <1>Fullstack</1> en formación",
            aboutTitle: "Sobre mí",
            aboutDesc: "Estudiando <1>inglés</1> y <1>japonés</1> de manera autodidacta a través de los años, mi acercamiento a la <1>tecnología</1> nace de la <1>similitud</1> existente entre el aprendizaje de idiomas y el de lenguajes de programación. En donde la <1>colaboración</1> de ambos de estos conocimientos me permiten expandir mi perspectiva y posibilitan el acceso a una mayor variedad de recursos desde donde instruirme y <1>mejorar</1> cada vez más mis habilidades.",
            stack: "Stack Actual:",
            learn: "Aprendiendo:",
            other: "Otros:",
            proj: "Proyectos",
            linked: "Ver Proyecto",
            made: "Hecho con ",
            keep: "¡Estemos en contacto!",
            open: "¡Estoy disponible para nuevos proyectos y oportunidades!",
            dl: "Descargar CV",
          }
        }
      },
      en: {
        translation: {
          description: {
            home: " Home",
            about: " About me",
            project: " Projects",
            contact: " Contact",
            greeting: "I'm <1>Ghira!</1>",
            subtitle: "<1>Fullstack Developer</1> in training",
            aboutTitle: "About me",
            aboutDesc: "Studying <1>English</1> and <1>Japanese</1> as a native <1>Spanish</1> speaker by myself through the years, my interest in <1>technology</1> is born from the <1>similarities</1> found in learning programming languages. As both skills require <1>constant strive</1> for the latest findings, together, they allow me to greatly expand my perspective in multiple fields, granting me a wider access to resources and places where I can deepen my knowledge and <1>continuosly improve</1> my work.",
            stack: "Current Stack:",
            learn: "Learning:",
            other: "Others:",
            proj: "Projects",
            linked: "Visit Project",
            made: "Made with ",
            keep: "Let's be in contact!",
            open: "I'm available for new projects and opportunities!",
            dl: "Download CV",
          }
        }
      }
    }
  });

export default i18n;