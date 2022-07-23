
import React, { useState } from 'react';


export default function Textform(props) {

const uppercase=()=>{

let newtext=Text.toUpperCase();
setText(newtext);

}

const lowercase=()=>{
let newtext=Text.toLowerCase();
setText(newtext);
}
const clearcase=()=>{
let newtext=' '
setText(newtext);
}

const copytext=()=>{
var text=document.getElementById("textbox");
text.select();
navigator.clipboard.writeText(text.value);
}
const removeextraspaces=()=>{
let newtext=Text.split(/[ ]+/);
setText(newtext.join(" "))
}



const handleOnChange=(event)=>{
    setText(event.target.value)
}
    const [Text, setText] = useState('enter Text here');



  return (
    <>
<div>
        
      <div className="mb-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
    <label htmlFor="textbox"></label>
    <textarea className="form-control" value={Text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white'   }} id="textbox" rows="8"></textarea>
  </div>
  <button disabled={Text.length===0} className="btn btn-primary mx-2 my-1" onClick={uppercase}>Convert to Upper case</button>
  <button disabled={Text.length===0} className="btn btn-primary mx-2 my-1" onClick={lowercase}>Convert to Lower case</button>

  <button disabled={Text.length===0} className="btn btn-primary mx-2 my-1" onClick={clearcase}>Clear Text</button>
  <button disabled={Text.length===0} className="btn btn-primary mx-2 my-1" onClick={copytext}>Copytoclipbooard</button>
  <button disabled={Text.length===0} className="btn btn-primary mx-2 my-1"  onClick={removeextraspaces}>Extra Spaces Handler</button>
    </div>
    <div className='container'   style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Yout Text summary is here</h1>
        <p>{Text.split(/[\s,]+/).filter((element)=>{return element.length!==0}).length} word and {Text.length} character</p>
        <p>{0.008*Text.split(" ").length} is Reading Time</p>
        <h2>Preview</h2>
        <p>{Text}</p>
    </div>
    </>

  )
}
