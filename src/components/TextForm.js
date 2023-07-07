import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText]= useState('');
   const handleUpClick=()=>{
    let Newtext= text.toUpperCase();
setText(Newtext);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
            }
    const handleLoClick=()=>{
     let Newtext= text.toLowerCase();
      setText(Newtext);
      }
      const handleClearClick=()=>{
        let Newtext=(' ');
         setText(Newtext);
         }
         const handlecopy=()=>{
            navigator.clipboard.writeText(text);
            }
         const handleExtraspaces=()=>{
            let Newtext=text.split(/[ ]+/);
             setText(Newtext.join(' '));
            }

    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows={10} >
                </textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to UpperCase</button>
            <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to LowerCase</button>
            <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear text</button>
            <button className='btn btn-primary mx-1' onClick={handlecopy}>copy text</button>
            <button className='btn btn-primary mx-1' onClick={handleExtraspaces}>Remove Extra spaces</button>
        </div>
        <div className="container">
          <h2 className='my-3'>Your Text Summary</h2>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p> {0.008*text.split(" ").length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
        </>
    )
}
