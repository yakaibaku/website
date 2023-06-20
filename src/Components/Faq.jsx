import React from 'react';
import styles from '../styles';
import plus from '../assets/add-circle.svg';

const Faq = () => {
  return (
    <section id="faq">
      <div className='mt-10'>
        <div>
          <h2 className={`${styles.heading2} font-mono flex items-center justify-center text-center mt-[24px] text-transparent text-8xl bg-clip-text text-gradient`}>FAQ's</h2>
        </div>

        <div className='justify-center hidden md:grid'>
          <div className='relative w-[800px] bg-slate-800 shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.3),-6px_-6px_10px_-1px_rgba(255,255,255,0.3)] rounded-xl m-[15px]'>
            <input className='absolute peer opacity-0' type="checkbox" id='inputa1' />
            <label className='font-bold tracking-[1px] mx-[20px] h-[50px] flex items-center text-white' htmlFor="inputa1">What is the Yakai Ecosystem?</label>
            <div className='absolute top-[15px] right-[30px] rotate-0 peer-checked:rotate-45 duration-300'>
              <img src={plus} className='h-7 w-7' alt="" />
            </div>

            <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
              <p className='p-[20px] text-sm text-gray-300'>
                The Yakai Ecosystem is a unique platform that combines the realms of Decentralized Finance (DEFI) and shitcoin. It offers a range of financial services and investment opportunities within a secure and transparent environment.
              </p>
            </div>
          </div>

          <div className='relative w-[800px] bg-slate-800 shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.3),-6px_-6px_10px_-1px_rgba(255,255,255,0.3)] rounded-xl m-[15px]'>
            <input className='absolute peer opacity-0' type="checkbox" id='inputa2' />
            <label className='font-bold tracking-[1px] mx-[20px] h-[50px] flex items-center text-white' htmlFor="inputa2">What are the benefits of investing in Yakai Baku?</label>
            <div className='absolute top-[15px] right-[30px] rotate-0 peer-checked:rotate-45 duration-300'>
              <img src={plus} className='h-7 w-7' alt="" />
            </div>

            <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
              <p className='p-[20px] text-sm text-gray-300'>
                Investing in Yakai Baku brings several benefits. It allows you to participate in DEFI activities such as staking, farming, and lending, providing potential for passive income and asset growth. Additionally, Yakai Baku holders have governance rights within the ecosystem, empowering them to shape its future.
              </p>
            </div>
          </div>

          <div className='relative w-[800px] bg-slate-800 shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.3),-6px_-6px_10px_-1px_rgba(255,255,255,0.3)] rounded-xl m-[15px]'>
            <input className='absolute peer opacity-0' type="checkbox" id='inputa3' />
            <label className='font-bold tracking-[1px] mx-[20px] h-[50px] flex items-center text-white' htmlFor="inputa3">What is the role of Yakai Boom in the ecosystem?</label>
            <div className='absolute top-[15px] right-[30px] rotate-0 peer-checked:rotate-45 duration-300'>
              <img src={plus} className='h-7 w-7' alt="" />
            </div>

            <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
              <p className='p-[20px] text-sm text-gray-300'>
                Yakai Boom represents the more speculative side of the Yakai Ecosystem. It offers unique investment opportunities with the potential for high rewards. However, we advise caution and thorough research before investing in Yakai Boom or any shitcoin.
              </p>
            </div>
          </div>

          <div className='relative w-[800px] bg-slate-800 shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.3),-6px_-6px_10px_-1px_rgba(255,255,255,0.3)] rounded-xl m-[15px]'>
            <input className='absolute peer opacity-0' type="checkbox" id='inputa4' />
            <label className='font-bold tracking-[1px] mx-[20px] h-[50px] flex items-center text-white' htmlFor="inputa4">How can I participate in the Yakai Ecosystem's governance?</label>
            <div className='absolute top-[15px] right-[30px] rotate-0 peer-checked:rotate-45 duration-300'>
              <img src={plus} className='h-7 w-7' alt="" />
            </div>

            <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
              <p className='p-[20px] text-sm text-gray-300'>
                As a holder of Yakai Baku tokens, you have the opportunity to participate in the ecosystem's governance decisions. These decisions may include protocol upgrades, parameter adjustments, and other important matters. We encourage active engagement and community involvement to ensure a decentralized and inclusive ecosystem.
              </p>
            </div>
          </div>

          <div className='relative w-[800px] bg-slate-800 shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.3),-6px_-6px_10px_-1px_rgba(255,255,255,0.3)] rounded-xl m-[15px]'>
            <input className='absolute peer opacity-0' type="checkbox" id='inputa5' />
            <label className='font-bold tracking-[1px] mx-[20px] h-[50px] flex items-center text-white' htmlFor="inputa5">Is the Yakai Ecosystem secure?</label>
            <div className='absolute top-[15px] right-[30px] rotate-0 peer-checked:rotate-45 duration-300'>
              <img src={plus} className='h-7 w-7' alt="" />
            </div>

            <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
              <p className='p-[20px] text-sm text-gray-300'>
                Yes, the Yakai Ecosystem prioritizes security and employs robust measures to safeguard your assets and personal information. We regularly conduct audits, utilize advanced encryption, and follow best practices to provide a secure environment for our users.
              </p>
            </div>
          </div>
        </div>

        <div className='grid justify-center lg:hidden md:grid'>
          <div className='relative w-[400px] bg-slate-800 shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.3),-6px_-6px_10px_-1px_rgba(255,255,255,0.3)] rounded-xl m-[15px]'>
            <input className='absolute peer opacity-0' type="checkbox" id='input1' />
            <label className='font-bold tracking-[1px] mx-[20px] h-[50px] flex items-center text-white' htmlFor="input1">What is the Yakai Ecosystem?</label>
            <div className='absolute top-[15px] right-[30px] rotate-0 peer-checked:rotate-45 duration-300'>
              <img src={plus} className='h-7 w-7' alt="plus" />
            </div>

            <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
              <p className='p-[20px] text-sm text-gray-300'>
                The Yakai Ecosystem is a unique platform that combines the realms of Decentralized Finance (DEFI) and shitcoin. It offers a range of financial services and investment opportunities within a secure and transparent environment.
              </p>
            </div>
          </div>

          <div className='relative w-[400px] bg-slate-800 shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.3),-6px_-6px_10px_-1px_rgba(255,255,255,0.3)] rounded-xl m-[15px]'>
            <input className='absolute peer opacity-0' type="checkbox" id='input2' />
            <label className='font-bold tracking-[1px] mx-[20px] h-[50px] flex items-center text-white' htmlFor="input2">What are the benefits of investing in Yakai Baku?</label>
            <div className='absolute top-[15px] right-[30px] rotate-0 peer-checked:rotate-45 duration-300'>
              <img src={plus} className='h-7 w-7' alt="plus" />
            </div>

            <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
              <p className='p-[20px] text-sm text-gray-300'>
                Investing in Yakai Baku brings several benefits. It allows you to participate in DEFI activities such as staking, farming, and lending, providing potential for passive income and asset growth. Additionally, Yakai Baku holders have governance rights within the ecosystem, empowering them to shape its future.
              </p>
            </div>
          </div>

          <div className='relative w-[400px] bg-slate-800 shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.3),-6px_-6px_10px_-1px_rgba(255,255,255,0.3)] rounded-xl m-[15px]'>
            <input className='absolute peer opacity-0' type="checkbox" id='input3' />
            <label className='font-bold tracking-[1px] mx-[20px] h-[50px] flex items-center text-white' htmlFor="input3">What is the role of Yakai <br /> Boom in the ecosystem?</label>
            <div className='absolute top-[15px] right-[30px] rotate-0 peer-checked:rotate-45 duration-300'>
              <img src={plus} className='h-7 w-7' alt="plus" />
            </div>

            <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
              <p className='p-[20px] text-sm text-gray-300'>
                Yakai Boom represents the more speculative side of the Yakai Ecosystem. It offers unique investment opportunities with the potential for high rewards. However, we advise caution and thorough research before investing in Yakai Boom or any shitcoin.
              </p>
            </div>
          </div>

          <div className='relative w-[400px] bg-slate-800 shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.3),-6px_-6px_10px_-1px_rgba(255,255,255,0.3)] rounded-xl m-[15px]'>
            <input className='absolute peer opacity-0' type="checkbox" id='input4' />
            <label className='font-bold tracking-[1px] mx-[20px] h-[50px] flex items-center text-white' htmlFor="input4">How can I participate in the Yakai Ecosystem's governance?</label>
            <div className='absolute top-[15px] right-[30px] rotate-0 peer-checked:rotate-45 duration-300'>
              <img src={plus} className='h-7 w-7' alt="plus" />
            </div>

            <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
              <p className='p-[20px] text-sm text-gray-300'>
                As a holder of Yakai Baku tokens, you have the opportunity to participate in the ecosystem's governance decisions. These decisions may include protocol upgrades, parameter adjustments, and other important matters. We encourage active engagement and community involvement to ensure a decentralized and inclusive ecosystem.
              </p>
            </div>
          </div>

          <div className='relative w-[400px] bg-slate-800 shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.3),-6px_-6px_10px_-1px_rgba(255,255,255,0.3)] rounded-xl m-[15px]'>
            <input className='absolute peer opacity-0' type="checkbox" id='input5' />
            <label className='font-bold tracking-[1px] mx-[20px] h-[50px] flex items-center text-white' htmlFor="input5">Is the Yakai Ecosystem secure?</label>
            <div className='absolute top-[15px] right-[30px] rotate-0 peer-checked:rotate-45 duration-300'>
              <img src={plus} className='h-7 w-7' alt="plus" />
            </div>

            <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
              <p className='p-[20px] text-sm text-gray-300'>
                Yes, the Yakai Ecosystem prioritizes security and employs robust measures to safeguard your assets and personal information. We regularly conduct audits, utilize advanced encryption, and follow best practices to provide a secure environment for our users.
              </p>
            </div>
          </div>
        </div>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
      </div>
    </section>
  );
};

export default Faq;
