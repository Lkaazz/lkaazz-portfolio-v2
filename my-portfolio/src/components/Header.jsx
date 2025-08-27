import { useState, useEffect } from "react";
import "../styles/Header.css";

function Header() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (currentScrollY < lastScrollY || currentScrollY === 0) {
        setVisible(true);
      } 
      else if (currentScrollY > lastScrollY) {
        setVisible(false);
      }
      
      const homeSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');
      const projectsSection = document.getElementById('projects');
      
      const scrollPosition = window.scrollY + windowHeight * 0.6; 
      
      if (homeSection && scrollPosition < aboutSection.offsetTop) {
        setActiveSection('home');
      } else if (aboutSection && scrollPosition >= aboutSection.offsetTop && scrollPosition < projectsSection.offsetTop) {
        setActiveSection('about');
      } else if (projectsSection && scrollPosition >= projectsSection.offsetTop) {
        setActiveSection('projects');
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsets = {
        'home': 0,
        'about': 0,
        'projects': -75 
      };
      
      window.scrollTo({
        top: section.offsetTop - offsets[sectionId], 
        behavior: 'smooth',
      });
    }
  };
 
  return (
    <header className={`site-header ${visible ? "visible" : "hidden"}`}>
      <div className="header-container">
        <a href="#home" className="logo" onClick={(e) => {
          e.preventDefault();
          scrollToSection('home');
        }}>
          lkaaz
        </a>
        <nav className="nav-links">
          <a
            href="#home"
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}` }
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            home
          </a>
          <a
            href="#about"
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
          >
            sobre mim
          </a>
          <a
            href="#projects"
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
          >
            projetos
          </a>
        </nav>
        <nav className="nav-end">
          <a id="a1" 
            href="https://github.com/lkaazz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-link"
            data-tooltip="Github"
          > 
            gh
          </a>
          <a id="a2"
            href="https://linkedin.com/in/luc-carvalho" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-link"
            data-tooltip="LinkedIn"
          >
            in
          </a>
          <a id="a3"
            href={`${process.env.PUBLIC_URL}/assets/cv.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            download="Lucas-Carvalho-CV.pdf"
            className="nav-link"
            data-tooltip="Currículo"
          >
            cv
          </a>
          <a id="a4"
            href="mailto:xlkz321@gmail.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            data-tooltip="Email"
          >
            em
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;