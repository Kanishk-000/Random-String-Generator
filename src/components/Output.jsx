import React from 'react'

const Output = ({output, setOutput}) => {
    const handleChange = (e)=>{
        setOutput(e.target.value);
    }
  return (
    <div className='bg-[#31363F] w-[95%] lg:w-[50%] rounded-xl flex flex-col gap-2 h-[550px] py-7 items-center'>
        <h1 className='text-3xl'>Generated Strings</h1>
        <textarea name="output" className="ouput bg-[#14181d] w-[95%] h-[90%] rounded-xl resize-none p-2 focus:outline-none focus:outline-[#76ABAE] font-Poppins" value = {output} onChange = {handleChange}></textarea>
      
    </div>
  )
}

export default Output
