import { useState } from "react";
import "@fontsource/pixelify-sans";
import minhaFoto from "../assets/minha-foto.png";
import risco from "../assets/risco.png";
import "../styles/About.css";

const VerticalText = () => {
  const frase = "運命が俺をこの世界を征服するために選んだ";
  return (
    <div id="Teach" className="vertical-jp" data-tooltip=" &quot;O destino me escolheu para conquistar este mundo&quot; -Teach ">
      {frase.split('').map((char, index) => (
        <span key={index}>{char}</span>
      ))} 
    </div>
  );
};

function About() {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const aboutTitles = ["sobre mim", "fatos"];
  const aboutTexts = [
    {
      paragraphs: [
        "Desenvolvedor web com experiência em todo o ciclo de desenvolvimento, desde o design até a implementação.",
        "Atualmente, estudo Análise e Desenvolvimento de Sistemas no IFSP de Campinas.",
        "Estou sempre desenvolvendo aplicações e experiências únicas."
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
        <VerticalText />
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
                <li>JavaScript (ES6+)</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Python</li>
                <li>Java</li>
                <li>SQL</li>
                <li>C#</li>
                <li>C</li>
              </ul>
            </div>
            <div className="habilidades-categoria">
              <h3>Frameworks</h3>
              <ul>
                <li>React</li>
                <li>Node.js</li>
              </ul>
            </div>
            <div className="habilidades-categoria">
              <h3>Ferramentas</h3>
              <ul>
                <li>Git e GitHub</li>
                <li>MySQL</li>
                <li>Figma</li>
                <li>Bash</li>
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