import React from 'react'

const Options = ({ props }) => {
    const handleCheck = (e)=>{
        const id = e.target.id;
        const isChecked = e.target.checked;
        if (id == "lwr")
            props.setInclLower(isChecked);
        else if (id == "uppr")
            props.setInclUppr(isChecked);
        else if (id == "num")
            props.setInclNum(isChecked);
        else if (id == "symb")
            props.setInclSymb(isChecked);
    console.log(props);
    }
    const handleFreq = (e)=>{
        props.setFreq(e.target.value);
    }
    const handleLen = (e)=>{
        props.setLen(e.target.value);
    }
    const handleCustom = (e)=>{
        props.setCustom(e.target.value);
    }
    return (
        <div className='bg-[#31363F] w-[95%] lg:w-[50%] rounded-xl flex h-[550px] items-center justify-center px-5'>
            <div className="container flex flex-col gap-4">

                <div className="lowerCase flex gap-2 items-center">
                    <input type="checkbox" name="lowerCase" id="lwr" onClick={handleCheck}/>
                    <label htmlFor="lwr" className='text-lg font-Poppins'>use lowercase alphabets</label>
                </div>
                <div className="upperCase flex gap-2 items-center">
                    <input type="checkbox" name="upperCase" id="uppr" onClick={handleCheck}/>
                    <label htmlFor="uppr" className='text-lg font-Poppins'>USE UPPERCASE ALPHABETS</label>
                </div>
                <div className="numbers flex gap-2 items-center">
                    <input type="checkbox" name="number" id="num" onClick={handleCheck}/>
                    <label htmlFor="num" className='text-lg font-Poppins'>Use Numbers</label>
                </div>
                <div className="symbols flex gap-2 items-center">
                    <input type="checkbox" name="symbol" id="symb" onClick={handleCheck}/>
                    <label htmlFor="symb" className='text-lg font-Poppins'>Use Symbols</label>
                </div>
                <div className="freq flex gap-2 items-center">
                    <div className="text text-lg font-Poppins" >Enter No. of Strings Required</div>
                    <input type="number" name="freq" className='h-8 w-20 bg-[#14181d] rounded-lg px-2 focus:outline-none focus:outline-[#76ABAE]' onChange = {handleFreq} value={props.freq}/>
                </div>
                <div className="len flex gap-2 items-center">
                    <div className="textLen text-lg font-Poppins" >Enter Length of Each String</div>
                    <input type="number" name="len" className='h-8 w-20 bg-[#14181d] rounded-lg px-2  focus:outline-none focus:outline-[#76ABAE]' onChange = {handleLen} value={props.len}/>
                </div>
                <div className="custom flex gap-2 flex-col justify-center">
                    <div className="textCustom text-lg font-Poppins" >Add Custom Characters</div>
                    <textarea name="custom" className='resize-none w-3/4 h-40 bg-[#14181d] rounded-lg px-2 focus:outline-none focus:outline-[#76ABAE] font-Poppins' value = {props.custom} onChange = {handleCustom}></textarea>
                </div>

            </div>
        </div>
    )
}

export default Options
