import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-title">quer saber mais?</div>
          <div className="footer-links">
            <div className="footer-links-left">
              <a href={`${process.env.PUBLIC_URL}/assets/cv.pdf`} className="footer-link" target="_blank" rel="noopener noreferrer" download="Lucas-Carvalho-CV.pdf">Veja meu currículo -&gt;</a>
              <a href="mailto:calu1004@hotmail.com" className="footer-link">email -&gt;</a>
            </div>
            <div className="footer-links-right">
              <a href="https://github.com/lkaazz" className="footer-link" target="_blank" rel="noopener noreferrer">Github</a>
              <a href="https://linkedin.com/in/luc-carvalho" className="footer-link" target="_blank" rel="noopener noreferrer">Linkedin</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="credits">
            Desenvolvido por <br/>
            Lucas Carvalho <span className="rainbow-text">(lkaazz)</span> .. 2025
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;