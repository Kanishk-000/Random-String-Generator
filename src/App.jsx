import { useState } from 'react'
import Btn from './components/Btn'
import Options from './components/Options'
import Output from './components/Output'

const lwr = [];
const uppr = [];
const num = [];
const symb = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
for (let i = 97; i<97+26; i++){
  lwr.push(String.fromCharCode(i));
}
for (let i = 65; i<65+26; i++){
  uppr.push(String.fromCharCode(i));
}
for (let i=0; i<=9; i++)
    num.push(i.toString());


function App() {
  const [output, setOutput] = useState("")
  const [custom, setCustom] = useState("");
  const [inclLower, setInclLower] = useState(false);
  const [inclUppr, setInclUppr] = useState(false);
  const [inclNum, setInclNum] = useState(false);
  const [inclSymb, setInclSymb] = useState(false);
  const [freq, setFreq] = useState(0);
  const [len, setLen] = useState(0);
  const props = {
    custom: custom,
    inclLower: inclLower,
    inclUppr: inclUppr,
    inclNum: inclNum,
    inclSymb: inclSymb,
    freq: freq,
    len: len,
    setCustom: setCustom,
    setInclLower: setInclLower,
    setInclUppr: setInclUppr,
    setInclNum: setInclNum,
    setInclSymb: setInclSymb,
    setFreq: setFreq,
    setLen: setLen
  }
  const btnClick = ()=>{
    let newChars = [];
    if (inclLower)
      newChars.push(...lwr);
    if (inclUppr)
      newChars.push(...uppr);
    if (inclNum)
      newChars.push(...num);
    if (inclSymb)
      newChars.push(...symb);

    // Adding custom characters
    newChars.push(...Array.from(custom));

    // Generate Data
    const newOutput = [];
    for (let i = 0; i<freq; i++){
      let str = "";
        for (let j = 0; j<len; j++){
          const ch = newChars[Math.floor(Math.random()*(newChars.length))];
          str += ch;
        }
        newOutput.push(str);
    }
    let str = "";
    newOutput.forEach((value, idx)=>{
      str += value;
      str += "\n";
    });
    setOutput(str);
  }


  return (
    <>
      <main className='flex flex-col py-5 gap-10'>
        <h1 className='logo text-center text-2xl lg:text-7xl text-red-600'>Random String Generator</h1>
        <div className="generator flex items-center justify-center">
          <div className="container flex gap-5 flex-col items-center lg:flex-row lg:items-start">
            <Options props = {props}/>
            <Output output = {output} setOutput={setOutput}/>

          </div>
        </div>
        <div className="genBtn flex justify-center">
          <Btn handleClick = {btnClick}/>
        </div>
      </main>
    </>
  )
}

export default App
