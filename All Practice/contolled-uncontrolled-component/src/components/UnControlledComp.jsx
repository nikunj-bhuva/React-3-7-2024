import { useRef, useState } from "react";

const UnControlledComp = () => {
  const [name, setName] = useState(""); //initial value.
  // useRef hook no use jo tamare input field ni value react ni useState ni madad thi controll na karvi hoy tamare uncontrolled component banavu hoy to useRef hook no use thay che te ek object ape che ane input ni value ne handle useRef hook j kare che //

  const inputRef = useRef(""); //initial value.

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setName(inputRef.current.value); //set input value.
    inputRef.current.value = ""; //after submit button input value is empty.
  };

  return (
    <div className="text-center">
      <form onSubmit={handleFormSubmit}>
        <input
          ref={inputRef}
          className="fw-medium"
          type="text"
          placeholder="enter your name"
        />
        <button type="submit" className="btn btn-dark mx-4">
          Submit
        </button>
      </form>
      <p className="fw-medium text-center mt-4">{name}</p>
    </div>
  );
};

export default UnControlledComp;
