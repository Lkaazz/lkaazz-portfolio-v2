import { useState } from "react";
import "@fontsource/pixelify-sans";
import minhaFoto from "../assets/minha-foto.png";
import risco from "../assets/risco.png";
import "../styles/About.css";

function About() {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const aboutTitles = ["sobre mim", "fatos"];
  const aboutTexts = [
    {
      paragraphs: [
        "Desenvolvedor backend júnior na Accenture Brasil, especializado em Oracle BRM — sistema de faturamento e revenue management.",
        "Atuo com Java, C e SQL em soluções focadas em regras de negócio, modelagem de dados e entregas escaláveis.",
        "Formado em Análise e Desenvolvimento de Sistemas pelo IFSP (2025)."
      ]
    },
    {
      paragraphs: [
        "- moro no brasil",
        "- tenho 21 anos",
        "- produtivo em horários desfavoráveis",
        "- gosto de aprender coisas novas",
        "- viciado em games e animes",
        "- perco a nação do tempo facilmente",
      ]
    }
  ];

  const handleScrollIndicatorClick = (index) => {
    if (scrollIndex !== index) {
      setIsTransitioning(true);

      setTimeout(() => {
        setScrollIndex(index);
        setIsTransitioning(false);
      }, 150); 
    }
  };

  return (
    <section id="about" className="about-container">
      <div className="section-content">
        <h2 className={`about-title ${isTransitioning ? 'fade-transition' : ''}`}>
          {aboutTitles[scrollIndex]}
        </h2>
        <div className="scrollbar">
          <div
            className={`scroll-indicator ${scrollIndex === 0 ? "active" : ""}`}
            onClick={() => handleScrollIndicatorClick(0)}
          ></div>
          <div
            className={`scroll-indicator ${scrollIndex === 1 ? "active" : ""}`}
            onClick={() => handleScrollIndicatorClick(1)}
          ></div>
        </div>
        <div className="about-flex-container">
          <div className="profile-pic-container">
            <img
              src={minhaFoto}
              alt="Lucas Carvalho"
              className="profile-pic"
            />
            {scrollIndex === 1 && (
              <img
                src={risco}
                alt="Overlay"
                className="profile-pic-overlay"
              />
            )}
          </div>
          <div className="about-content">
            <div className="about-paragraphs">
              {aboutTexts[scrollIndex].paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`role ${isTransitioning ? 'fade-transition' : ''}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>


        <div className="about-content">
          <h2 className="about-title-2">
            minha stack
          </h2>
          <div className="scrollbar">
            <div className="scroll-indicator-2 active"></div>
          </div>
          <div className="habilidades-container">
            <div className="habilidades-categoria">
              <h3>Linguagens</h3>
              <ul>
                <li>Java</li>
                <li>C</li>
                <li>SQL</li>
                <li>Oracle BRM</li>
                <li>JavaScript</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="habilidades-categoria">
              <h3>Frameworks</h3>
              <ul>
                <li>Node.js</li>
                <li>React</li>
              </ul>
            </div>
            <div className="habilidades-categoria">
              <h3>Ferramentas</h3>
              <ul>
                <li>Scrum</li>
                <li>Git e GitHub</li>
                <li>Jira</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;