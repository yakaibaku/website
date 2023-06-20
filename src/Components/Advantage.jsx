import React, { useEffect } from 'react';
import styles from '../styles';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Advantage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="mt-20" id="features">
      <div>
        <h2 className={`${styles.heading2} font-mono flex items-center justify-center text-center mt-[24px] text-transparent text-8xl bg-clip-text text-gradient`}>
          Features
        </h2>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex justify-center mt-10 space-x-8">
        <div className="rounded-lg shadow-lg bg-gray-800 max-w-sm" data-aos="fade-down-right">
          <div className="p-6 justify-center text-center">
            <h5 className="text-gray-100 text-xl font-bold mb-2">DEFI Integration</h5>
            <p className="text-gray-400 text-base mb-4 font-bold">
              Yakai Baku Ecosystem is built on the principles of Decentralized Finance (DEFI). Harnessing the power of blockchain technology, our ecosystem provides a secure and transparent environment for financial activities, enabling users to access a wide range of DEFI services.
            </p>
          </div>
        </div>

        <div className="rounded-lg shadow-lg bg-gray-800 max-w-sm" data-aos="fade-down">
          <div className="p-6 justify-center text-center">
            <h5 className="text-gray-100 text-xl font-bold mb-2">Staking Rewards</h5>
            <p className="text-gray-400 text-base mb-4 font-bold">
            Unlock the potential of your Yakai Baku tokens by participating in our staking program. By staking your tokens, you contribute to the network's security and stability while earning attractive rewards. Enjoy passive income as you support the growth of the Yakai Ecosystem.
            </p>
          </div>
        </div>

        <div className="rounded-lg shadow-lg bg-gray-800 max-w-sm" data-aos="fade-down-left">
          <div className="p-6 justify-center text-center">
            <h5 className="text-gray-100 text-xl font-bold mb-2">Farming Opportunities</h5>
            <p className="text-gray-400 text-base mb-4 font-bold">
            Experience the excitement of yield farming within the Yakai Baku Ecosystem. Through our farming features, users can provide liquidity to our liquidity pools and earn additional rewards. Take advantage of the opportunities presented by our carefully selected farming options to maximize your returns.
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:flex justify-center mt-10 space-x-8">
        <div className="rounded-lg shadow-lg bg-gray-800 max-w-sm" data-aos="fade-up-right">
          <div className="p-6 justify-center text-center">
            <h5 className="text-gray-100 text-xl font-bold mb-2">Lending and Borrowing</h5>
            <p className="text-gray-400 text-base mb-4 font-bold">
            Seize the power of decentralized lending and borrowing through our lending platform. Yakai Baku Ecosystem enables users to lend their tokens and earn interest, or borrow assets against collateral. Enjoy flexible borrowing options and competitive interest rates, all within a secure and transparent environment.
            </p>
          </div>
        </div>

        <div className="rounded-lg shadow-lg bg-gray-800 max-w-sm" data-aos="fade-up">
          <div className="p-6 justify-center text-center">
            <h5 className="text-gray-100 text-xl font-bold mb-2">Governance</h5>
            <p className="text-gray-400 text-base mb-4 font-bold">
            Become an active participant in shaping the future of the Yakai Baku Ecosystem. Holders of Yakai Baku tokens have the opportunity to participate in governance decisions, such as protocol upgrades and parameter adjustments. Your voice matters, and we encourage community involvement to ensure a decentralized and inclusive ecosystem.
            </p>
          </div>
        </div>

        <div className="rounded-lg shadow-lg bg-gray-800 max-w-sm" data-aos="fade-up-left">
          <div className="p-6 justify-center text-center">
            <h5 className="text-gray-100 text-xl font-bold mb-2">Security and Transparency</h5>
            <p className="text-gray-400 text-base mb-4 font-bold">
            We prioritize the security and trustworthiness of our ecosystem. Through rigorous security measures and regular audits, we strive to maintain a safe environment for our users. Additionally, we emphasize transparency, providing comprehensive information about our protocols, contracts, and updates to keep our community well-informed
            </p>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden mt-10 grid gap-8 justify-center">
        <div className="rounded-lg shadow-lg bg-gray-800 max-w-sm" data-aos="fade-left">
          <div className="p-6 justify-center text-center">
            <h5 className="text-gray-100 text-xl font-bold mb-2">DEFI Integration</h5>
            <p className="text-gray-400 text-base mb-4 font-bold">
              Yakai Baku Ecosystem is built on the principles of Decentralized Finance (DEFI). Harnessing the power of blockchain technology, our ecosystem provides a secure and transparent environment for financial activities, enabling users to access a wide range of DEFI services.
            </p>
          </div>
        </div>

        <div className="rounded-lg shadow-lg bg-gray-800 max-w-sm" data-aos="fade-right">
          <div className="p-6 justify-center text-center">
            <h5 className="text-gray-100 text-xl font-bold mb-2">Staking Rewards</h5>
            <p className="text-gray-400 text-base mb-4 font-bold">
            Unlock the potential of your Yakai Baku tokens by participating in our staking program. By staking your tokens, you contribute to the network's security and stability while earning attractive rewards. Enjoy passive income as you support the growth of the Yakai Ecosystem.
            </p>
          </div>
        </div>

        <div className="rounded-lg shadow-lg bg-gray-800 max-w-sm" data-aos="fade-left">
          <div className="p-6 justify-center text-center">
            <h5 className="text-gray-100 text-xl font-bold mb-2">Farming Opportunities</h5>
            <p className="text-gray-400 text-base mb-4 font-bold">
            Experience the excitement of yield farming within the Yakai Baku Ecosystem. Through our farming features, users can provide liquidity to our liquidity pools and earn additional rewards. Take advantage of the opportunities presented by our carefully selected farming options to maximize your returns.
            </p>
          </div>
        </div>

        <div className="rounded-lg shadow-lg bg-gray-800 max-w-sm" data-aos="fade-right">
          <div className="p-6 justify-center text-center">
            <h5 className="text-gray-100 text-xl font-bold mb-2">Lending and Borrowing</h5>
            <p className="text-gray-400 text-base mb-4 font-bold">
            Seize the power of decentralized lending and borrowing through our lending platform. Yakai Baku Ecosystem enables users to lend their tokens and earn interest, or borrow assets against collateral. Enjoy flexible borrowing options and competitive interest rates, all within a secure and transparent environment.
            </p>
          </div>
        </div>

        <div className="rounded-lg shadow-lg bg-gray-800 max-w-sm" data-aos="fade-left">
          <div className="p-6 justify-center text-center">
            <h5 className="text-gray-100 text-xl font-bold mb-2">Governance</h5>
            <p className="text-gray-400 text-base mb-4 font-bold">
            Become an active participant in shaping the future of the Yakai Baku Ecosystem. Holders of Yakai Baku tokens have the opportunity to participate in governance decisions, such as protocol upgrades and parameter adjustments. Your voice matters, and we encourage community involvement to ensure a decentralized and inclusive ecosystem.
            </p>
          </div>
        </div>

        <div className="rounded-lg shadow-lg bg-gray-800 max-w-sm" data-aos="fade-right">
          <div className="p-6 justify-center text-center">
            <h5 className="text-gray-100 text-xl font-bold mb-2">Security and Transparency</h5>
            <p className="text-gray-400 text-base mb-4 font-bold">
            We prioritize the security and trustworthiness of our ecosystem. Through rigorous security measures and regular audits, we strive to maintain a safe environment for our users. Additionally, we emphasize transparency, providing comprehensive information about our protocols, contracts, and updates to keep our community well-informed
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Advantage;
