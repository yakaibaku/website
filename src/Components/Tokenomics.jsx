import React from 'react';
import styles from '../styles';

const Tokenomics = () => {
  const skills = [
    { name: 'SALE 25.0%', level: 25, color: 'bg-lime-400' },
    { name: 'AIRDROP 5.0%', level: 5, color: 'bg-yellow-200' },
    { name: 'DEVELOPMENT 25.0%', level: 25, color: 'bg-lime-600' },
    { name: 'TEAM 2.5%', level: 2.5, color: 'bg-cyan-200' },
    { name: 'PROMOTERS 2.5%', level: 2.5, color: 'bg-cyan-400' },
    { name: 'LOCK FOR 24MONTHS 30%', level: 30, color: 'bg-blue-400' },
    { name: 'LIQUIDITY & MARKET', level: 5, color: 'bg-yellow-500'},
    { name: 'PARTNERSHIPS 5.0%', level: 5, color: 'bg-blue-600' },
  ];
  return (
    <div>
    <section id="tokenomics" className="hidden md:block">
      <div className="items-center justify-center text-center">
        <h2 className={`${styles.heading2} mt-11 text-gradient`}>Tokenomics</h2>
      </div>
      <div className="flex items-center justify-center">
        <div className="root2 p-2">
          <div className="container2 bg-gray-800 mt-12">
            <h1 className="title-text text-2xl text-white">Token Distribution</h1>
            <div className="skill-box">
              <span className="title">sale <span className="text-lime-400">25.0%</span></span>
              <div className="skill-bar">
                <span className="skill-per farming"></span>
              </div>
            </div>
            <div className="skill-box">
              <span className="title">airdrop <span className="text-yellow-200">5.0%</span></span>
              <div className="skill-bar">
                <span className="skill-per staking"></span>
              </div>
            </div>
            <div className="skill-box">
              <span className="title">development <span className="text-lime-600">25.0%</span></span>
              <div className="skill-bar">
                <span className="skill-per development"></span>
              </div>
            </div>
            <div className="skill-box">
              <span className="title">team <span className="text-cyan-200">2.5%</span></span>
              <div className="skill-bar">
                <span className="skill-per tokensale"></span>
              </div>
            </div>
            <div className="skill-box">
              <span className="title">promoters <span className="text-cyan-400">2.5%</span></span>
              <div className="skill-bar">
                <span className="skill-per team"></span>
              </div>
            </div>
            <div className="skill-box">
              <span className="title">lock for 24months <span className="text-blue-400">30.0%</span></span>
              <div className="skill-bar">
                <span className="skill-per investors"></span>
              </div>
            </div>
            <div className="skill-box">
              <span className="title">liquidity and market <span className="text-yellow-500">5.0%</span></span>
              <div className="skill-bar">
                <span className="skill-per market"></span>
              </div>
            </div>
            <div className="skill-box">
              <span className="title">partnership <span className="text-yellow-500">5.0%</span></span>
              <div className="skill-bar">
                <span className="skill-per market"></span>
              </div>
            </div>
            <div className="total bg-gradient-to-br from-slate-100 to-blue-600">
              <h1>Total Tokens <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-600 to-blue-600">100 M</span></h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <div className="items-center justify-center text-center">
        <h2 className={`${styles.heading2} mt-11 text-gradient`}>Tokenomics</h2>
      </div>
    <div className='flex md:hidden justify-center text-center mt-8'>
    <div className="max-w-sm rounded-lg shadow-lg bg-gray-800 p-6 w-[400px]">
      <div className='bg-rose-500 rounded-2xl'>
      <h2 className="text-gray-800 text-2xl font-bold mb-4">Token Distribution</h2>
      </div>
      {skills.map((skill, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-gray-100 text-lg font-bold mb-2">{skill.name}</h3>
          <div className="relative h-4 bg-gray-600 rounded">
            <div
              className={`absolute top-0 left-0 h-4 rounded ${skill.color}`}
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
      <div className='justify-center bg-gradient-to-r from-purple-600 to-rose-600 mt-14 rounded-full'>
        <h2 className='text-gray-900 text-xl font-bold'>Total tokens <span className='text-rose-100'>100</span> M</h2>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Tokenomics;
