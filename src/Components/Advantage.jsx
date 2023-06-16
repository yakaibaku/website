import React from 'react'
import styles from '../styles'

const Advantage = () => {
  return (
    <div className={`mt-20`} id="features">
        <div>
          <h2 className={`${styles.heading2} font-mono flex items-center justify-center text-center mt-[24px] text-transparent text-8xl bg-clip-text text-gradient`}>Features</h2>
        </div>
        <div className="flex-1 flex-col x1:px-0 sm:px-16 px-6">
          <div className="flex mt-12 space-x-10 text-center">
            <div className="block bg-gradient-to-br from-sky-500 to-blue-400 w-96 border rounded-lg shadow">
              <h2 className="text-blue-100 font-semibold xs:text-[20px] text-[20px] xs:leading-[53px] leading-[43px]">DEFI Integration</h2>
              <p className='font-semibold text-slate-900'>Yakai Baku Ecosystem is built on the principles of Decentralized Finance (DEFI). Harnessing the power of blockchain technology, our ecosystem provides a secure and transparent environment for financial activities, enabling users to access a wide range of DEFI services.</p>
            </div>

            <div className="block bg-gradient-to-br from-sky-500 to-blue-400 w-96 border rounded-lg shadow">
              <h2 className="text-blue-100 font-semibold xs:text-[20px] text-[20px] xs:leading-[53px] leading-[43px]">Staking Rewards</h2>
              <p className='font-semibold text-slate-900'>Unlock the potential of your Yakai Baku tokens by participating in our staking program. By staking your tokens, you contribute to the network's security and stability while earning attractive rewards. Enjoy passive income as you support the growth of the Yakai Ecosystem.</p>
            </div>

            <div className="block bg-gradient-to-br from-sky-500 to-blue-400 w-96 border rounded-lg shadow">
              <h2 className="text-blue-100 font-semibold xs:text-[20px] text-[20px] xs:leading-[53px] leading-[43px]">Farming Opportunities</h2>
              <p className='font-semibold text-slate-900'>Experience the excitement of yield farming within the Yakai Baku Ecosystem. Through our farming features, users can provide liquidity to our liquidity pools and earn additional rewards. Take advantage of the opportunities presented by our carefully selected farming options to maximize your returns.</p>
            </div>
          </div>

          <div className="flex mt-10 text-center space-x-10">
            <div className="block bg-gradient-to-br from-sky-500 to-blue-400 w-96 border rounded-lg shadow">
              <h2 className="text-blue-100 font-semibold xs:text-[20px] text-[20px] xs:leading-[53px] leading-[43px]">Lending and Borrowing</h2>
              <p className='font-semibold text-slate-900'>Seize the power of decentralized lending and borrowing through our lending platform. Yakai Baku Ecosystem enables users to lend their tokens and earn interest, or borrow assets against collateral. Enjoy flexible borrowing options and competitive interest rates, all within a secure and transparent environment.</p>
            </div>

            <div className="block bg-gradient-to-br from-sky-500 to-blue-400 w-96 border rounded-lg shadow">
              <h2 className="text-blue-100 font-semibold xs:text-[20px] text-[20px] xs:leading-[53px] leading-[43px]">Governance</h2>
              <p className='font-semibold text-slate-900'>Become an active participant in shaping the future of the Yakai Baku Ecosystem. Holders of Yakai Baku tokens have the opportunity to participate in governance decisions, such as protocol upgrades and parameter adjustments. Your voice matters, and we encourage community involvement to ensure a decentralized and inclusive ecosystem.</p>
            </div>

            <div className="block bg-gradient-to-br from-sky-500 to-blue-400 w-96 border rounded-lg shadow">
              <h2 className="text-blue-100 font-semibold xs:text-[20px] text-[20px] xs:leading-[53px] leading-[43px]">Security and Transparency</h2>
              <p className='font-semibold text-slate-900'>We prioritize the security and trustworthiness of our ecosystem. Through rigorous security measures and regular audits, we strive to maintain a safe environment for our users. Additionally, we emphasize transparency, providing comprehensive information about our protocols, contracts, and updates to keep our community well-informed.</p>
            </div>
          </div>

        </div>
    </div>
       
  )
}

export default Advantage