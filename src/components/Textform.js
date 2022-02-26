import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
const handleUpClick = ()=>{
  // console.log(text);
   let newText = text.toUpperCase();
   setText(newText);
}
const handleOnChange = (event)=>{
  // console.log("On Change");
  setText(event.target.value)
}


  const [text, setText] = useState('Enter text here');
  // text="new text" //wrong way to change text
  //setText("new text"); //correct way to change text
  return (
    
    <div>
  
     <h1>{props.heading}</h1>
     <div className="mb-3">
      <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange}></textarea>
    </div>
    <button className='btn btn-primary' onClick={handleUpClick}>Convert to Upper Case</button>
  </div>
  )
}

Textform.propTypes = {heading:PropTypes.string.isRequired}
