import React from "react";
import styles from "./styles";
import "./index.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Stats from "./Components/Stats";
import { Introduction } from "./Components/Introduction";
import Advantage from "./Components/Advantage";
import Roadmap from "./Components/Roadmap";
import Tokenomics from "./Components/Tokenomics";
import Footer from "./Components/Footer";
import Faq from "./Components/Faq";

const App = () => {
  return (
    <div className="bg-primary">
      <div>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Introduction />
      </div>
      <div>
        <Advantage />
      </div>
      <div>
        <Roadmap />
      </div>
      <div>
        <Tokenomics />
      </div>
      <div>
        <Faq />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App