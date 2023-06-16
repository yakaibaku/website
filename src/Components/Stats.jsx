import React from "react"
import arbitrum from "../assets/arbitrum.png"

const Stats = () => {
  return (
    <div className="flex-1 space-between flex justify-start items-center flex-row m-3">
        <h4 className="font-poppins text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-400 font-semibold xs:text-[20px] text-[20px] xs:leading-[53px] leading-[43px] ">Built on : </h4>
        <img src={arbitrum} alt="arbitrum" className="w-[150px] h-[100px]" />
    </div>
  )
}

export default Stats