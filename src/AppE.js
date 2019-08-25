import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header.js";
import IntroE from "./components/English/IntroE.js";
import SpecificsE from "./components/English/SpecificsE.js";
import AboutE from "./components/English/AboutE.js";
import ContactE from "./components/English/ContactE.js";
import FooterE from "./components/English/FooterE.js";
import "./styles/styles.scss";

function App() {
  return (
    <div className="App">
      <Link className="language" to="/">
        日本語
      </Link>
      <Header />
      <div className="container">
        <IntroE />
        <SpecificsE />
        <ContactE />
        <AboutE />
      </div>
      <FooterE />
    </div>
  );
}

export default App;
