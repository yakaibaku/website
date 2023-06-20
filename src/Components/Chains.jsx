import React from "react";
import styled, { keyframes, css } from "styled-components";
import styles from "../styles";

function Chains() {
  const row1 = [
    "https://www.safepal.com/assets/img/logo-light.svg",
    "https://trustwallet.com/assets/images/media/assets/horizontal_blue.png",
    "https://seeklogo.com/images/M/metamask-logo-531AE40256-seeklogo.com.png",
    "http://therabbit.io/wp-content/uploads/2023/02/logo-rabbit.png",
  ];

  const row2 = [
    "https://staticcdn2.maiziqianbao.net/static/img/icon/MathWallet_Logo.svg",
    "https://unstoppable.money/static/media/HeaderLogo.be4c4bfc529917c1766601fe05206b29.svg",
    "https://www.tokenpocket.pro/_nuxt/img/logo.03b9a69.png",
    "https://dex-bin.bnbstatic.com/static/images/logo_BNB_Chain.svg",
  ];

  return (
    <div>
      <div className="mt-36">
      <h2 className={`${styles.heading2} font-mono flex items-center justify-center text-center mt-[24px] text-transparent text-8xl bg-clip-text text-gradient`}>Supported Wallets</h2>
      </div>
    <div className="hidden md:flex w-full bg-transparent">
    <AppContainer>
      <Wrapper>
      <div>
        
      </div>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </AppContainer>

    </div>
    <div className="mt-16">
      <div className='flex gap-10 justify-center lg:hidden md:grid'>
        <img src="https://www.safepal.com/assets/img/logo-light.svg" alt="safepal" className="" />
        <img src="https://trustwallet.com/assets/images/media/assets/horizontal_blue.png" alt="trustwallet" className="w-60 h-32" />
      </div>

      <div className='flex gap-10 justify-center lg:hidden md:grid'>
        <img src="https://seeklogo.com/images/M/metamask-logo-531AE40256-seeklogo.com.png" alt="metamask" className="w-52 h-10" />
        <img src="http://therabbit.io/wp-content/uploads/2023/02/logo-rabbit.png" alt="rabbit" className="w-48 h-10" />
      </div>

      <div className='flex gap-10 justify-center lg:hidden md:grid mt-10'>
        <img src="https://staticcdn2.maiziqianbao.net/static/img/icon/MathWallet_Logo.svg" alt="mathwallet" className="w-48 h-24" />
        <img src="https://unstoppable.money/static/media/HeaderLogo.be4c4bfc529917c1766601fe05206b29.svg" alt="rabbit" className="w-40 h-20" />
      </div>

      <div className='flex gap-10 justify-center lg:hidden md:grid items-center'>
        <img src="https://www.tokenpocket.pro/_nuxt/img/logo.03b9a69.png" alt="tokenpocket" className="w-48 h-10" />
        <img src="https://dex-bin.bnbstatic.com/static/images/logo_BNB_Chain.svg" alt="bnb" className="w-40 h-20" />
      </div>
    </div>
    </div>
  );
}

export default Chains;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;
  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
`;