import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("Enter the Text");
  const [isUpperCaseButton, setIsUpperCaseButton] = useState(true);

  const handleUpClick = (event) => {
    // const upperCaseText = text.toLocaleUpperCase();
    let upperCaseText = text.toUpperCase();
    setText(upperCaseText);
    // console.log("Clicked" + text);
  };

  const handleLcClick = (event) => {
    const LowerCaseText = text.toLocaleLowerCase();
    // let LowerCaseText = text.toLowerCase();
    setText(LowerCaseText);
    // console.log("Clicked" + text);
  };

  // const handleOnChange = (event) => {
  //     setText(event.target.value);
  //     // console.log("On Changed");
  // };

  // Inn another way
  const handleOnChange = (event) => setText(event.target.value);

  const handleMainButton = () => {
    let textValue = text;

    isUpperCaseButton
      ? (textValue = text.toUpperCase())
      : (textValue = text.toLowerCase());

    setText(textValue);
    setIsUpperCaseButton(!isUpperCaseButton);
    // setIsUpperCaseButton(isUpperCaseButton ? false : true);
  };

  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label"></label>
        <textarea
          // OnChange - To type text in textarea
          onChange={handleOnChange}
          className="form-control"
          value={text}
          placeholder="Leave a comment here"
          id="myBox"
          rows={8}
        ></textarea>
      </div>

      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-secondary ml-3" onClick={handleLcClick}>
        Convert to Lowercase
      </button>
       {/* Both Functionality at one place  */}
       <button
        className={isUpperCaseButton ? "btn btn-primary" : "btn btn-secondary"}
        onClick={handleMainButton}
      >
        {isUpperCaseButton ? "Convert to Uppercase" : "Convert to Lowercase"}
      </button>
    </>
  );
};

export default TextForm;
