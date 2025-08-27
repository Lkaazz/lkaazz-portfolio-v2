import "@fontsource/pixelify-sans";
import { useRef } from "react";
import "../styles/Home.css";

function Home() {
  const aboutSectionRef = useRef(null);
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };
  return (
    <section id="home" className="home-container">
      <div className="content">
        <p className="welcome">Bem vindo(a)///</p>
        <p className="dots">
          <span>*</span> <span>&nbsp;*</span> <span>&nbsp;*</span>
        </p>
        <p className="intro">eu sou</p>
        <h1 className="name">Lucas Carvalho</h1>
        <p className="role">
          desenvolvedor <span className="highlight">Full-stack</span> focado no desenvolvimento web 👨🏽‍💻
        </p>
        <pre className="papagaio">
{`
                           .
                          | \\/|
  (\\   _                  ) )|/|
      (/            _----. /.'.'
.-._________..      .' @ _\\  .'   
'.._______.   '.   /    (_| .')
  '._____.  /   '-/      | _.'
   '.______ (         ) ) \\
     '..____ '._       )  )
        .' __.--\\  , ,  // ((
        '.'     |  \\/   (_.'(
                '   \\ .'
                 \\   (
                  \\   '.
                   \\ \\ '.)
                    '-'-'
`}
        </pre>
        <button 
          className="scroll-button"
          onClick={scrollToAbout}
        >
          <span>l</span>
          <span>\/</span>
        </button>
        <p className="scroll-text">isso, <br /> você pode scrollar agora.</p>
      </div>
    </section>
  );
}

export default Home;