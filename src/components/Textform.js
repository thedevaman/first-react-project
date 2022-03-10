import React,{useState} from 'react'
import PropTypes from 'prop-types'

// useState : this is hooks

export default function Textform(props) {
const handleUpClick = ()=>{
  // console.log(text);
   let newText = text.toUpperCase();
   setText(newText);
}
const handlelowClick = ()=>{
  // console.log(text);
   let newText = text.toLowerCase();
   setText(newText);
}
const handleOnChange = (event)=>{
  // console.log("On Change");
  setText(event.target.value)
}


  const [text, setText] = useState('');
  // text="new text" //wrong way to change text
  //setText("new text"); //correct way to change text
  return (
    <>
    <div>
  
     <h1>{props.heading}</h1>
     <div className="mb-3">
      <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange}></textarea>
    </div>
    <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Upper Case</button>
    <button className='btn btn-primary mx-1' onClick={handlelowClick}>Convert to Upper Case</button>
  </div>

  <div className="container my-3">
 <h2>Your text Summary</h2>
 <p>{text.split(" ").length} words {text.length} characters</p>
 <p>{text.split(" ").length*0.008} minutes takes to read above word</p>
 <h2>preview</h2>
 <p>{text}</p>
  </div>
  </>

  )
}

Textform.propTypes = {heading:PropTypes.string.isRequired}
