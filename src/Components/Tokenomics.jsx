import React from 'react'
import styles from '../styles'

const Tokenomics = () => {
  return (
    <section id="tokenomics">
        <div className="items-center justify-center text-center">
          <h2 className={`${styles.heading2} mt-20 text-gradient`}>Tokenomics</h2>
        </div>
      <div className="root2">

        <div className="container2 bg-gray-800 mt-24">
            <h1 className="title-text text-2xl text-white">YAKAI</h1>
            <div className="skill-box">
              <span className="title">sale <span className="text-lime-400">25.0%</span></span>
              <div className="skill-bar">
                <span className="skill-per sale">
                </span>
              </div>
            </div>
            <div className="skill-box">
              <span className="title">airdrop <span className="text-yellow-200">5.0%</span></span>
              <div className="skill-bar">
                <span className="skill-per airdrop">
                </span>
              </div>
            </div>
            <div className="skill-box">
              <span className="title">development <span className="text-lime-600">25.0%</span></span>
              <div className="skill-bar">
                <span className="skill-per development">
                </span>
              </div>
            </div>
            <div className="skill-box">
              <span className="title">team <span className="text-cyan-200">2.5%</span></span>
              <div className="skill-bar">
                <span className="skill-per team">
                </span>
              </div>
            </div>
            <div className="skill-box">
              <span className="title">promoters <span className="text-cyan-400">2.5%</span></span>
              <div className="skill-bar">
                <span className="skill-per promoters">
                </span>
              </div>
            </div>
            <div className="skill-box">
              <span className="title">lock for 24Months <span className="text-blue-400">30.0%</span></span>
              <div className="skill-bar">
                <span className="skill-per lock">
                </span>
              </div>
            </div>
            <div className="skill-box">
              <span className="title">Liquidity & Market <span className="text-yellow-500">5.0%</span></span>
              <div className="skill-bar">
                <span className="skill-per liquidity">
                </span>
              </div>
            </div>
            <div className="skill-box">
              <span className="title">Partnerships <span className="text-yellow-500">5.0%</span></span>
              <div className="skill-bar">
                <span className="skill-per Partnerships">
                </span>
              </div>
            </div>
            <div className="total bg-gradient-to-br from-slate-100 to-blue-600">
              <h1>Total Tokens <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-600 to-blue-600">1 BILLION COINS</span></h1>
            </div>
          </div>


      </div>
    </section>
  )
}

export default Tokenomics