import React, { useEffect, useState } from "react";
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
import { RingLoader } from 'react-spinners'
import logo from './assets/yakainame.png'
import Chains from "./Components/Chains";

const App = () => {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <div>
    {
      loading?
      <div className="flex text-center items-center justify-center w-[100%] h-[100vh]">
        <img src={logo} alt="logo" loading={loading} className="h-64 w-64 animate-bounce" />
      </div>
      :
    <div className="bg-gradient-to-r from-purple-800 to-rose-800">
      
      <div>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
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
        <Chains />
      </div>
      <div>
        <Faq />
      </div>
      <div>
        <Footer />
      </div>
    </div>
    }
  </div>
  );
}

export default App