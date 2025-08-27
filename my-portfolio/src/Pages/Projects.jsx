import React, { useReducer, useEffect, useState, useRef } from 'react';
import fr1 from '../assets/frufrutas/fr1.png';
import fr2 from '../assets/frufrutas/fr2.png';
import fr3 from '../assets/frufrutas/fr3.png';
import cmb1 from '../assets/cmb/cmb1.png';
import cmb2 from '../assets/cmb/cmb2.png';
import cmb3 from '../assets/cmb/cmb3.png';
import cmb4 from '../assets/cmb/cmb4.png';
import robo1 from '../assets/robo/robo1.png';
import robo2 from '../assets/robo/robo2.png';
import robo3 from '../assets/robo/robo3.png';
import robo4 from '../assets/robo/robo4.png';
import port1 from '../assets/portfolio/port1.png';
import port2 from '../assets/portfolio/port2.png';
import port3 from '../assets/portfolio/port3.png';
import '../styles/Projects.css';

const projectImages = {
  robo: [robo1, robo2, robo3, robo4],
  frufrutas: [fr1, fr2, fr3 ],
  cmb: [cmb1, cmb2, cmb3, cmb4],
  portfolio: [port1, port2, port3]
};

const initialState = {
  currentProjectIndex: 0,
  isTransitioning: false
};

function projectsReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_PROJECT':
      return {
        ...state,
        isTransitioning: true,
        currentProjectIndex: action.payload
      };
    case 'TRANSITION_COMPLETE':
      return {
        ...state,
        isTransitioning: false
      };
    default:
      return state;
  }
}

const projects = [
  {
    title: 'Visão computacional e robótica',
    description: 'Robô autônomo. Treinamento realizado com Yolo V8 e Python para desenvolver seu algoritmo de comportamento utilizando Asus Tinkboard.',
    technologies: ['Python', 'Linux', 'YoloV8', 'AsusTinkerboard'],
    imageKey: 'robo',
    githubLink: 'https://github.com/lkaazz/robotica-project',
  },
  {
    title: 'Frufrutas',
    description: 'Aplicação web focada em simular uma vendedora digital de frutas. Firebase utilizado para o armazenamento de dados das frutas',
    technologies: ['ReactJS', 'Node.js', 'Firebase', 'Express'],
    imageKey: 'frufrutas',
    githubLink: 'https://github.com/lkaazz/frufrutas',
  },
  {
    title: 'CMB',
    description: 'O projeto armazena feedbacks enviados por passageiros de ônibus e faz uma gestão de dados para apresentar ao cliente, de forma gráfica, a situação atual do transporte público.',
    technologies: ['Java', 'JavaFX', 'MySQL', 'My Maps API', 'UML'],
    imageKey: 'cmb',
    githubLink: 'https://github.com/lkaazz/cmb',
  },
  {
    title: 'Meu portfólio',
    description: 'Projeto desenvolvido com react. Portfolio com objetivo de destacar minhas habilidades com desenvolvimento web.',
    technologies: ['React', 'JavaScrip', 'NPM', 'CSS'],
    imageKey: 'portfolio', 
    githubLink: 'https://github.com/lkaazz/lkaazz-portfolio',
  }
];

function Projects() {
  const [state, dispatch] = useReducer(projectsReducer, initialState);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isBlurring, setIsBlurring] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const rotationIntervalRef = useRef(null);

  // Handle project navigation
  const handleScrollIndicatorClick = (index) => {
    if (state.currentProjectIndex !== index) {
      dispatch({ type: 'CHANGE_PROJECT', payload: index });

      setTimeout(() => {
        dispatch({ type: 'TRANSITION_COMPLETE' });
      }, 300);

      setCurrentImageIndex(0);
      setIsBlurring(false);
      setIsAnimating(true);
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (rotationIntervalRef.current) {
      clearInterval(rotationIntervalRef.current);
      rotationIntervalRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    startImageRotation();
  };

  const startImageRotation = () => {
    const currentProject = projects[state.currentProjectIndex];
    const imageArray = projectImages[currentProject.imageKey];
    
    if (rotationIntervalRef.current) {
      clearInterval(rotationIntervalRef.current);
    }
    
    if (imageArray && imageArray.length > 1 && !isHovering) {
      rotationIntervalRef.current = setInterval(() => {
        setIsBlurring(true);
        setIsAnimating(false);
        
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
          
          setTimeout(() => {
            setIsBlurring(false);
            setIsAnimating(true);
          }, 300);
        }, 300);
      }, 5000); 
    }
  };

  useEffect(() => {
    startImageRotation();
    
    return () => {
      if (rotationIntervalRef.current) {
        clearInterval(rotationIntervalRef.current);
      }
    };
  }, [state.currentProjectIndex, isHovering]);

  const currentProject = projects[state.currentProjectIndex];
  const imageArray = projectImages[currentProject.imageKey] || [currentProject.image];
  const currentImage = imageArray[currentImageIndex % imageArray.length];

  return (
    <section id="projects" className="projects-container">
      <div className="section-content">
        <h2 className="projects-title">Projetos</h2>

        <div className="scrollbar">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`scroll-indicator ${state.currentProjectIndex === index ? "active" : ""}`}
              onClick={() => handleScrollIndicatorClick(index)}
            ></div>
          ))}
        </div>

        <div className="project-content">
          <div 
            className="project-image-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={currentImage}
              alt={currentProject.title}
              className={`
                project-image 
                ${state.isTransitioning ? 'fade-out' : ''} 
                ${isBlurring ? 'image-blur' : ''} 
                ${isAnimating && !isHovering ? 'image-scale' : ''}
              `}
            />
          </div>

          <div className="project-details">
            <h3
              className={`project-title ${state.isTransitioning ? 'slide-out' : ''}`}
            >
              {currentProject.title}
            </h3>

            <p
              className={`project-description ${state.isTransitioning ? 'slide-out' : ''}`}
            >
              {currentProject.description}
            </p>

            <div
              className={`project-technologies ${state.isTransitioning ? 'slide-out' : ''}`}
            >
              {currentProject.technologies.map((tech, index) => (
                <span key={index} className="technology-tag">{tech}</span>
              ))}
            </div>

            <div className={`project-links ${state.isTransitioning ? 'slide-out' : ''}`}>
              {currentProject.githubLink && (
                <a
                  href={currentProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link github-link"
                >
                  <span className="link-icon">&#60;/&#62;&nbsp;&nbsp;</span>
                  Código
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;