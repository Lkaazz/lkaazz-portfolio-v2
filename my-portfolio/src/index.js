import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/Global.css";
import "./styles/Home.css";
import "./styles/Projects.css";
import "./styles/Header.css";
import "./styles/Footer.css";
import "./styles/Responsive.css";
import "./styles/About.css";
import "@fontsource/pixelify-sans";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);