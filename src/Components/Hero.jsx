import React from 'react'
import styles from '../styles'
import discount from '../assets/discount.png'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col x1:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[20px] h-[20px]" />
          <p className={`${styles.paragraph}`}>
            <span className="text-sm text-white">&nbsp;&nbsp;Welcome to the Yakai Ecosystem!</span>
          </p>
        </div>
        <div className="absolute z-[0] w-[40%] h-[35%] top-10 blue__gradient" />
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[40px] text-[30px] text-white ss:leading-[80px] leading-[75px]">
            Experience the Future of <span
              className="rounded-[10px] bg-blue-600"
            >&nbsp;Decentralized&nbsp;</span><br /> Finance and <span
              className="rounded-[10px] bg-blue-600"
            >&nbsp;Shitcoin&nbsp;</span> Innovation.
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <p className={`${styles.paragraph} max-w-[650px] mt-5`}>At the Yakai Ecosystem, we are pioneers of a revolutionary concept that brings together the realms of Decentralized Finance (DEFI) and shitcoin. Our mission is to create a vibrant and dynamic ecosystem that offers a unique blend of opportunities for cryptocurrency enthusiasts and investors.</p>
      </div>
    </section>
  )
}

export default Hero