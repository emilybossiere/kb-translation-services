import React from "react";
import { Link } from "react-router-dom";
import IntroE from "./components/English/IntroE.js";
import SpecificsE from "./components/English/SpecificsE.js";
import AboutE from "./components/English/AboutE.js";
import ContactE from "./components/English/ContactE.js";
import FooterE from "./components/English/FooterE.js";
import "./styles/styles.scss";

function App() {
  return (
    <div className="App">
      <Link to="/">日本語</Link>
      <IntroE />
      <SpecificsE />
      <ContactE />
      <AboutE />
      <FooterE />
    </div>
  );
}

export default App;
