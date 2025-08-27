import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./components/About.jsx";
import Projects from "./Pages/Projects";
import "./styles/Global.css";
import "./styles/Home.css";
import "./styles/Projects.css";
import "./styles/Header.css";
import "./styles/Footer.css";
import "./styles/Responsive.css";
import "./styles/About.css";
import "@fontsource/pixelify-sans";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Home />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;