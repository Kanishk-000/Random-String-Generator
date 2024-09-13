import React from 'react'
import Gear from "../assets/gear.svg"

const Btn = ({ handleClick }) => {
  return (
    <button className='w-40 h-14 bg-[#76ABAE] flex items-center px-4 gap-4 rounded-lg hover:bg-[#659396]  transition-all duration-300' onClick={handleClick}>
        <img src={Gear} alt="" />
        <span className='text-[#222831] text-2xl font-bold'>Generate</span>
    </button>
  )
}

export default Btn
