import React from "react"
import arbitrum from "../assets/arbitrum.png"
import logo from "../assets/yakai.png"
import logob from "../assets/boom.png"

const Stats = () => {
  return (
    <div>
      <div className="flex-1 space-between flex justify-start items-center flex-row m-3">
        <h4 className="font-poppins text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-400 font-semibold xs:text-[20px] text-[20px] xs:leading-[53px] leading-[43px] ">Built on : </h4>
        <img src={arbitrum} alt="arbitrum" className="w-[150px] h-[100px]" />
      </div>

      <div className="flex-1 space-between flex justify-start items-center flex-row m-3 gap-2">
        <img src={logo} className="h-10 w-10" alt="logo" />
        <h4 className="font-poppins text-transparent bg-clip-text bg-gray-100 font-semibold xs:text-[20px] text-[20px] xs:leading-[53px] leading-[43px]"><a href="https://bscscan.com/token/0x58491b3b96EAf3274Ff6703ED05D01Ba405243Bc" target="_blank">Yakai baku(KAI): 0x58491b3b96EAf3274Ff6703ED05D01Ba405243Bc</a></h4>
      </div>

      <div className="flex-1 space-between flex justify-start items-center flex-row m-3 gap-2">
        <img src={logob} className="h-10 w-10" alt="logo" />
        <h4 className="font-poppins text-transparent bg-clip-text bg-gray-100 font-semibold xs:text-[20px] text-[20px] xs:leading-[53px] leading-[43px]">Yakai BOOM(BOOM): coming soon</h4>
      </div>
    </div>
  )
}

export default Stats