import { useState } from "react";
import React from "react";

export default function TextArea(props) {
    const [text, setText] = useState("");

    const handleChange = function(event){
        setText(event.target.value);
    }

    const handleUpper = function(){
        setText(text.toUpperCase());
    }
    const handleLower = function(){
        setText(text.toLowerCase());
    }
    const handleClear = function(){
        setText("");
    }
    const handleCopy = function(){
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    // const handleExtraSpaces = () => {
    //   let newText = text.split(/[ ]+/);
    //   setText(newText.join(" "));
    // }

  return (
    <>
      <div className="container" style={{color: props.theme==="dark" ? "light" : "black"}}>
          <h2 className={`my-3 text-${props.theme==="light" ? "dark" : "light"}`}>Enter the text to analyze below</h2>
      <div className="form">
        <textarea
          className="form-control mb-3"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleChange}
          style={{backgroundColor: props.theme==="light" ? "white" : "grey", color: props.theme==="light" ? "black" : "white"}}
        ></textarea>
        <label htmlFor="floatingTextarea"></label>
      </div>
      <button type="button" className="btn btn-primary mx-1" onClick={handleUpper}>Convert to UpperCase</button>
      <button type="button" className="btn btn-primary mx-1" onClick={handleLower}>Convert to LowerCase</button>
      <button type="button" className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
      <button type="button" className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      </div>
      <div className={`container my-4 text-${props.theme==="light" ? "dark" : "light"}`}>
          <h4>Your Text Summary</h4>
          <p> {text.split(" ").length} word and {text.length} characters</p>
          <h5>Preview</h5>
          <p>{text.length===0 ? 'Enter some text to preview' : text}</p>
      </div>
    </>
  );
}
