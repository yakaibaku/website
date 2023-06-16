import React from 'react'
import styles, { layout } from "../styles"

export const Introduction = () => {
  return (
    <section>
      <div className="space-x-6">
        <h2 className={`${styles.heading2} mt-5 text-center`}>Welcome to the Yakai Ecosystem!</h2>
        <p className={`${styles.paragraph} text-center max-w-[900px] mt-5`}>The Yakai Ecosystem is an innovative and dynamic platform that brings together the realms of DEFI (Decentralized Finance) and shitcoin within a single ecosystem. Our vision is to create a unique and engaging environment for cryptocurrency enthusiasts and investors, offering opportunities for both financial growth and exploration.<br/><br/>
          At the core of our ecosystem are two distinctive tokens: Yakai Baku and Yakai Boom. Yakai Baku acts as the backbone of the Yakai Ecosystem, functioning as a DEFI token that empowers users with a range of exciting possibilities. From governance rights and staking rewards to lending and borrowing options, Yakai Baku offers a versatile and robust foundation for our community members.</p>
      </div>
    </section>
  )
}
