import { useState } from "react";
import DisplayInput from "./DisplayInput";
import InputValue from "./InputValue";

const LiftingStateUp = () => {
  let [inputValue, setInputValue] = useState("");

  return (
    <>
      <InputValue inputValue={inputValue} setInputValue={setInputValue} />
      <DisplayInput inputValue={inputValue} />
    </>
  );
};

export default LiftingStateUp;
