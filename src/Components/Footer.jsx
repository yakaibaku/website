import styles from "../styles";
import logo from '../assets/yakai.png';
import { footerLinks } from "../Constants";

const Footer = () => {
    return (
        <section className={`${styles.flexCenter} p-10 flex-col`}>
            <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
                <div className="flex-1 flex flex-col justify-start">
                    <img src={logo} alt="bitcoin" className="w-[80px] h-[80px]" />
                    <p className={`${styles.paragraph} left-0 mt-4 max-w-[310px]`}>YAKAI Ecosystem</p>
                </div>
                <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                    <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                        <h4 className="text-white font-poppins font-medium text-[18px] leading-[27px]">
                            Useful Links
                        </h4>
                        <ul>
                          <a href="https://www.whatsapp.com">
                          <li className={`font-poppins font-normal text-[16px] leading-[24px] text-white hover:text-secondary cursor-pointer`}>
                                White paper
                            </li>
                          </a>
                        </ul>
                    </div>

                    <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                        <h4 className="text-white font-poppins font-medium text-[18px] leading-[27px]">
                            Community
                        </h4>
                        <ul>
                          <a href="https://www.whatsapp.com">
                          <li className={`font-poppins font-normal text-[16px] leading-[24px] text-white hover:text-secondary cursor-pointer`}>
                                <a href="https://twitter.com/yakaibaku" target="_blank">Twitter </a>
                            </li>
                          </a>
                          <a href="https://www.whatsapp.com">
                          <li className={`font-poppins font-normal text-[16px] leading-[24px] text-white hover:text-secondary cursor-pointer`}>
                                <a href="https://t.me/yakaibakuofficial" target="_blank">Chat</a>
                            </li>
                          </a>
                          <a href="https://www.whatsapp.com">
                          <li className={`font-poppins font-normal text-[16px] leading-[24px] text-white hover:text-secondary cursor-pointer`}>
                                <a href="https://t.me/yakaibakuofficialANN" target="_blank">Telegram</a>
                            </li>
                          </a>
                        </ul>
                    </div>

                    <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                        <h4 className="text-white font-poppins font-medium text-[18px] leading-[27px]">
                            Partner
                        </h4>
                        <ul>
                          <a href="https://www.whatsapp.com">
                          <li className={`font-poppins font-normal text-[16px] leading-[24px] text-white hover:text-secondary cursor-pointer`}>
                                Our Partner
                            </li>
                          </a>
                          <a href="https://www.whatsapp.com">
                          <li className={`font-poppins font-normal text-[16px] leading-[24px] text-white hover:text-secondary cursor-pointer`}>
                                Become Our Partner
                            </li>
                          </a>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer