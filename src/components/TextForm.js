import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };
  const handleClear = () => {
    setText("");
  };
  const handleCopy = () => {
  const text = document.getElementById("textarea")
  // text.select();
  navigator.clipboard.writeText(text.value)
  };

  return (
    <>
      <div
        className={`d-flex mx-4 text-${props.mode === `light` ? `light` : `dark`
          } `}
      >
        <h1 className="d-flex mt-4 mx-4">{props.heading}</h1>
      </div>

      <div className="d-flex  mx-4 ">
        <div className="input-group ">
          <textarea id="textarea"
          spellCheck="false"
            value={text}
            onChange={handleOnChange}
            rows={8}
            cols={4}
            // style={{ backgroundColor: "rgb(0, 47, 68)", color: "white" }}
            style={
              props.mode === `light`
                ? { backgroundColor: "rgb(0, 47, 68)", color: 'white' }
                : { backgroundColor: "rgb(183, 243, 241)", color: 'black', border: '1px solid black' }
            }
            className="form-control mt-1 mb-3 mx-4  p-2"
            aria-label="With textarea"
          ></textarea>
        </div>
      </div>

      <div className="d-flex mx-4">
        <button disabled={text.length===0}
          className={`btn btn-outline-${props.mode === `light` ? `info` : `dark`
            } ms-4`}
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button disabled={text.length===0}
          className={`btn btn-outline-${props.mode === `light` ? `info` : `dark`
            } ms-2`}
          onClick={handleLoClick}
        >
          Convert to LowerCase
        </button>
        <button disabled={text.length===0}
          className={`btn btn-outline-${props.mode === `light` ? `info` : `dark`
            }  ms-2`}
          onClick={handleClear}
        >
          Clear Text
        </button>
        {/* <button disabled={text.length===0}
          className={`btn btn-outline-${props.mode === `light` ? `info` : `dark`
            } ms-2`}
          onClick={handleCopy}
        >
          Copy Text
        </button> */}
      </div>
      <div
        className={`container text-${props.mode === `light` ? `light` : `dark`
          } m-4`}
      >
        <h2>Your Text Summary</h2>
        <p className="mb-0">
          {text.split(/\s+/).filter((element)=>{return element.length>0}).length} words and  {text.replace(/\s+/g,'').length} characters
        </p>
        <small>
          
          {text.split(" ").filter((element)=>{return element.length>0}).length * 0.01} Minutes Estimated time to read
        </small>
        <h2 className="mb-0 mt-2">Preview</h2>
        <small>{text.length > 0 ? text : "Enter Something to Preview"}</small>
      </div>
    </>
  );
}
